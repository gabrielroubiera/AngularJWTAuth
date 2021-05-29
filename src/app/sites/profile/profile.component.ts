import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
    this.AuthService.profile().subscribe(data => {
      console.log(data);
    }, (err) => {
      console.log(err.error);
    })
  }

}
