using Microsoft.EntityFrameworkCore;
using RecipeManager.Data;
using RecipeManager.API.Services;
using RecipeManager.Models;
using RecipeManager.Models.DTOs;
using RecipeManager.API;
using Newtonsoft.Json;

var builder = WebApplication.CreateBuilder(args);

// Add CORS policy
builder.Services.AddCors(co => {
    co.AddPolicy("name", pb => {
        pb.WithOrigins("*")
          .AllowAnyHeader()
          .AllowAnyMethod();
    });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure DbContext and Repositories
string connectionString = builder.Configuration.GetConnectionString("recipesStored")!;
builder.Services.AddDbContext<RecipeContext>(options => options.UseSqlServer(connectionString));

// Register repositories and services
builder.Services.AddScoped<IRecipeRepo, RecipeRepo>();
builder.Services.AddScoped<IRecipeService, RecipeService>();
builder.Services.AddScoped<IIngredientRepo, IngredientRepo>();
builder.Services.AddScoped<IIngredientService, IngredientService>();

// Register AutoMapper
builder.Services.AddAutoMapper(typeof(MappingProfile));
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.Preserve;
    });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGet("/", () => "Hello");
app.UseCors("name");
app.UseHttpsRedirection();
app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();