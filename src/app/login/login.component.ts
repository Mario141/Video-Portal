import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../authentification.service';
import {FormBuilder, FormControl, NgControl} from '@angular/forms';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];
  checkoutForm;
  isValid = false;
  isTrue = true;
  private location: Location;

  constructor(private authService: AuthentificationService,
              private formBuilder: FormBuilder,
              private route: Router) {

    this.checkoutForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
    this.getUsers();
  }

  onSubmit(loginData) {
    // Process checkout data here
    console.warn('Your username and password have been submitted', loginData);
    // this.checkoutForm.reset();
    this.isValid = true;
    const username = this.checkoutForm.get('username').value;
    const password = this.checkoutForm.get('password').value;

    this.isTrue = this.authService.login(username, password);
    if (this.isTrue) {
      this.route.navigateByUrl('/movies');
    }
  }

  getUsers(): void {
    this.authService.getUsers()
      .subscribe(data => this.users = data);
  }

}
