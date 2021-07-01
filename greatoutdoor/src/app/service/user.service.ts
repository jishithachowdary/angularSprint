
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private baseUrl = 'http://localhost:8080/user/'; 
    constructor(private http: HttpClient){}
    getAllUsers(): Observable<any>{
       return this.http.get<User[]>(this.baseUrl+'allusers');
    }
}