﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiclesController : ControllerBase
    {
        private readonly AddHack3Context _context;

        public VehiclesController(AddHack3Context context)
        {
            _context = context;
        }

        // GET: api/Vehicles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vehicle>>> GetVehicles()
        {
            if (_context.Vehicles == null)
            {
                return NotFound();
            }
            return await _context.Vehicles.ToListAsync();
        }

        // GET: api/Vehicles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Vehicle>> GetVehicle(Guid id)
        {
            if (_context.Vehicles == null)
            {
                return NotFound();
            }
            var vehicle = await _context.Vehicles.FindAsync(id);

            if (vehicle == null)
            {
                return NotFound();
            }

            return vehicle;
        }

        [HttpGet("{id}/Driving")]
        public async Task<ActionResult<Driving>> GetVehicleDriving(Guid id)
        {
            if (_context.Vehicles == null || _context.Drivings == null || _context.Routes == null)
            {
                return NotFound();
            }
            var vehicle = await _context.Vehicles.FindAsync(id);

            if (vehicle == null)
            {
                return NotFound();
            }

            var driving = await _context.Drivings.
                Include(d => d.DrivingStops.OrderBy(r => r.Ordinal)).
                ThenInclude(ds => ds.Stop).
                Include(d => d.Route).
                FirstOrDefaultAsync(d => d.VehicleId == id && d.Date == DateTime.Today);

            if (driving == null)
            {
                var route = await _context.Routes.
                    Include(r => r.RouteStops).
                    FirstOrDefaultAsync(d => d.VehicleId == id);
                if (route == null)
                {
                    return NotFound();
                }

                driving = new Driving();
                driving.Id = Guid.NewGuid();
                driving.Date = DateTime.Today;
                driving.Route = route;
                driving.Vehicle = vehicle;
                _context.Drivings.Add(driving);

                await _context.SaveChangesAsync();

                foreach (RouteStop rs in route.RouteStops.OrderBy(r => r.Ordinal))
                {
                    var drivingStop = new DrivingStop()
                    {
                        DrivingId = driving.Id,
                        StopId = rs.StopId,
                        Ordinal = rs.Ordinal
                    };
                    _context.DrivingStops.Add(drivingStop);
                }

                await _context.SaveChangesAsync();

                driving = await _context.Drivings.
                    Include(d => d.DrivingStops.OrderBy(r => r.Ordinal)).
                    ThenInclude(ds => ds.Stop).
                    Include(d => d.Route).
                    FirstAsync(d => d.VehicleId == id && d.Date == DateTime.Today);
            }

            return driving;
        }

        // PUT: api/Vehicles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVehicle(Guid id, Vehicle vehicle)
        {
            if (id != vehicle.Id)
            {
                return BadRequest();
            }

            _context.Entry(vehicle).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehicleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Vehicles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Vehicle>> PostVehicle(Vehicle vehicle)
        {
            if (_context.Vehicles == null)
            {
                return Problem("Entity set 'AddHack3Context.Vehicles'  is null.");
            }
            _context.Vehicles.Add(vehicle);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (VehicleExists(vehicle.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetVehicle", new { id = vehicle.Id }, vehicle);
        }

        // DELETE: api/Vehicles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVehicle(Guid id)
        {
            if (_context.Vehicles == null)
            {
                return NotFound();
            }
            var vehicle = await _context.Vehicles.FindAsync(id);
            if (vehicle == null)
            {
                return NotFound();
            }

            _context.Vehicles.Remove(vehicle);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VehicleExists(Guid id)
        {
            return (_context.Vehicles?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
