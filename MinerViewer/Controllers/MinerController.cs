using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MinerViewer.Context;
using MinerViewer.Data.Entities;
using MinerViewer.HTTP;
using Newtonsoft.Json;

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
        [HttpGet("showMiners")]
        public async Task<IEnumerable<MinerAdress>> ShowMiners()
        {
            var result = await us.MinerAdresses.ToListAsync();
            return result;
        }


        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost("addMiner")]
        public async Task<OkResult> AddMiner(MinerAdress ma)
        {

            bool responseMessage = false;

            try
            {
                string jsonResponse = await Http.GetRequestAsync($"http://{ma.Ip}/Miner/AddMiner");
                responseMessage = JsonConvert.DeserializeObject<bool>(jsonResponse);

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            if (responseMessage)
            {
                var t = us.MinerAdresses.Where(x => x.Id == ma.Id);

                if (!us.MinerAdresses.Where(x => x.Id == ma.Id).Any())
                {
                    us.MinerAdresses.Add(new MinerAdress() { Id = ma.Id, Ip = ma.Ip});
                    us.SaveChanges();
                }
                else
                {
                    throw new Exception("This miner already exist in db");
                }
                
            }
            return Ok();
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("DeleteMiner")]
        public async Task<OkResult> DeleteMiner(int id, string ip)
        {

            var t = us.MinerAdresses.Where(x => x.Id == id && x.Ip == ip).FirstOrDefault(); ;

                if (t != null)
                {
                    us.MinerAdresses.Remove(t);
                    us.SaveChanges();
                }
                else
                {
                    throw new Exception("Cant delete");
                }

            return Ok();
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("miner")]
        public async Task<Miner> GetMiner(int id)
        {
            Miner responseMessage = null!;
            var miner = await us.MinerAdresses.Where(x => x.Id == id).FirstOrDefaultAsync();
            if (miner != null)
            {
                try
                {
                    string jsonResponse = await Http.GetRequestAsync($"http://{miner.Ip}/Miner/GetInfo");
                    responseMessage = JsonConvert.DeserializeObject<Miner>(jsonResponse);

                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
            return responseMessage;
        }


        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("miners")]
        public async Task<IEnumerable<Miner>> Get()
        {


            var aliveMiners = us.MinerAdresses.ToList();
            var result = new List<Miner>();
            foreach(var miner in aliveMiners)
            {
                try
                {
                    
                    string jsonResponse = await Http.GetRequestAsync($"http://{miner.Ip}/Miner/GetInfo");
                    var responseMessage = JsonConvert.DeserializeObject<Miner>(jsonResponse);
                    result.Add(responseMessage);

                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    continue;
                }
            }
            return result.OrderBy(x => x.Id);
        }
        
        }
    }