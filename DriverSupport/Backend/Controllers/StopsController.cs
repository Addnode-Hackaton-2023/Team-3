using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
using System.Net;
using System.Text;
using Azure;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StopsController : ControllerBase
    {
        private readonly AddHack3Context _context;

        public StopsController(AddHack3Context context)
        {
            _context = context;
        }

        // GET: api/Stops
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Stop>>> GetStops()
        {
            if (_context.Stops == null)
            {
                return NotFound();
            }

            return await _context.Stops.ToListAsync();
        }

        // GET: api/Stops/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Stop>> GetStop(Guid id)
        {
            if (_context.Stops == null)
            {
                return NotFound();
            }
            var stop = await _context.Stops.FindAsync(id);

            if (stop == null)
            {
                return NotFound();
            }

            return stop;
        }

        [HttpGet("{id}/Image")]
        public async Task<IActionResult> GetStopImage(Guid id)
        {
            if (_context.Stops == null)
            {
                return NotFound();
            }
            var stop = await _context.Stops.FindAsync(id);

            if (stop == null || stop.Image == null)
            {
                return NotFound();
            }

            Response.Headers["Content-Disposition"] = "inline;filename=\"" + Uri.EscapeDataString(stop.Name + "-" + stop.Address) + ".png\"";

            return File(stop.Image, "image/png");
        }

        // PUT: api/Stops/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStop(Guid id, Stop stop)
        {
            if (id != stop.Id)
            {
                return BadRequest();
            }

            _context.Entry(stop).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StopExists(id))
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

        // POST: api/Stops
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Stop>> PostStop(Stop stop)
        {
            if (_context.Stops == null)
            {
                return Problem("Entity set 'AddHack3Context.Stops'  is null.");
            }
            _context.Stops.Add(stop);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (StopExists(stop.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetStop", new { id = stop.Id }, stop);
        }

        // DELETE: api/Stops/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStop(Guid id)
        {
            if (_context.Stops == null)
            {
                return NotFound();
            }
            var stop = await _context.Stops.FindAsync(id);
            if (stop == null)
            {
                return NotFound();
            }

            _context.Stops.Remove(stop);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StopExists(Guid id)
        {
            return (_context.Stops?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
