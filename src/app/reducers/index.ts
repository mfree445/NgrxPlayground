import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { counterReducer } from './counter.reducer';
import {dummyApiReducer} from "./dummyApi.reducer";

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  count: counterReducer,
  dummyApi:dummyApiReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
