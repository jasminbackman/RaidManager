using Microsoft.AspNetCore.Mvc;
using RaidManager.App.Services;

namespace RaidManager.App.Controllers
{
    [Route("api/[controller]")]
    public class RaidController : BaseController
    {
        private readonly IRaidService _manager;

        public RaidController(IRaidService manager)
        {
            _manager = manager;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var raids = await _manager.Get();
            return Ok(raids);
        }
    }
}
