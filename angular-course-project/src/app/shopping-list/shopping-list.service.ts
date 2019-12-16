import { Ingredient } from '../shared/ingredient.model';
import { Output } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService{
    
    ingredientsChanged = new Subject<Ingredient[]>();
    ingredientSelected = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient("Tomatoes", 20),
        new Ingredient("Onions", 10)
      ];

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredients(ingredients: Ingredient[]){
           // for(let ingredient of ingredients){
        //     this.shoppingListService.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.getIngredients());
      }

      loadIngrdient(index: number){
        this.ingredientSelected.next(index);
      }

      updateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.getIngredients());
      }

      deleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.getIngredients());
      }
}