import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DummyApiService } from '../services/dummy-api.service';
import * as DummyApiActions from '../actions/dummyApi.action';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class DummyApiEffects {
  constructor(
    private actions$: Actions,
    private dummyApiService: DummyApiService
  ) {}

  getDummyPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DummyApiActions.getPosts),
      exhaustMap((action) =>
        this.dummyApiService.getDummyPosts().pipe(
          map((response) => {
            return DummyApiActions.getPostsSuccess({posts: response});
          }),
          catchError((error: any) => {
            return of(DummyApiActions.getPostsFailure(error));
          })
        )
      )
    );
  });
}
