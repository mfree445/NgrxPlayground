import { createAction, props } from "@ngrx/store";
import { Post } from "../services/dummy-api.service";

export const GET_DUMMY_POSTS = '[Dummy Page] Get Posts'
export const GET_DUMMY_POSTS_SUCCESS = '[Dummy Page] Get Posts Success'
export const GET_DUMMY_POSTS_FAILURE = '[Dummy Page] Get Posts Failure'

export const getPosts = createAction(GET_DUMMY_POSTS, props<any>());
export const getPostsSuccess = createAction(GET_DUMMY_POSTS_SUCCESS,props<{posts:Post[]}>());
export const getPostsFailure = createAction(GET_DUMMY_POSTS_FAILURE,props<any>());