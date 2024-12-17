import { AudioAssetRecord } from "./AudioAssetRecord"
import { ImageAssetRecord } from "./ImageAssetRecord"

export type AssetRecord = {
    AssetRecord_oneof: {Audio: AudioAssetRecord} | {Image: ImageAssetRecord}
}