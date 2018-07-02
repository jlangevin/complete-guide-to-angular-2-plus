import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('Test Recipe', 'This is only a test', 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Pork_shoulder_on_green_egg_smoker.jpg'),
		new Recipe('Test Recipe', 'This is only a test', 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Pork_shoulder_on_green_egg_smoker.jpg')
	];

	constructor() { }

	ngOnInit() {
	}

}
