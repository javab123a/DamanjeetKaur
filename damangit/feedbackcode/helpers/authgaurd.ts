import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AdmindataService } from '../service/admindata.service';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
constructor(
private router: Router,
private admindataService: AdmindataService
) {}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
const currentUser = this.admindataService.currentUserValue;
if (currentUser) {
// authorised so return true
return true;
}
// not logged in so redirect to login page
this.router.navigate(['welcome'], { queryParams: { returnUrl: state.url }});
return false;
}
}
