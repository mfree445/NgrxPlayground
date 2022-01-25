import { createAction } from '@ngrx/store';

//Basic implementation of Actions

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');