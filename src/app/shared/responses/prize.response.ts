import { Prize } from "../../admin/prize";
import { IResponse } from "../generic.response";


export interface IActivePrizeResponse extends IResponse{
    prize: Prize;
}