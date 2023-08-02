using Microsoft.AspNetCore.Mvc;
using Domain;
using Application.Activities;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        [HttpGet]       // Route: api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]       // api/activites/fdfkfdfk
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }
    }
}