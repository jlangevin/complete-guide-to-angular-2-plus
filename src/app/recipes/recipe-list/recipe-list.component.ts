import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	@Output() recipeWasSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe('Test Recipe', 'This is only a test', 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Pork_shoulder_on_green_egg_smoker.jpg'),
		new Recipe('Second Test Recipe', 'This is only a second test', 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Pork_shoulder_on_green_egg_smoker.jpg')
	];

	constructor() { }

	ngOnInit() {
	}

	selectRecipeListItem(recipe: Recipe) {
		console.log('[recipe-list] selectRecipeListItem() recipe', recipe);
		this.recipeWasSelected.emit(recipe);
	}

}
