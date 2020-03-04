import { Subscription } from 'rxjs/subscription';
import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shopForm') shopForm: NgForm;

  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shopForm.setValue(this.editedItem);
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const newIngredient = new Ingredient(this.shopForm.value.name, +this.shopForm.value.amount);
    this.editMode ? this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
                  : this.shoppingListService.addIngredient(newIngredient);
    this.onClear();
  }

  onClear() {
    this.shopForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}