using Microsoft.AspNetCore.Identity;
using Microsoft.OpenApi.Models;
using MinerViewer.Configuration;
using MinerViewer.Context;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddCors();
builder.Services.AddControllersWithViews();
builder.Services.AddSqlite<DatabaseContext>(connectionString);
//builder.Services.AddSwaggerGen();
builder.Services.AddAuthentication("Bearer")
   .AddJwtBearer("Bearer", opt =>
   {
       opt.RequireHttpsMetadata = false;
       opt.Authority = "https://localhost:7116";
       opt.Audience = "companyApi";
   });

builder.Services.AddIdentityServer()
        .AddInMemoryApiScopes(InMemoryConfig.GetApiScopes())
        .AddInMemoryApiResources(InMemoryConfig.GetApiResources())
        .AddInMemoryIdentityResources(InMemoryConfig.GetIdentityResources())
        .AddTestUsers(InMemoryConfig.GetUsers())
        .AddInMemoryClients(InMemoryConfig.GetClients())
        .AddDeveloperSigningCredential(); 



var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
else
{
    
}
//app.UseSwagger();
//app.UseSwaggerUI();
//app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyHeader());
app.UseRouting();
app.UseIdentityServer();
app.UseAuthorization();
app.UseAuthentication();



app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

//app.MapFallbackToFile("index.html"); ;

app.Run();



