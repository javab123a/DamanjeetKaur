import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from '../model/admin';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable()
export class AdminUpdateService {
private updateUrl: any;
constructor(private http: HttpClient) {
	this.updateUrl = '/updates/{id}?id=';
	}
	public save(admin: Admin) {
		console.log(admin);
return this.http.put<any>(this.updateUrl, admin);
}
	}
	
