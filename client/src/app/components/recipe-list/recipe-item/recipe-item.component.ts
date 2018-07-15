import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../shared/model/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
  host: {'class': 'col-md-4'}
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe: Recipe;

  constructor() {
  }

  ngOnInit() {
  }

}
