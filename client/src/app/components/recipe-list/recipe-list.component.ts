import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/model/recipe.model';
import { HttpService } from '../../shared/service/http.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  host: {'class': 'row'}
})
export class RecipeListComponent implements OnInit {
  public recipes: Array<Recipe>;
  public page = 1;
  public count: number;

  constructor(private http: HttpService) {
  }

  ngOnInit() {
    this.getRecipes(0);
  }

  public onChangePage(event) {
    this.getRecipes(event - 1);
  }

  private getRecipes(page: number, count: number = 9) {
    this.http.getRecipes(page, count).subscribe(
      res => {
        this.recipes = res.recipes;
        this.count = res.count;
      }
    );
  }

}
