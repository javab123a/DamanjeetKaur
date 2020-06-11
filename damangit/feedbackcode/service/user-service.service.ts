import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable()
export class UserService {
private usersUrl: string;
private addressUrl: string;
private deleteUrl: any;
constructor(private http: HttpClient) {
this.usersUrl = '/all';
this.addressUrl = '/add';
this.deleteUrl = '/user/{id}?id=';
}
public findAll(): Observable<User[]> {
return this.http.get<User[]>(this.usersUrl);
}
public save(user: User) {
return this.http.post<User>(this.addressUrl, user);
}
public deleteById(user: User) {
   console.log(user);
   return this.http.delete<any>(this.deleteUrl + user.id);
}
}
