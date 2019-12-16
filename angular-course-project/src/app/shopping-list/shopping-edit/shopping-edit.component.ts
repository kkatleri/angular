import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f') ingredientForm: NgForm;

  loadedIngredient: Ingredient;
  loadedIngredientIndex: number;
  editMode: boolean;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.ingredientSelected.subscribe(
      (index: number) =>{
        this.loadedIngredient = this.shoppingListService.getIngredients()[index];
        this.loadedIngredientIndex = index;
        this.editMode = true;
        this.ingredientForm.setValue({
          name: this.loadedIngredient.name,
          amount: this.loadedIngredient.amount
        })
      }
    )
  }

  onSubmit(){
    console.log(this.ingredientForm)
    const ingredient = new Ingredient(
        this.ingredientForm.value.name, 
        this.ingredientForm.value.amount);
    if(!this.editMode){
      this.shoppingListService.addIngredient(ingredient);
    } else {
      this.shoppingListService.updateIngredient(
        this.loadedIngredientIndex, ingredient);
    }
    this.editMode=false;
    this.ingredientForm.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.loadedIngredientIndex);
    this.onClear();
  }
  
  onClear(){
    this.ingredientForm.reset();
    this.editMode=false;
  }
}
