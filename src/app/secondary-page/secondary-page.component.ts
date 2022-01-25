import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-secondary-page',
  templateUrl: './secondary-page.component.html',
  styleUrls: ['./secondary-page.component.scss']
})
export class SecondaryPageComponent {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
}
