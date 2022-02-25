using Microsoft.EntityFrameworkCore;
using RaidManager.Database;
using RaidManager.App.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

var connectionString = builder.Configuration.GetConnectionString("AppConnectionString"); 
builder.Services.AddDbContext<RaidManagerContext>(x => x.UseSqlServer(connectionString));

builder.Services.AddScoped<IRaidService, RaidService>();

builder.Services.AddSwaggerDocument(settings =>
{
    settings.PostProcess = document =>
    {
        document.Info.Version = "v1";
        document.Info.Title = "Raid Manager API";
        document.Info.Description = "Raid Manager API";
    };
});

#if DEBUG
using (var serviceProvider = builder.Services.BuildServiceProvider())
{
    using (var serviceScope = serviceProvider.GetRequiredService<IServiceScopeFactory>().CreateScope())
    {
        var context = serviceScope.ServiceProvider.GetService<RaidManagerContext>();
        context.Database.EnsureCreated();
    }
}
#endif

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseOpenApi();
    app.UseSwaggerUi3();
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");


app.Run();
