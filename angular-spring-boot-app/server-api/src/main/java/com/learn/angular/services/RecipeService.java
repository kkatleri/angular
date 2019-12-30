package com.learn.angular.services;

import com.learn.angular.model.Ingredient;
import com.learn.angular.model.Recipe;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecipeService {

    public List<Recipe> getRecipes() {

        List<Recipe> recipes = new ArrayList<>();

        List<Ingredient> chickenTikkaIngredients = new ArrayList<>();
        chickenTikkaIngredients.add(new Ingredient("Chicken", 5));
        chickenTikkaIngredients.add(new Ingredient("Tikka Masala", 2));

        Recipe chikenTikkaRecipe = new Recipe(
                "Chicken Tikka",
                "Indian spicy dish",
                "https://glebekitchen.com/wp-content/uploads/2016/12/chickentikkakebab.jpg",
                chickenTikkaIngredients
        );

        List<Ingredient> muttonBiryaniIngredients = new ArrayList<>();
        muttonBiryaniIngredients.add(new Ingredient("Mutton", 10));
        muttonBiryaniIngredients.add(new Ingredient("Rice", 5));

        Recipe muttonBiryaniRecipe = new Recipe(
                "Mutton Biryani",
                "Indian Tadka",
                "https://image.shutterstock.com/z/stock-photo-spicy-and-delicious-mutton-biryani-790330249.jpg",
                muttonBiryaniIngredients
        );

        recipes.add(chikenTikkaRecipe);
        recipes.add(muttonBiryaniRecipe);

        return recipes;
    }
}
