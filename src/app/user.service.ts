import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:3000/users').pipe(
      map((response: User[]) => {
        return response.map((item: User) => {
          return new User(item.id,item.fname,item.lname,item.email,item.phone,item.address,item.sal);
        });
      })
    );
  }
}
