import { RumbleData } from "./Rumble";

type BaseResponse = {
    Success: boolean;
    Msg: string;
    Error: string;
}

export type RequestOpts = {
    Provider: string;
    FID: string;
}

export type VideoProviderData = {
    Rumble: RumbleData;
}

export interface GetDataRequest {
    Options: RequestOpts;
}

export interface GetDataResponse extends BaseResponse {
    Data: VideoProviderData;
}