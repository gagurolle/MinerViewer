using System.Text;

namespace MinerViewer.HTTP
{
    public class Http
    {
        private static readonly HttpClient client = new HttpClient();

        // POST
        public static async Task<string> PostRequestAsync(string url, string json)
        {
            using HttpContent content = new StringContent(json, Encoding.UTF8, "application/json");
            using HttpResponseMessage response = await client.PostAsync(url, content).ConfigureAwait(false);
            return await response.Content.ReadAsStringAsync().ConfigureAwait(false);
        }

        // GET
        public static async Task<string> GetRequestAsync(string url)
        {
            using HttpResponseMessage response = await client.GetAsync(url).ConfigureAwait(false);
            return await response.Content.ReadAsStringAsync().ConfigureAwait(false);
        }
    }

    public class RequestMessageData
    {
        public string Message { get; set; }
    }

    public class ResponseMessageData
    {
        public string Status { get; set; }
        public string Message { get; set; }
    }
}
