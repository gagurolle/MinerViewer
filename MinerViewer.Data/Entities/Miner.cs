using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MinerViewer.Data.Entities
{
    public class Miner
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Os { get; set; }
        public string? Coin { get; set; }
        public string? Location { get; set; }
        public List<GraphicCard>? Cards { get; set; }
        public string? Ip { get; set; }
    }
}
