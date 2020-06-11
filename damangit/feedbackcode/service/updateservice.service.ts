import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable()
export class UpdateService {
private updateUrl: string;
constructor(private http: HttpClient) {
	this.updateUrl = '/update/{id}?id=';
	}
	public save(user: User) {
console.log(user);
return this.http.put<User>(this.updateUrl + user.id, user);
}
	}
	