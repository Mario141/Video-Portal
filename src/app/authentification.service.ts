import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  users: User[];
  redirectUrl: string;

  constructor(private http: HttpClient) {
    this.getUsers().subscribe(data => {
        console.log(data);
        this.users = data;
    });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('./assets/users.json');
  }

  login(username, password): boolean {
    let i;
    for (i = 0; i < this.users.length ; i++) {
      if ((this.users[i].username === username) && (this.users[i].password === password)) {
        return true;
      }
    }
  }
}
