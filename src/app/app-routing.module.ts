import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectFormComponent } from './project-form/project-form.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { DefaultViewComponent } from './default-view/default-view.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ServerListComponent } from './server-list/server-list.component';

const appRoutes: Routes = [
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: DefaultViewComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'user-form', component: UserFormComponent },
    { path: 'project-form', component: ProjectFormComponent },
    { path: 'server-list', component: ServerListComponent },
    { path: '', redirectTo: '/recipes', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }