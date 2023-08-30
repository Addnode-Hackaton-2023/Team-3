using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
using Route = Backend.Models.Route;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoutesController : ControllerBase
    {
        private readonly AddHack3Context _context;

        public RoutesController(AddHack3Context context)
        {
            _context = context;
        }

        // GET: api/Routes
        [HttpGet()]
        public async Task<ActionResult<IEnumerable<Route>>> GetRoutes(Guid? vehicleId = null)
        {
            if (_context.Routes == null)
            {
                return NotFound();
            }
            if (vehicleId != null) {
                return await _context.Routes.Where(r => r.VehicleId == vehicleId).ToListAsync();
            }
            return await _context.Routes.ToListAsync();
        }

        // GET: api/Routes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Route>> GetRoute(Guid id)
        {
          if (_context.Routes == null)
          {
              return NotFound();
          }
            var route = await _context.Routes.FindAsync(id);

            if (route == null)
            {
                return NotFound();
            }

            return route;
        }

        // PUT: api/Routes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRoute(Guid id, Route route)
        {
            if (id != route.Id)
            {
                return BadRequest();
            }

            _context.Entry(route).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RouteExists(id))
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

        // POST: api/Routes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Route>> PostRoute(Route route)
        {
          if (_context.Routes == null)
          {
              return Problem("Entity set 'AddHack3Context.Routes'  is null.");
          }
            _context.Routes.Add(route);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (RouteExists(route.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetRoute", new { id = route.Id }, route);
        }

        // DELETE: api/Routes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoute(Guid id)
        {
            if (_context.Routes == null)
            {
                return NotFound();
            }
            var route = await _context.Routes.FindAsync(id);
            if (route == null)
            {
                return NotFound();
            }

            _context.Routes.Remove(route);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RouteExists(Guid id)
        {
            return (_context.Routes?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
