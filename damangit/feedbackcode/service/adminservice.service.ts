import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from '../model/admin';
import { Observable } from 'rxjs';
@Injectable()
export class AdminService {
private adminUrl: string;
private addressUrl: string;
public currentUser: Observable<Admin>;
private deleteUrl: any;
constructor(private http: HttpClient) {
this.adminUrl = '/alldata';
this.addressUrl = '/adds';
this.deleteUrl = '/admin/{id}?id=';
}
public findAll(): Observable<Admin[]> {
return this.http.get<Admin[]>(this.adminUrl);
}
public save(admin: Admin) {
return this.http.post<Admin>(this.addressUrl, admin);
}
public deleteById(admin: Admin) {
   console.log(admin);
   return this.http.delete<any>(this.deleteUrl + admin.id);
}
}
