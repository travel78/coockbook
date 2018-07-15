import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/service/http.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../shared/model/recipe.model';

@Component({
  selector: 'app-recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.scss']
})
export class RecipePreviewComponent implements OnInit {
  public recipe: Recipe;

  constructor(private http: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.http.getRecipe(this.route.snapshot.params['id']).subscribe(
      recipe => {
        this.recipe = recipe;
      }
    );
  }

}
