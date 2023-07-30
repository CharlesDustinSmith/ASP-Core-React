// using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
        public ActivitiesController(DataContext context)
        {
            this._context = context;
        }

        [HttpGet]       // Route: api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await this._context.Activities.ToListAsync();
        }

        [HttpGet("{id}")]       // api/activites/fdfkfdfk
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await this._context.Activities.FindAsync(id);
        }

    }
}