import { createReducer, Action, on } from '@ngrx/store';
import { Post } from '../services/dummy-api.service';
import * as DummyApiActions from '../actions/dummyApi.action';

export interface DummyApiState {
  posts: Array<Post>;
  currentState: string;
  isLoading: boolean;
  isLoadingSuccess: boolean;
  isLoadingFailure: boolean;
}

export const initialState: DummyApiState = {
  posts: [],
  currentState: 'init',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false,
};

const _dummyApiReducer = createReducer(
  initialState,
  on(DummyApiActions.getPosts, (state, result) => {
    return {
      posts: [],
      currentState: 'loading',
      isLoading: false,
      isLoadingSuccess: true,
      isLoadingFailure: false,
    };
  }),
  on(DummyApiActions.getPostsSuccess, (state, {posts}) => { 
    return {
      posts: posts,
      currentState: 'loaded',
      isLoading: false,
      isLoadingSuccess: true,
      isLoadingFailure: false,
    };
  }),
  on(DummyApiActions.getPostsFailure, (state, result) => {
    return {
      posts: [],
      currentState: 'error',
      isLoading: false,
      isLoadingSuccess: false,
      isLoadingFailure: true,
    };
  })
);

export function dummyApiReducer(
  state: DummyApiState | undefined,
  action: Action
) {
  return _dummyApiReducer(state, action);
}
