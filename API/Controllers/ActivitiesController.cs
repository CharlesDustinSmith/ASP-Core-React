using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain;
using Application;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly IMediator _mediator;
        public ActivitiesController(IMediator mediator)
        {
            this._mediator = mediator;

        }

        [HttpGet]       // Route: api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]       // api/activites/fdfkfdfk
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return Ok();
        }

    }
}