type BaseResponse = {
    Success: boolean;
    Msg: string;
    Error: string;
}

export type RumbleData = {
    Videos: RumbleVideo[]
}

export type DateFilter = {
    BeginDate: string;
    EndDate: string;
}

export type RumbleVideo = {
    Id: string;
    Embed: string;
    Title: string;
    IsPrivate: boolean;
    Channel: string;
    UploadDate: string;
}

export interface StoredDataRequest {
    VideoId: string;
}

export interface StoredDataResponse extends BaseResponse {
    Data: RumbleData;
}

export interface RumbleVideoRequest {
    VideoId: string;
}

export interface RumbleVideoResponse extends BaseResponse {
    Data: RumbleVideo
}

export interface RumbleChannelRequest {
    ChannelId: string;
    Dates: DateFilter;
}

export interface RumbleChannelResponse extends BaseResponse {
    Data: RumbleData;
}

