import { IUser } from "../../users/user";
import { IResponse } from "../generic.response";

export interface UserResponse extends IResponse {
    userDetails: IUser;
  }