using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MinerViewer.Data.Entities
{
    public class GraphicCard
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int? MemoryTemp { get; set; }
        public int? HotSpotTemp { get; set; }
        public string? Cooler { get; set; }
    }
}
