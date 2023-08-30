using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DrivingsController : ControllerBase
    {
        private readonly AddHack3Context _context;

        public DrivingsController(AddHack3Context context)
        {
            _context = context;
        }

        // GET: api/Drivings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Driving>>> GetDrivings()
        {
          if (_context.Drivings == null)
          {
              return NotFound();
          }
            return await _context.Drivings.ToListAsync();
        }

        // GET: api/Drivings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Driving>> GetDriving(Guid id)
        {
          if (_context.Drivings == null)
          {
              return NotFound();
          }
            var driving = await _context.Drivings.
                Include(d => d.DrivingStops.OrderBy(r => r.Ordinal)).
                ThenInclude(ds => ds.Stop).
                Include(d => d.Route).
                FirstOrDefaultAsync(d => d.Id == id);

            if (driving == null)
            {
                return NotFound();
            }

            return driving;
        }
    }
}
