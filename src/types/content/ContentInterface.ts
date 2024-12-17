export type ContentRecord = {
    Public: ContentPublicRecord;
    Private: ContentPrivateRecord;
}

export type ContentPublicRecord = {
    ContentID: string;
    CreatedOnUTC: string;
    ModifiedOnUTC: string;
    PublishOnUTC: string;
    AnnounceOnUTC: string;
    PinnedOnUTC: string;
    DeletedOnUTC: string;
    Data: ContentPublicData;
}

export type ContentPrivateRecord = {
    CreatedBy: string;
    ModifiedBy: string;
    PublishedBy: string;
    AnnouncedBy: string;
    PinnedBy: string;
    DeletedBy: string;
    Data: ContentPrivateData
}

export type ContentPublicData = {
    Title: string;
    Description: string;
    Author: string;
    AuthorID: string;
    URL: string;
    FeaturedImageAssetID: string;
    SubscriptionLevel: number;
    CategoryIDs: string[];
    ChannelIDs: string[];
    Tags: string[];
    OneTimeAmountCents: number;
    ContentData_oneof: {
        Audio: AudioContentPublicData
    } | {Picture: PictureContentPublicData} | {Video: VideoContentPublicData} | {Written: WrittenContentPublicData}
}

export type ContentPrivateData = {
    ContentData_oneof: {
        Audio: AudioContentPrivateData
    } | {Picture: PictureContentPrivateData} | {Video: VideoContentPrivateData} | {Written: WrittenContentPrivateData}
    OldContentID: string;
}

export type AudioContentPublicData = {
    HtmlBody: string;
    AudioAssetID: string;
}

export type AudioContentPrivateData = {}

export type PictureContentPublicData = {
    HtmlBody: string;
    ImageAssetIDs: string[];
}

export type PictureContentPrivateData = {}

export type VideoContentPublicData = {
    HtmlBody: string;
    IsLive: boolean;
    IsLiveStream: boolean;
    RumbleVideoId: string;
    YoutubeVideoId: string;
}

export type VideoContentPrivateData = {}

export type WrittenContentPublicData = {
    HtmlBody: string;
}

export type WrittenContentPrivateData = {}