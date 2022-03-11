import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from '../models/home.models';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Todo[]> {
    const endpoint = 'https://jsonplaceholder.typicode.com/todos';

    return this.http.get<Todo[]>(endpoint);
  }

  getDetail(id: number): Observable<Todo> {
    const endpoint = `https://jsonplaceholder.typicode.com/todos/${id}`;

    return this.http.get<Todo>(endpoint);
  }
}
