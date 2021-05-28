import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserRegisterModel } from 'src/app/models/UserRegister.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public successMsg: string = "";
  public errorMsgName: string = "";
  public errorMsgEmail: string = "";
  public errorMsgPassword: string = "";
  public errorMsgCPassword: string = "";

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }

  register(f: NgForm){
    let newUser: UserRegisterModel = {
      name: f.form.value.name,
      email: f.form.value.email,
      password: f.form.value.password,
      password_confirmation: f.form.value.c_password
    }

    // if(newUser.password != newUser.password_confirmation){
    //   let cpasswordtext: any  = document.querySelector('#cpasswordtext');
    //   cpasswordtext.innerHTML = 'The password confirmation does not match.';
    // }

    this.AuthService.register(newUser).subscribe(data => {
      console.log(data);
      this.successMsg = data.message;
    }, (err) => {
      if(typeof err.error.name != "undefined"  && err.error.name.length > 0){
        this.errorMsgName = err.error.name[0];
      } else {
        this.errorMsgName = '';
      }

      if(typeof err.error.email != "undefined" && err.error.email.length > 0){
        this.errorMsgEmail = err.error.email[0];
      } else {
        this.errorMsgEmail = ''
      }

      if(typeof err.error.password != "undefined" && err.error.password.length > 0){
        this.errorMsgPassword = err.error.password[0];
      } else {
        this.errorMsgPassword = ''
      }

      if(typeof err.error.password != "undefined" && err.error.password.length > 1){
        this.errorMsgCPassword = err.error.password[1];
      } else {
        this.errorMsgCPassword = ''
      }
    })
  }
}
