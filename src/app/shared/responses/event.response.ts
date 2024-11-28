import { Bet } from "../../gaming/bet";
import { EventDto } from "../../gaming/event";
import { IResponse } from "../generic.response";

export interface LiveEventResponse extends IResponse {
    liveEvent: EventDto;
    userBet: Bet;
  }