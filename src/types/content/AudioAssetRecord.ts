export type AudioAssetRecord = {
    Public: AudioAssetPublicRecord;
    Private: AudioAssetPrivateRecord;
}

export type AudioAssetData = {
    Public: AudioAssetPublicData;
    Private: AudioAssetPrivateData;
}

export type AudioAssetPublicRecord = {
    AssetID: string;
    CreatedOnUTC: string;
    ModifiedOnUTC: string;
    Data: AudioAssetPublicData;
}

export type AudioAssetPublicData = {
    Title: string;
    Caption: string;
    URL: string;
    Mimetype: string;
    LengthSeconds: number;
    Data: Uint8Array
}

export type AudioAssetPrivateRecord = {
    CreatedBy: string;
    ModifiedBy: string;
    Data: AudioAssetPrivateData;
}

export type AudioAssetPrivateData = {
    OldAssetID: string;
}