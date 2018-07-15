import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../../shared/model/recipe.model';
import { HttpService } from '../../shared/service/http.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  host: {'class': 'row'}
})
export class RecipeComponent implements OnInit {
  public editMode = false;
  public form: FormGroup;
  public successMessage:string = null;
  constructor(private route: ActivatedRoute, private http: HttpService) {
  }

  ngOnInit() {
    this.createForm();
    this.editMode = this.route.snapshot.data['editMode'];
    this.editMode &&
    this.http.getRecipe(this.route.snapshot.params['id']).subscribe(
      recipe => {
        this.fillForm(recipe);
      }
    );
  }

  private createForm() {
    this.form = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'imgUrl': new FormControl(null)
    });
  }

  private fillForm(recipe: Recipe) {
    this.form.get('title').setValue(recipe.title);
    this.form.get('description').setValue(recipe.description);
    this.form.get('imgUrl').setValue(recipe.imgUrl);
    this.form.addControl('_id', new FormControl(recipe._id));
  }

  public onSubmit() {
    if (this.editMode) {
      this.http.updateRecipe(this.form.value).subscribe(
        res=>{
          this.successMessage = 'Successfully saved changes';
          this.form.markAsUntouched();
          this.form.markAsPristine();
        }
      );
    } else {
      this.http.createRecipe(this.form.value).subscribe(
        res =>{
          this.successMessage = 'Successfully created recipe';
          this.form.reset();
        }
      );
    }
  }
}
