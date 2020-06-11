import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admins } from '../model/admins';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class AdmindataService {
private adminUrl: string;
private addressUrl: string;
private currentUserSubject: BehaviorSubject<Admins>;
public currentUser: Observable<Admins>;
private deleteUrl: any;
constructor(private http: HttpClient) {
this.adminUrl = '/allinfo';
this.addressUrl = '/addinfo';
this.deleteUrl = '/admins/{id}?id=';
this.currentUserSubject = new BehaviorSubject<Admins>(JSON.parse(localStorage.getItem('currentUser')));
this.currentUser = this.currentUserSubject.asObservable();
}
public findAll(): Observable<Admins[]> {
return this.http.get<Admins[]>(this.adminUrl);
}
public save(admindata: Admins) {
return this.http.post<Admins>(this.addressUrl, admindata);
}
public deleteById(admindata: Admins) {
   console.log(admindata);
   return this.http.delete<any>(this.deleteUrl + admindata.id);
}
public get currentUserValue(): Admins {
    return this.currentUserSubject.value;
}
login(email: string, password: string) {
    console.log('inside service' + email + password);
    return this.http.get<any>('/logins/{email,password}?email=' + email + '&password=' + password)
    .pipe(map(admindata => {
        console.log('inside service' + admindata);
        if (admindata) {
            console.log('inside service' + admindata);
            localStorage.setItem('currentUser', JSON.stringify(admindata));
            this.currentUserSubject.next(admindata);
    }
        return admindata;
}));
}
logout() {
// remove user data from local storage for log out
localStorage.removeItem('currentUser');
this.currentUserSubject.next(null);
}
}
