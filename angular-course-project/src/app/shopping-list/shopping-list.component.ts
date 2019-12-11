import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  ingredientAddedSubscription: Subscription;

  constructor(private shoppingListservice: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListservice.getIngredients();

    this.ingredientAddedSubscription = this.shoppingListservice.ingredientAdded.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy(){
    this.ingredientAddedSubscription.unsubscribe();
  }

}
