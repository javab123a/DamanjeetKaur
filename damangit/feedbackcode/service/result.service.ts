import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Result } from '../model/result';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable()
export class ResultService {
private usersUrl: string;
private addressUrl: string;
private deleteUrl: any;
constructor(private http: HttpClient) {
this.usersUrl = '/allresult';
this.addressUrl = '/addresult';
}
public findAll(): Observable<Result[]> {
return this.http.get<Result[]>(this.usersUrl);
}
public save(result: Result) {
return this.http.post<Result>(this.addressUrl, result);
}
}
