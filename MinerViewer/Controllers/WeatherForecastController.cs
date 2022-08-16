using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MinerViewer.Context;

namespace MinerViewer.Controllers
{
    [ApiController]
    [Route("api")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly DatabaseContext us;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, DatabaseContext _us)
        {
            us = _us;
            _logger = logger;
        }
        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("weather")]
        public IEnumerable<WeatherForecast> Get()
        {
            var claims = User.Claims;
            var y = us.Blog;
           // y.Add(new Blog() { BlogId = 1, Url = "as" }) ;
            //us.SaveChanges();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("company")]
        public IEnumerable<WeatherForecast> GetCompany()
        {

            var y = us.Blog;
            // y.Add(new Blog() { BlogId = 1, Url = "as" }) ;
            //us.SaveChanges();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}