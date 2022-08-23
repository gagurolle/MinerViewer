using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MinerViewer.Context;
using MinerViewer.Data.Entities;

namespace MinerViewer.Controllers
{
    [ApiController]
    [Route("api")]
    public class MinerController : ControllerBase
    {


        private readonly ILogger<MinerController> _logger;
        private readonly DatabaseContext us;

        public MinerController(ILogger<MinerController> logger, DatabaseContext _us)
        {
            us = _us;
            _logger = logger;
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("miners")]
        public IEnumerable<Miner> Get()
        {
            return getMiners();
        }

        public List<Miner> getMiners()
        {
            return new List<Miner>() { 
                new Miner() { 
                Id = 1,
                Location = "Moscow",
                Name = "RIG-1",
                Coin = "ETH",
                Ip = "192.168.1.31",
                Os = "Windows",
                Cards = new List<GraphicCard>() { 
                    new GraphicCard() { Name = "RTX3070", MemoryTemp = new Random().Next(50, 100) }, 
                    new GraphicCard() { Name = "RTX3090", MemoryTemp = new Random().Next(50, 100) } 
                } 
            }, new Miner() {
                Id = 1,
                Location = "Moscow",
                Name = "RIG-2",
                Coin = "ETH",
                Ip = "192.168.1.154",
                Os = "Debian",
                Cards = new List<GraphicCard>() {
                    new GraphicCard() { Name = "RTX3060", MemoryTemp = new Random().Next(50, 100) },
                    new GraphicCard() { Name = "RTX3060", MemoryTemp = new Random().Next(50, 100) } 
                }

            } };
        }
    }
}