import { Bet } from "../../gaming/bet";
import { EventDto } from "../../gaming/event";
import { IResponse } from "../generic.response";

export interface LiveEventResponse extends IResponse {
    liveEvent: EventDto;
    pastEvents: EventDto[];
    userBet: Bet;
  }

export interface AllPastEventsResponse extends IResponse {
  events: EventDto[];
}