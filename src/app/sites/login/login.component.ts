import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginModel } from 'src/app/models/UserLoginModel.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService: AuthService, private router: Router) { }
  ngOnInit(): void {}

  login(f: NgForm){

    let user: UserLoginModel = {
      email: f.form.value.email,
      password: f.form.value.password
    }

    this.AuthService.login(user).subscribe(data => {
      localStorage.setItem('token', data.data);
      this.router.navigateByUrl('profile');
    });
  }

}
