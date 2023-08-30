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
            var driving = await _context.Drivings.FindAsync(id);

            if (driving == null)
            {
                return NotFound();
            }

            return driving;
        }

        // PUT: api/Drivings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDriving(Guid id, Driving driving)
        {
            if (id != driving.Id)
            {
                return BadRequest();
            }

            _context.Entry(driving).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DrivingExists(id))
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

        // POST: api/Drivings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Driving>> PostDriving(Driving driving)
        {
          if (_context.Drivings == null)
          {
              return Problem("Entity set 'AddHack3Context.Drivings'  is null.");
          }
            _context.Drivings.Add(driving);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DrivingExists(driving.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetDriving", new { id = driving.Id }, driving);
        }

        // DELETE: api/Drivings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDriving(Guid id)
        {
            if (_context.Drivings == null)
            {
                return NotFound();
            }
            var driving = await _context.Drivings.FindAsync(id);
            if (driving == null)
            {
                return NotFound();
            }

            _context.Drivings.Remove(driving);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DrivingExists(Guid id)
        {
            return (_context.Drivings?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
