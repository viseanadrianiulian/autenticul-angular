import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap } from "rxjs";
import { IResponse } from "../shared/generic.response";
import { SharedService } from "../shared/shared.service";
import { AllPastEventsResponse, LiveEventResponse } from "../shared/responses/event.response";
import { EventDto } from "./event";
import { Bet } from "./bet";
import { IActivePrizeResponse } from "../shared/responses/prize.response";



@Injectable({
    providedIn: 'root'
  })
export class GamingService {

    private getLiveEventUrl = this.sharedService.baseUrl + 'api/event/liveevent';
    private addEventUrl = this.sharedService.baseUrl + 'api/event/create';
    private placeBetUrl = this.sharedService.baseUrl + 'api/bet/placebet';
    private saveEventResultUrl = this.sharedService.baseUrl + 'api/event/saveeventresult';
    private stopBetsUrl = this.sharedService.baseUrl + 'api/event/stopbets';
    private closeEventUrl = this.sharedService.baseUrl + 'api/event/closeevent';
    private getPastEventsUrl = this.sharedService.baseUrl + 'api/event/getallpastevents';
    private getActivePrizeUrl = this.sharedService.baseUrl + 'api/admin/activeprize';

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

    getPastEvents(): Observable<AllPastEventsResponse> {
      return this.http.get<AllPastEventsResponse>(this.getPastEventsUrl)
        .pipe(
          catchError(this.sharedService.handleError)
        )
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

    getCurrentPrize(): Observable<IActivePrizeResponse> {
      return this.http.get<IActivePrizeResponse>(this.getActivePrizeUrl)
      .pipe(
        catchError(this.sharedService.handleError)
      )
    }
    
}
