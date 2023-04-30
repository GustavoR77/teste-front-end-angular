import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'https://demo4231135.mockable.io/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }
}
