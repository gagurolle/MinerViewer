using IdentityServer4.Models;
using Microsoft.AspNetCore.Identity;
using Minerview.Identity.Configuration;
using Minerview.Identity.Data;
using Minerview.Identity.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddIdentity<AppUser, IdentityRole>(config =>
{
    config.Password.RequiredLength = 4;
    config.Password.RequireDigit = false;
    config.Password.RequireNonAlphanumeric = false;
    config.Password.RequireUppercase = false;
}).AddEntityFrameworkStores<AuthDbContext>()
                .AddDefaultTokenProviders();

builder.Services.AddIdentityServer().AddInMemoryApiResources(Configuration.ApiResources)
    .AddInMemoryIdentityResources(Configuration.IdentityResources)
    .AddInMemoryApiScopes(Configuration.ApiScopes)
    .AddInMemoryClients(Configuration.Clients)
    .AddDeveloperSigningCredential();


builder.Services.ConfigureApplicationCookie(config =>
{
    config.Cookie.Name = "Notes.Identity.Cookie";
    config.LoginPath = "/Auth/Login";
    config.LogoutPath = "/Auth/Logout";
});
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddControllersWithViews();
builder.Services.AddSqlite<AuthDbContext>(connectionString);
var app = builder.Build();




app.MapGet("/", () => "Hello World!");

app.UseIdentityServer();
app.Run();
 