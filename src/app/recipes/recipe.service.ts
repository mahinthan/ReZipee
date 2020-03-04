import { Subject } from 'rxjs/Subject';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService{

    recipesChanged: Subject<Recipe[]> = new Subject<Recipe[]>();

    private _recipes: Recipe[] = [
        new Recipe(
            'Naan', 
            'This recipe makes the best naan I have tasted outside of an Indian restaurant. I can\'t make enough of it for my family. I serve it with shish kabobs, but I think they would eat it plain.', 
            'http://images.media-allrecipes.com/userphotos/250x250/115386.jpg',
            [
                new Ingredient('Flour', 2),
                new Ingredient('Butter', 2)
            ]
        ),
        new Recipe(
            'Indian-Influenced Zucchini Onion Pepper Latkes', 
            'Thanks to the inspiration from two other AllRecipes recipes, I concocted this and it was a winner. It wasn\'t really spicy at all and the kids loved it. Excellent served with a dollop of sour cream.', 
            'http://images.media-allrecipes.com/userphotos/560x315/4391060.jpg',
            [
                new Ingredient('Sauce', 2),
                new Ingredient('Onion', 2)
            ]
        ),
        new Recipe(
            'Naan', 
            'This recipe makes the best naan I have tasted outside of an Indian restaurant. I can\'t make enough of it for my family. I serve it with shish kabobs, but I think they would eat it plain.', 
            'http://images.media-allrecipes.com/userphotos/250x250/115386.jpg',
            [
                new Ingredient('Flour', 2),
                new Ingredient('Butter', 2),
                new Ingredient('Milk', 2)
            ]
        )
    ];

    getRecipes(){
        return this._recipes.slice();
    }

    getRecipe(id: number){
        return this._recipes.slice()[id];
    }

    addRecipe(recipe: Recipe){
        this._recipes.push(recipe);
        this.recipesChanged.next(this._recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this._recipes[index] = newRecipe;
        this.recipesChanged.next(this._recipes.slice());
    }

    deleteRecipe(index: number){
        this._recipes.splice(index, 1);
        this.recipesChanged.next(this._recipes.slice());
    }
}