import { AppRoutingModule } from './app-routing.module';
import { CounterService } from './shared/services/counter/counter.service';
import { UsersService } from './shared/services/users/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BasicHighlightDirective } from "./directives/basic-highlight/basic-highlight.directive";
import { BetterHighlightDirective } from "./directives/better-highlight/better-highlight.directive";
import { UnlessDirective } from './directives/unless/unless.directive';
import { DropdownDirective } from './shared/dropdown/dropdown.directive';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { DefaultViewComponent } from './default-view/default-view.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ReversePipe } from './pipes/reverse/reverse.pipe';
import { ServerListComponent } from './server-list/server-list.component';
import { SortPipe } from './pipes/sort/sort.pipe';

import { ServersService } from './services/servers/servers.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    ActiveUsersComponent,
    InactiveUsersComponent,
    DefaultViewComponent,
    RecipeEditComponent,
    ProjectFormComponent,
    UserFormComponent,
    ReversePipe,
    ServerListComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UsersService, CounterService, ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
