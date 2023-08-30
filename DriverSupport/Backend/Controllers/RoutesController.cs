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
            IQueryable<Route> routes = _context.Routes;
            if (vehicleId != null) {
                routes = routes.Where(r => r.VehicleId == vehicleId);
            }
            return await routes.
                Include(r => r.RouteStops.OrderBy(r => r.Ordinal)).
                ThenInclude(rs => rs.Stop).
                ToListAsync();
        }

        // GET: api/Routes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Route>> GetRoute(Guid id)
        {
          if (_context.Routes == null)
          {
              return NotFound();
          }
            var route = await _context.Routes.
                Include(r => r.RouteStops.OrderBy(r => r.Ordinal)).
                ThenInclude(rs => rs.Stop).
                FirstOrDefaultAsync(r => r.Id == id);

            if (route == null)
            {
                return NotFound();
            }

            return route;
        }
    }
}
