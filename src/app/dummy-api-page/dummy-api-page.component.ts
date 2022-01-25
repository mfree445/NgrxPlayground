import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DummyApiState } from '../reducers/dummyApi.reducer';
import { Post } from '../services/dummy-api.service';

@Component({
  selector: 'app-dummy-api-page',
  templateUrl: './dummy-api-page.component.html',
  styleUrls: ['./dummy-api-page.component.scss'],
})
export class DummyApiPageComponent implements OnInit {
  reducerCurrentState: Observable<string> = this.store.select(
    (state) => state.dummyApi.currentState
  );

  posts$: Observable<Post[]> = this.store.select(
    (state) => state.dummyApi.posts
  );

  constructor(private store: Store<{ dummyApi: DummyApiState }>) {}

  ngOnInit(): void {
    this.reducerCurrentState.subscribe((currentValue) => {
      if (currentValue === 'init')
        this.store.dispatch({ type: '[Dummy Page] Get Posts' });
    });
  }
}
