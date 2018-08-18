import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
	ingredientsChanged = new EventEmitter<Ingredient[]>();

	private ingredients: Ingredient[] = [
		new Ingredient('Apple', 5),
		new Ingredient('Tomato', 10)
	];

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredient(ingredient: Ingredient) {
		console.log('[ShoppingListService] addIngredient()', ingredient);
		this.ingredients.push(ingredient);
		this.ingredientsChanged.emit(this.getIngredients());
	}

	addIngredients(ingredients: Ingredient[]) {
		// Because we emit an event for each change, we don't want to use this method
		// for (let ingredient of ingredients) {
		// 	this.addIngredient(ingredient);
		// }
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.emit(this.getIngredients());
	}

}