import { IResponse } from "../generic.response";

export interface ILoginResponse extends IResponse {
    jwtToken : string;
    expiresIn : Date;
}