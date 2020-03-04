import { Subject } from 'rxjs/Subject';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
    ingredientsUpdated: Subject<Ingredient[]> = new Subject<Ingredient[]>();
    startedEditing: Subject<number> = new Subject<number>();

    private _ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ];

    getIngredients() {
        return this._ingredients.slice();
    }

    getIngredient(index: number){
        return this._ingredients.slice()[index];
    }

    addIngredient(ingredient: Ingredient) {
        this._ingredients.push(ingredient);
        this.ingredientsUpdated.next(this._ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this._ingredients[index] = newIngredient;
        this.ingredientsUpdated.next(this._ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // this._ingredients = this._ingredients.concat(ingredients);
        this._ingredients.push(...ingredients);
        this.ingredientsUpdated.next(this._ingredients.slice());
    }

    deleteIngredient(index: number){
        this._ingredients.splice(index, 1);
        this.ingredientsUpdated.next(this._ingredients.slice());
    }

}