import { EventEmitter, Output, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    constructor(private shoppingListService: ShoppingListService){
    }

    recipes: Recipe[] = [
        new Recipe("Chicken Tikka", 
                    "Indian spicy dish", 
                    "https://glebekitchen.com/wp-content/uploads/2016/12/chickentikkakebab.jpg",
                    [
                        {
                            name: "Chicken",
                            amount: 5
                        },
                        {
                            name: "Tikka Masala",
                            amount: 2  
                        }
                    ]
                ),
        new Recipe("Mutton Biryani", 
                    "Indian Tadka", 
                    "https://image.shutterstock.com/z/stock-photo-spicy-and-delicious-mutton-biryani-790330249.jpg",
                        [
                        {
                            name: "Mutton",
                            amount: 10
                         },
                         {
                             name: "Rice",
                             amount: 5
                         }
                    ]
                )
      ];

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes.splice(1, id);
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){

        this.shoppingListService.addIngredients(ingredients);
       
    }

}