import { RecordResponse } from "../base";
import { AssetRecord } from "./AssetRecord";
import { AudioAssetData, AudioAssetPublicRecord } from "./AudioAssetRecord";
import { ImageAssetData, ImageAssetPublicRecord } from "./ImageAssetRecord";

export enum AssetType {
    None = 0,
    Audio = 1,
    Image = 2,
}

export type AssetListRecord = {
    AssetID: string;
    CreatedOnUTC: string;
    Title: string;
    Caption: string;
    AssetType: AssetType;
    Height: number;
    Width: number;
    LengthSeconds: number;
}

export interface CreateAssetRequest {
    CreateAssetRequest_oneof: {Audio: AudioAssetData} | {Image: ImageAssetData}
}

export interface CreateAssetResponse {
    Record: AssetRecord
}

export interface GetAssetRequest {
    AssetID: string
};

export interface GetAssetResponse {
    GetAssetResponse_oneof: {Audio: AudioAssetPublicRecord} | {Image: ImageAssetPublicRecord}
}

export interface GetAssetAdminRequest {
    AssetID: String;
}

export interface GetAssetAdminResponse {
    Record: AssetRecord;
}

export interface GetAssetByOldContentIDRequest {
    OldAssetID: string;
}

export interface GetAssetByOldContentIDResponse {
    Record: AssetRecord;
}

export interface GetListOfIDsRequest {}

export interface GetListOfIDsResponse {
    AssetID: string;
    ModifiedOnUTC: string;
}

export interface GetListOfOldContentIDsRequest {}

export interface GetListOfOldContentIDsResponse {
    AssetID: string;
    OldAssetID: string;
    ModifiedOnUTC: string;
}

export interface SearchAssetRequest {
    PageSize: number;
    PageOffset: number;
    Query: string;
    AssetType: AssetType;
}

export interface SearchAssetResponse extends RecordResponse<AssetListRecord>{}