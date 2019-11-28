import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Output } from '@angular/core';

export class ShoppingListService{
    
    @Output() ingredientAdded = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("Tomatoes", 20),
        new Ingredient("Onions", 10)
      ];

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients.slice());
      }

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredients(ingredients: Ingredient[]){
           // for(let ingredient of ingredients){
        //     this.shoppingListService.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientAdded.emit(this.ingredients.slice());
      }
}