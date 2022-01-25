import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DummyApiService {
  constructor(private http: HttpClient) {}

  getDummyPosts() {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
  }
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
