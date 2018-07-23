import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
// import { EventEmitter } from 'events';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
	@ViewChild('nameInput') nameInputRef: ElementRef;
	@ViewChild('amountInput') amountInputRef: ElementRef;
	
	@Output() ingredientAdded = new EventEmitter<Ingredient>();
	
	constructor() { }

	ngOnInit() {
	}

	submitIngredientForm() {
		const newIngredient = new Ingredient(
			this.nameInputRef.nativeElement.value,
			this.amountInputRef.nativeElement.value
		);
		console.log('[shopping-list-edit] submitForm() newIngredient', newIngredient);
		this.ingredientAdded.emit(newIngredient);
	}

}
