import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
	recipeClicked = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(
			'Brisket and Fries', 
			'This is only a test', 
			'https://upload.wikimedia.org/wikipedia/commons/7/7a/Pork_shoulder_on_green_egg_smoker.jpg',
			[
				new Ingredient('Beef Brisket', 1),
				new Ingredient('French Fries', 20)
			]
		),
		new Recipe(
			'Baked Chicken', 
			'This is only a second test', 
			'https://upload.wikimedia.org/wikipedia/commons/7/7a/Pork_shoulder_on_green_egg_smoker.jpg',
			[
				new Ingredient('Chicken', 1),
				new Ingredient('Baked Potato', 1)
			]
		)
	];

	constructor(private shoppingListService: ShoppingListService) {}

	getRecipes() {
		// Use slice to return a new copy of the array 
		// Otherwise, it would be a reference to this 
		// "private" array so any changes made outside
		// would affect our array here 
		return this.recipes.slice();
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.shoppingListService.addIngredients(ingredients);
	}
}