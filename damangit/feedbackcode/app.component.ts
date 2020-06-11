import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admins } from './model/admins';
import { AdmindataService } from './service/admindata.service';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
currentUser: Admins;
title: string;
constructor(private router: Router, private admindataService: AdmindataService )
{
this.title = 'BTES FEEDBACK PORTAL';
this.admindataService.currentUser.subscribe(x => this.currentUser = x);
console.log('CurrentUser=' + this.currentUser);
}
logout() {
this.admindataService.logout();
this.router.navigate(['login']);
}
}
