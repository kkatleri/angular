import { Ingredient } from '../shared/ingredient.model';
import { Output } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService{
    
    ingredientAdded = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("Tomatoes", 20),
        new Ingredient("Onions", 10)
      ];

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.ingredients.slice());
      }

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredients(ingredients: Ingredient[]){
           // for(let ingredient of ingredients){
        //     this.shoppingListService.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientAdded.next(this.ingredients.slice());
      }
}