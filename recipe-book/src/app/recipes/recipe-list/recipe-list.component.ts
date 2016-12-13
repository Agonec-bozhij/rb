import { Component, Output, OnInit, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter();
  recipe = new Recipe('Dummy', 'Dummy', 'http://c0de-x.com/wp-content/uploads/2013/07/4796780409_861152ec52_o-600x799.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
