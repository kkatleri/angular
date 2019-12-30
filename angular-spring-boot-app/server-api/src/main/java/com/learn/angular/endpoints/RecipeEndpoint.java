package com.learn.angular.endpoints;

import com.learn.angular.model.Recipe;
import com.learn.angular.services.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
public class RecipeEndpoint {

    @Autowired
    private RecipeService recipeService;

    @GetMapping("/recipes")
    public List<Recipe> getRecipes(){
        System.out.println("getRecipes() called!!");
        return this.recipeService.getRecipes();
    }

}
