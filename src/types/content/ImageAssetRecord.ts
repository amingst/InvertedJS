export type ImageAssetRecord = {
    Public: ImageAssetPublicRecord;
    Private: ImageAssetPrivateRecord;
}

export type ImageAssetData = {
    Public: ImageAssetPublicData;
    Private: ImageAssetPrivateData;
};

export type ImageAssetPublicRecord = {
    AssetID: string;
    CreatedOnUTC: string;
    ModifiedOnUTC: string;
    Data: ImageAssetPublicData;
};

export type ImageAssetPrivateRecord = {
    CreatedBy: string;
    ModifiedBy: string;
    Data: ImageAssetPrivateData;
};

export type ImageAssetPublicData = {
    Title: string;
    Caption: string;
    URL: string;
    MimeType: string;
    Height: number;
    Width: number;
    Data: Uint8Array
};

export type ImageAssetPrivateData = {
    OldAssetID: string;
};