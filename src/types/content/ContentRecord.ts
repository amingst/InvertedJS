import { RecordResponse } from "../base";
import { ContentRecord, ContentPublicData, ContentPrivateData, ContentPublicRecord } from "./ContentInterface";

export enum ContentType {
    None = 0,
    Audio = 1,
    Picture = 2,
    Video = 3,
    Written = 4,
}

export type SubscriptionLevelSearch = {
    MinimumLevel: number;
    MaximumLevel: number;
}

export type ContentListRecord = {
    ContentID: string;
    CreatedOnUTC: string;
    PublishOnUTC: string;
    PinnedOnUTC: string;
    Title: string;
    Description: string;
    SubscriptionLevel: number;
    URL: string;
    Author: string;
    AuthorID: string;
    FeaturedImageAssetID: string;
    CategoryIds: string[];
    ChannelIds: string[];
    IsLiveStream: boolean;
    IsLive: boolean;
    ContentType: ContentType;
}

export interface AnnounceContentRequest {
    ContentID: string;
    AnnounceOnUTC: string;
}

export interface AnnounceContentResponse {
    Record: ContentRecord
}

export interface CreateContentRequest {
    Public: ContentPublicData;
    Private: ContentPrivateData;
}

export interface CreateContentResponse {
    Record: ContentRecord
}

export interface DeleteContentRequest {
    ContentID: string;
}

export interface DeleteContentResponse {
    Record: ContentRecord
}

export interface GetAllContentRequest {
    PageSize: number;
    PageOffset: number;
    PossibleContentIDs: string[];   
    SubscriptionSearch: SubscriptionLevelSearch;
    ContentType: ContentType;
    CategoryId: string;
    ChannelId: string;
    Tag: string;
    AuthorId: string;
    OnlyLive: boolean;
    PublishedAfterUTC: string;
    PublishedBeforeUTC: string;
}

export interface GetAllContentResponse extends RecordResponse<ContentListRecord>{}

export interface GetAllContentAdminRequest {
    PageSize: number;
    PageOffset: number;
    SubscriptionSearch: SubscriptionLevelSearch;
    ContentType: ContentType;
    CategoryId: string;
    ChannelId: string;
    Tag: string;
    OnlyLive: boolean;
    Deleted: boolean;
}

export interface GetAllContentAdminResponse extends RecordResponse<ContentListRecord>{}

export interface GetContentRequest {
    ContentID: string;
}

export interface GetContentResponse {
    Record: ContentPublicRecord
}

export interface GetContentByUrlRequest {
    ContentUrl: string;
}

export interface GetContentByUrlResponse {
    Record: ContentPublicRecord;
}

export interface GetContentAdminRequest {
    ContentID: string;
}

export interface GetContentAdminResponse {
    Record: ContentRecord
}

export interface GetRecentCategoriesRequest {
    NumCategories: number;
}

export interface GetRecentCategoriesResponse {
    CategoryIds: string[]
}

export interface GetRecentTagsRequest {
    NumTags: number;
}

export interface GetRecentTagsResponse {
    Tags: string[]
}

export interface GetRelatedContentRequest {
    ContentID: string;
    PageSize: number;
    PageOffset: number;
}

export interface GetRelatedContentResponse extends RecordResponse<ContentListRecord> {}

export interface ModifyContentRequest {
    ContentID: string;
    Public: ContentPublicData;
    Private: ContentPrivateData;
}

export interface ModifyContentResponse {
    Record: ContentRecord
}

export interface PublishContentRequest {
    ContentID: string;
    PublishOnUTC: string;
}

export interface PublishContentResponse {
    Record: ContentRecord
}

export interface SearchContentRequest {
    PageSize: number;
    PageOffset: number;
    Query: string;
    SubscriptionSearch: SubscriptionLevelSearch;
    ContentType: ContentType;
    CategoryId: string;
    ChannelId: string;
    Tag: string;
    OnlyLive: boolean;
}

export interface SearchContentResponse extends RecordResponse<ContentListRecord> {}

export interface UnannounceContentRequest {
    ContentID: string;
}

export interface UnannounceContentResponse {
    Record: ContentRecord;
}

export interface UndeleteContentRequest {
    ContentID: string;
}

export interface UndeleteContentResponse {
    Record: ContentRecord;
}

export interface UnpublishContentRequest {
    ContentID: string;
}

export interface UnpublishContentResponse {
    Record: ContentRecord;
}