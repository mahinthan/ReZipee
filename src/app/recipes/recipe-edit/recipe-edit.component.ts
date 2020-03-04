import { Ingredient } from './../../shared/ingredient.model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  isEditMode: boolean = false;
  recipeId: number;

  recipeToEdit: Recipe;

  recipeEditForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeId = params['id'];
        this.isEditMode = this.recipeId ? true : false;
        this.initForm();
        // this.recipeToEdit = this.recipeService.getRecipe(+params['id']);
        // this.recipeEditForm.setValue(this.recipeToEdit);
      }
    );
  }

  onSubmit() {
    this.isEditMode ? this.recipeService.updateRecipe(this.recipeId, this.recipeEditForm.value)
                    : this.recipeService.addRecipe(this.recipeEditForm.value);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let recipeName: string = '';
    let recipeImagePath: string = '';
    let recipeDescription: string = '';
    let recipeIngredients: FormArray = new FormArray([]);
    if (this.isEditMode) {
      const recipe: Recipe = this.recipeService.getRecipe(this.recipeId);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        recipe.ingredients.forEach((ingredient: Ingredient) => {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          }));
        });
      }
    }
    this.recipeEditForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  addIngredient() {
    (<FormArray>this.recipeEditForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }

  removeIngredient(index: number) {
    (<FormArray>this.recipeEditForm.get('ingredients')).removeAt(index);
  }

}
