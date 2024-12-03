import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, shareReplay, tap } from "rxjs";
import { IUser } from "./user";
import { IResponse } from "../shared/generic.response";
import { SharedService } from "../shared/shared.service";
import { DatePipe } from "@angular/common";
import { ILoginResponse } from "../shared/responses/login.response";
import { UserResponse } from "../shared/responses/user.response";
import { RankingsComponent } from "../gaming/rankings/rankings.component";
import { RankingsResponse } from "../shared/responses/rankings.response";


@Injectable({
    providedIn: 'root'
  })    
export class UserService {

    private baseUrl = 'https://api.autenticul.ro/';
/*     private registerUrl = 'https://localhost:7185/api/user/register';
    private loginUrl = 'https://localhost:7185/api/user/login';
    private getUserDetailsUrl = 'https://localhost:7185/api/user/details';
    private getRankinsUrl = 'https://localhost:7185/api/user/users'; */

    private registerUrl = this.baseUrl + 'api/user/register';
    private loginUrl = this.baseUrl + 'api/user/login';
    private getUserDetailsUrl = this.baseUrl + 'api/user/details';
    private getRankinsUrl = this.baseUrl + 'api/user/users';
/* 
    
    private registerUrl = 'http://api.autenticul.ro/api/user/register';
    private loginUrl = 'http://api.autenticul.ro/api/user/login';
    private getUserDetailsUrl = 'http://api.autenticul.ro/api/user/details';
    private getRankinsUrl = 'http://api.autenticul.ro/api/user/users'; */


    constructor(private http: HttpClient, private sharedService: SharedService){ }

    register(newUser: IUser) : Observable<IResponse> {
        const formData = new FormData();
        formData.append('NewUserString', JSON.stringify(newUser));
        return this.http.post<IResponse>(this.registerUrl, formData)
        .pipe(
            tap(data => console.log('user registered response:  ', JSON.stringify(data))),
            catchError(this.sharedService.handleError)
        );
    }

    login(userCredentials: IUser) : Observable<ILoginResponse> {
        const formData = new FormData();
        formData.append('UserLoginString', JSON.stringify(userCredentials));
        return this.http.post<ILoginResponse>(this.loginUrl, formData)
        .pipe(
            tap( data => {
                if(data.success && data.jwtToken != null)
                {
                    this.setSession(data);
                    shareReplay();
                }
                else
                {
                    console.error('Login failed:');
                }
            }),
       
            tap(data => console.log('user login attempt response:   ', JSON.stringify(data))),
            
            catchError(this.sharedService.handleError)
        );
    }

    private setSession(authResult: ILoginResponse) {
        var currentDate = new Date();
     //   const expiresAt = new Date(authResult.expiresIn);
        console.log('in setSession, jwttoken value: ' + authResult.jwtToken);
        localStorage.setItem('jwttoken', authResult.jwtToken);
        localStorage.setItem("expires_at", JSON.stringify(authResult.expiresIn) );
    } 

    logout() {
        localStorage.removeItem("jwttoken");
        localStorage.removeItem("expires_at");
    }

    isLoggedIn() {
        const expiration = this.getExpirationDate();
        if(expiration) {
            const currentDate = new Date();
            console.log('In isLoggedIn function: expiration = ', expiration);
            console.log('currentDate < expiration', currentDate < expiration);
            return currentDate < expiration;
        }
        return false;
    }

    isLoggedOut(){
        return !this.isLoggedIn();
    }

    getExpirationDate(): Date | null {
        const expiration = localStorage.getItem('expires_at');
        if (expiration) { 
            const expiresAt = JSON.parse(expiration); 
            return new Date(expiresAt); 
        } 
        return null; 
    }


    getUserDetails(): Observable<UserResponse> {
        return this.http.get<UserResponse>(this.getUserDetailsUrl)
            .pipe(
                tap(data => console.log('GetUserDetails response: ', JSON.stringify(data))),
                catchError(this.sharedService.handleError)
            )
    }
    

    getUsers(): Observable<RankingsResponse> {
        return this.http.get<RankingsResponse>(this.getRankinsUrl)
            .pipe(
                tap(data => console.log('Rangkins response: ', JSON.stringify(data))),
                catchError(this.sharedService.handleError)
            )
    }
}