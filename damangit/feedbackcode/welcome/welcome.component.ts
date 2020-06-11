import { Component, OnInit } from '@angular/core';
import { AdmindataService } from '../service/admindata.service';
import { Admins } from '../model/admins';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
public currentUser: any;
  constructor() { 
console.log('inside welcome' + localStorage.getItem(' currentUser '));
this.currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : '';
}
  
}
