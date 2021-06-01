import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogged: boolean = false;
  constructor(private AuthService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') == null){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  logout(){
    let token_localStorage = localStorage.getItem('token');

    this.AuthService.logout(token_localStorage).subscribe(data => {
      this.router.navigateByUrl('login');
    }, (err) => {
      console.log(err);
    })
  }
}
