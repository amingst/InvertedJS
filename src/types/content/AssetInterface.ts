import { RecordResponse } from '../base';
import { AssetRecord } from './AssetRecord';
import { AudioAssetData, AudioAssetPublicRecord } from './AudioAssetRecord';
import { ImageAssetData, ImageAssetPublicRecord } from './ImageAssetRecord';

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
};

export type CreateAssetRequest = {
	CreateAssetRequest_oneof:
		| { Audio: AudioAssetData }
		| { Image: ImageAssetData };
};

export type CreateAssetResponse = {
	Record: AssetRecord;
};

export type GetAssetRequest = {
	AssetID: string;
};

export type GetAssetResponse = {
	GetAssetResponse_oneof:
		| { Audio: AudioAssetPublicRecord }
		| { Image: ImageAssetPublicRecord };
};

export type GetAssetAdminRequest = {
	AssetID: String;
};

export type GetAssetAdminResponse = {
	Record: AssetRecord;
};

export type GetAssetByOldContentIDRequest = {
	OldAssetID: string;
};

export type GetAssetByOldContentIDResponse = {
	Record: AssetRecord;
};

export type GetListOfIDsRequest = {};

export type GetListOfIDsResponse = {
	AssetID: string;
	ModifiedOnUTC: string;
};

export type GetListOfOldContentIDsRequest = {};

export type GetListOfOldContentIDsResponse = {
	AssetID: string;
	OldAssetID: string;
	ModifiedOnUTC: string;
};

export type SearchAssetRequest = {
	PageSize: number;
	PageOffset: number;
	Query: string;
	AssetType: AssetType;
};

export type SearchAssetResponse = RecordResponse<AssetListRecord>;
