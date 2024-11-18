﻿using Microsoft.EntityFrameworkCore;
using RecipeManager.Models;

namespace RecipeManager.Data;

public class RecipeContext : DbContext
{
	public DbSet<Recipe> Recipes { get; set; }
	public DbSet<Ingredient> Ingredients { get; set; }

	public RecipeContext(DbContextOptions<RecipeContext> options) : base(options)
	{
	}

	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		base.OnModelCreating(modelBuilder);

		// Configure the one-to-many relationship between Recipe and Ingredient
		modelBuilder.Entity<Recipe>()
			.HasMany(r => r.Ingredients) // A recipe has many ingredients
			.WithOne(i => i.Recipe) // Each ingredient belongs to one recipe
			.HasForeignKey(i => i.RecipeId) // Foreign key in Ingredient
			.OnDelete(DeleteBehavior.Cascade); // Delete ingredients if the recipe is deleted

		// create an index on RecipeId in the Ingredients 
		// improves query performance when searching for ingredients by recipe
		modelBuilder.Entity<Ingredient>()
			.HasIndex(i => i.RecipeId);

		// Validation and constraints for Recipe Name 
		// ensures the Name is required and has max 100 characters 
		modelBuilder.Entity<Recipe>()
			.Property(r => r.Name)
			.IsRequired() // Name cant be null
			.HasMaxLength(100);


		// Validation and constraints for Ingredient Name
		// Ensures the Name is required and has a maximum length of 100 characters
		modelBuilder.Entity<Ingredient>()
			.Property(i => i.Name)
			.IsRequired() // Name cant be null
			.HasMaxLength(100);

		// Validation and constraints for Ingredient Quantity
		// Ensures the Quantity is required and has a maximum length of 50 characters
		modelBuilder.Entity<Ingredient>()
			.Property(i => i.Quantity)
			.IsRequired()                          // Quantity cannot be null
			.HasMaxLength(50);                     // Limit quantity description to 50 characters



		// Seed data for Recipes
		modelBuilder.Entity<Recipe>().HasData(
			new Recipe
			{
				RecipeId = 1,
				Name = "Spaghetti Carbonara",
				Instructions = "1. Cook pasta. 2. Fry bacon. 3. Mix eggs, cheese, and pepper. 4. Combine all ingredients.",
				CookingTime = "30 minutes",
				Servings = 4
			},
			new Recipe
			{
				RecipeId = 2,
				Name = "Classic Margherita Pizza",
				Instructions = "1. Prepare dough. 2. Spread tomato sauce. 3. Add mozzarella and basil. 4. Bake in hot oven.",
				CookingTime = "20 minutes",
				Servings = 2
			},
			new Recipe
			{
				RecipeId = 3,
				Name = "Chocolate Chip Cookies",
				Instructions = "1. Mix butter and sugars. 2. Add eggs and vanilla. 3. Combine dry ingredients. 4. Fold in chocolate chips. 5. Bake.",
				CookingTime = "15 minutes",
				Servings = 24
			}
		);

		// Seed data for Ingredients
		modelBuilder.Entity<Ingredient>().HasData(
			// Ingredients for Spaghetti Carbonara
			new Ingredient { IngredientId = 1, Name = "Noodles", Quantity = "400g", RecipeId = 1 },
			new Ingredient { IngredientId = 2, Name = "Bacon", Quantity = "200g", RecipeId = 1 },
			new Ingredient { IngredientId = 3, Name = "Eggs", Quantity = "4", RecipeId = 1 },
			new Ingredient { IngredientId = 4, Name = "Parmesan cheese", Quantity = "100g", RecipeId = 1 },

			// Ingredients for Classic Margherita Pizza
			new Ingredient { IngredientId = 5, Name = "Pizza dough", Quantity = "1", RecipeId = 2 },
			new Ingredient { IngredientId = 6, Name = "Tomato sauce", Quantity = "200g", RecipeId = 2 },
			new Ingredient { IngredientId = 7, Name = "Fresh mozzarella", Quantity = "200g", RecipeId = 2 },
			new Ingredient { IngredientId = 8, Name = "Fresh basil leaves", Quantity = "10-12", RecipeId = 2 },

			// Ingredients for Chocolate Chip Cookies
			new Ingredient { IngredientId = 9, Name = "Flour", Quantity = "280g", RecipeId = 3 },
			new Ingredient { IngredientId = 10, Name = "Butter", Quantity = "230g", RecipeId = 3 },
			new Ingredient { IngredientId = 11, Name = "Brown sugar", Quantity = "200g", RecipeId = 3 },
			new Ingredient { IngredientId = 12, Name = "White sugar", Quantity = "100g", RecipeId = 3 },
			new Ingredient { IngredientId = 13, Name = "Eggs", Quantity = "2", RecipeId = 3 },
			new Ingredient { IngredientId = 14, Name = "Vanilla extract", Quantity = "1 tsp", RecipeId = 3 },
			new Ingredient { IngredientId = 15, Name = "Chocolate chips", Quantity = "300g", RecipeId = 3 }
		);
	}
}