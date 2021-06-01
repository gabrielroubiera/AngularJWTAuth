import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData: any;
  constructor(private AuthService: AuthService, private router: Router) { }

  ngOnInit(): void {

    let token_localStorage = localStorage.getItem('token');

    this.AuthService.profile(token_localStorage).subscribe(data => {
      this.userData = data.data;
      console.log(this.userData)
    }, (err) => {
      this.router.navigateByUrl('login');
    })
  }

}
