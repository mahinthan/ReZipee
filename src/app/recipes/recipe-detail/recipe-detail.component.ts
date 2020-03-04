import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;
  selectedRecipeId: number;

  constructor(
    private recipeService: RecipeService, 
    private shoppingListService: ShoppingListService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.selectedRecipeId = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.selectedRecipeId);
      }
    );
  }

  addToShoppingList(){
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
    this.router.navigate(['/shopping-list']);
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.selectedRecipeId);
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

}