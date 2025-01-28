import { Streamer } from "../../users/streamer";
import { IResponse } from "../generic.response";


export interface StreamerResponse extends IResponse {
    streamerDetails : Streamer
}