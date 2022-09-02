using Microsoft.AspNetCore.Mvc;
using MinerViewer.Data.Entities;
using OpenHardwareMonitor.Hardware;
namespace SingleMiner.Controllers
{
    [ApiController]
    [Route("Miner")]
    public class MinerController : ControllerBase
    {
        private readonly ILogger<MinerController> _logger;

        public MinerController(ILogger<MinerController> logger)
        {
            _logger = logger;
        }

        [HttpGet("AddMiner")]
        public async Task<bool> AddMiner()
        {
            return true;
        }
       

        [HttpGet("GetInfo")]
        public async Task<Miner> Get()
        {

          /*  Computer myComputer = new Computer();
            myComputer.GPUEnabled = true;

            myComputer.Open();
            Console.WriteLine("--__--");
            foreach (var hardwareItem in myComputer.Hardware)
            {
                if (hardwareItem.HardwareType == HardwareType.GpuNvidia)
                {
                    foreach (var sensor in hardwareItem.Sensors)
                    {
                        if (sensor.SensorType == SensorType.Temperature)
                        {

                            myComputer.Close();
                            myComputer = new Computer();
                            if (sensor.Value < 1)
                            {
                                myComputer.Close();
                                
                                getTemp();
                            }
                            else
                            {
                                Console.WriteLine(sensor.Value.ToString());
                                Console.WriteLine(sensor.Identifier.ToString() + ":" + sensor.Value.ToString());
                                return getMiners();
                            }
                            
                        }
                    }
                   
                }
                
            }
            getTemp();
          */
            return getMiners();
        }

        private string getTemp()
        {
            Computer myComputer = new Computer();
            myComputer.GPUEnabled = true;

            myComputer.Open();

            foreach (var hardwareItem in myComputer.Hardware)
            {
                if (hardwareItem.HardwareType == HardwareType.GpuNvidia)
                {
                    foreach (var sensor in hardwareItem.Sensors)
                    {
                        if (sensor.SensorType == SensorType.Temperature)
                        {
                            if (sensor.Value < 1)
                            {
                                return getTemp();
                            }
                            else
                            {
                                Console.WriteLine(sensor.Value.ToString());
                                Console.WriteLine(sensor.Identifier.ToString() + ":" + sensor.Value.ToString());
                                return getTemp();
                            }

                        }
                    }
                }
            }
            return "нет температуры";
        }

        private Miner getMiners()
        {
            return 
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
            

             };
        }
    }
}