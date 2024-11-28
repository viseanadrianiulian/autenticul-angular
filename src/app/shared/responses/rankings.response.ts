import { IUser } from "../../users/user";
import { IResponse } from "../generic.response";


export interface RankingsResponse extends IResponse {
    users: IUser[];
  }