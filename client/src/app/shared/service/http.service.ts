import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipe } from '../model/recipe.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  public updateRecipe(recipe: Recipe) {
    return this.http.put(`/recipes`, recipe);
  }

  public createRecipe(recipe: Recipe) {
    return this.http.post(`/recipes`, recipe);
  }

  public getRecipes(page: number = 0, count: number = 9) {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('count', count.toString());
    return this.http.get<{ recipes: Array<Recipe>, count: number }>(`/recipes`, {params: params});
  }

  public getRecipe(id: string) {
    return this.http.get<Recipe>(`/recipes/${id}`);
  }

  public deleteRecipe(id: string) {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.delete(`/recipes`, {params: params});
  }
}
