import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostviewService {
  baseUrl = 'http://localhost:4040/api/postdata';

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  getPostId(_id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get/${_id}`);
  }
}

