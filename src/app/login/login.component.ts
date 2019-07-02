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

  constructor(private authService: AuthentificationService,
              private formBuilder: FormBuilder,
              private route: Router) {

    this.checkoutForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(loginData) {
    console.warn('Your username and password have been submitted', loginData);
    // this.checkoutForm.reset();
    const username = this.checkoutForm.get('username').value;
    const password = this.checkoutForm.get('password').value;

    if (this.authService.login(username, password)) {
      this.route.navigateByUrl('/movies');
    }
  }

  getUsers(): void {
    this.authService.getUsers()
      .subscribe(data => this.users = data);
  }

}
