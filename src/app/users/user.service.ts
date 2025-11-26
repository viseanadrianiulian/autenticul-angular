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
import { StreamerResponse } from "../shared/responses/streamer.response";


@Injectable({
    providedIn: 'root'
  })    
export class UserService {

    private registerUrl = this.sharedService.baseUrl + 'api/user/register';
    private loginUrl = this.sharedService.baseUrl + 'api/user/login';
    private getUserDetailsUrl = this.sharedService.baseUrl + 'api/user/details';
    private getRankinsUrl = this.sharedService.baseUrl + 'api/user/users';
    private getStreamerDetailsUrl = this.sharedService.baseUrl + 'api/streamer/details';


    constructor(private http: HttpClient, private sharedService: SharedService){ }

    register(newUser: IUser) : Observable<IResponse> {
        const formData = new FormData();
        formData.append('Username', newUser.username!);
        formData.append('Password', newUser.password!);
        formData.append('Email', newUser.email!);
        return this.http.post<IResponse>(this.registerUrl, formData)
        .pipe(
            tap(data => console.log('user registered response:  ', JSON.stringify(data))),
            catchError(this.sharedService.handleError)
        );
    }

    login(userCredentials: IUser) : Observable<ILoginResponse> {
        const formData = new FormData();
        formData.append('UserName', userCredentials.username!);
        formData.append('Password', userCredentials.password!);
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
        console.log('in setSession, jwttoken value: ' + authResult.jwtToken);
        localStorage.setItem('jwttoken', authResult.jwtToken);
        localStorage.setItem("expires_at", JSON.stringify(authResult.expiresIn) );
        localStorage.setItem('username',authResult.userName);
        if(authResult.isStreamer){
            localStorage.setItem('isStreamer', 'true');
        }
        else
        {
            localStorage.setItem('isStreamer','false');
        }
    } 

    logout() {
        localStorage.removeItem("jwttoken");
        localStorage.removeItem("expires_at");
        localStorage.removeItem("username");
        localStorage.removeItem("isStreamer");
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

    isStreamer(){
        return localStorage.getItem('isStreamer')==='true';
    }

    getExpirationDate(): Date | null {
        const expiration = localStorage.getItem('expires_at');
        if (expiration) { 
            const expiresAt = JSON.parse(expiration); 
            return new Date(expiresAt); 
        } 
        return null; 
    }

    getLoggedInUserName(): string {
        var username = localStorage.getItem('username');
        if(username != null)
        {
            return username;
        }
        return '';
    }

    getUserDetails(): Observable<UserResponse> {
            return this.http.get<UserResponse>(this.getUserDetailsUrl)
            .pipe(
                tap(data => console.log('GetUserDetails response: ', JSON.stringify(data))),
                catchError(this.sharedService.handleError)
            )
    }

    getStreamerDetails(): Observable<StreamerResponse> {
        const url = `${this.getStreamerDetailsUrl}?username=${this.getLoggedInUserName()}`;
        return this.http.get<StreamerResponse>(url)
            .pipe(
                tap(data => console.log('GetStreamerDetails response: ', JSON.stringify(data))),
                catchError(this.sharedService.handleError)
            );
    }
    
    

    getUsers(): Observable<RankingsResponse> {
        return this.http.get<RankingsResponse>(this.getRankinsUrl)
            .pipe(
                tap(data => console.log('Rangkins response: ', JSON.stringify(data))),
                catchError(this.sharedService.handleError)
            )
    }
}