import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  private http = inject(HttpClient);

  getPosts(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  getComments(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }

}
