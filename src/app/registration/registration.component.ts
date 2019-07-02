import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {HttpClient} from '@angular/common/http';
import {AuthentificationService} from '../authentification.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm;
  users: User[];

  constructor(private http: HttpClient, private authService: AuthentificationService) {}

  ngOnInit() {
    this.getUsers();
  }

  onSubmit(registrationData) {
    console.warn('Your username and password have been submitted', registrationData);

    const id = this.users.length + 1;
    const username = this.registrationForm.get('username').value;
    const password = this.registrationForm.get('password').value;

  }

  getUsers(): void {
    this.authService.getUsers()
      .subscribe(data => this.users = data);
  }
}
