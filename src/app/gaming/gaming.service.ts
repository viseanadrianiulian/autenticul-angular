import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap } from "rxjs";
import { IResponse } from "../shared/generic.response";
import { SharedService } from "../shared/shared.service";
import { LiveEventResponse } from "../shared/responses/event.response";
import { EventDto } from "./event";
import { Bet } from "./bet";



@Injectable({
    providedIn: 'root'
  })
export class GamingService {
    private baseUrl = 'https://api.autenticul.ro/';
    //private baseUrl = 'https://localhost:7185/';

    private getLiveEventUrl = this.baseUrl + 'api/event/liveevent';
    private addEventUrl = this.baseUrl + 'api/event/create';
    private placeBetUrl = this.baseUrl + 'api/bet/placebet';
    private saveEventResultUrl = this.baseUrl + 'api/event/saveeventresult';
    private stopBetsUrl = this.baseUrl + 'api/event/stopbets';
    private closeEventUrl = this.baseUrl + 'api/event/closeevent';

    
    constructor(private http: HttpClient, private sharedService: SharedService){ }


    addEvent(newEvent: EventDto) : Observable<IResponse> {
        const formData = new FormData();
        formData.append('NewEventString',JSON.stringify(newEvent));
        return this.http.post<IResponse>(this.addEventUrl, formData)
        .pipe(
            tap(data => console.log('AddEvent response: ', JSON.stringify(data))),
            catchError(this.sharedService.handleError)
        );
    }

    getLiveEvent(): Observable<LiveEventResponse> {
        return this.http.get<LiveEventResponse>(this.getLiveEventUrl)
          .pipe(
            tap(data => console.log('GetLiveEvent response: ', JSON.stringify(data))),
            catchError(this.sharedService.handleError)
          );
    }
    
    placeBet(newBet: Bet) : Observable<IResponse> {
      console.log('Inside placeBet method!!!!!');
      const formData = new FormData();
      formData.append('NewBetString', JSON.stringify(newBet));
      return this.http.post<IResponse>(this.placeBetUrl, formData)
      .pipe(
        tap(data=> console.log('PlaceBet response: ', JSON.stringify(data))),
        catchError(this.sharedService.handleError)
      )
    }

    saveEventResult(eventId: string, result: string) : Observable<IResponse> {
      console.log('Inside saveEventResult method!!!!');
      const formData = new FormData();
      formData.append('EventId', eventId);
      formData.append('Result', result);
      return this.http.post<IResponse>(this.saveEventResultUrl, formData)
      .pipe(
        catchError(this.sharedService.handleError)
      )
    }

    stopBets(eventId: string) : Observable<IResponse> {
      console.log('Inside stopBets method!!!!');
      const formData = new FormData();
      formData.append('EventId', eventId);
      return this.http.post<IResponse>(this.stopBetsUrl, formData)
      .pipe(
        catchError(this.sharedService.handleError)
      )
    }

    closeEvent(eventId: string) : Observable<IResponse> {
      console.log('Inside stopBets method!!!!');
      const formData = new FormData();
      formData.append('EventId', eventId);
      return this.http.post<IResponse>(this.closeEventUrl, formData)
      .pipe(
        catchError(this.sharedService.handleError)
      )
    }


}
