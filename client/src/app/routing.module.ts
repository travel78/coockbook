import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipePreviewComponent } from './components/recipe-preview/recipe-preview.component';


const routes: Routes = [
  {path: 'recipes', component: RecipeListComponent},
  {path: 'recipes/:id', component: RecipePreviewComponent},
  {path: 'create', component: RecipeComponent, data: {editMode: false}},
  {path: 'edit/:id', component: RecipeComponent, data: {editMode: true}},
  {path: '', redirectTo: '/recipes', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}
