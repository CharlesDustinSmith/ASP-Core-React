using Microsoft.AspNetCore.Mvc;
using MediatR;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator _mediator;
        // This will return _mediator if it is not null otherwise it will return an IMediator service
        protected IMediator Mediator => _mediator ??= 
            HttpContext.RequestServices.GetService<IMediator>();
    }
}