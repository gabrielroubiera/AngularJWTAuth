import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogged: boolean = false;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('token') == null){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  logout(){
    
  }
}
