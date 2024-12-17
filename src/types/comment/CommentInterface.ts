import { RecordResponse } from "../base";
import { CommentPublicRecord } from "./CommentRecord";
import { CommentOrder } from "./SharedTypes";

export type CommentResponseRecord = {
    ContentID: string;
    CommentID: string;
    UserID: string;
    UserName: string;
    UserDisplayName: string;
    CreatedOnUTC: string;
    ModifiedOnUTC: string;
    PinnedOnUTC: string;
    DeletedOnUTC: string;
    CommentText: string;
    Likes: number;
    LikedByUser: boolean;
    NumReplies: number;
}

export interface AdminDeleteCommentRequest {
    CommentID: string;
}

export interface AdminDeleteCommentResponse {
    Record: CommentPublicRecord;
}

export interface AdminPinCommentRequest {
    CommentID: string;
}

export interface AdminPinCommentResponse {
    Record: CommentPublicRecord;
}

export interface AdminUnDeleteCommentRequest {
    CommentID: string;
}

export interface AdminUnDeleteCommentResponse {
    Record: CommentPublicRecord;
}

export interface AdminUnPinCommentRequest {
    CommentID: string;
}

export interface AdminUnPinCommentResponse {
    Record: CommentPublicRecord
}

export interface CreateCommentForContentRequest {
    ContentID: string;
    Text: string;
}

export interface CreateCommentForCommentRequest {
    ParentCommentID: string;
    Text: string;
}

export interface CreateCommentResponse {
    Record: CommentPublicRecord;
    Error: string;
}

export interface DeleteOwnCommentRequest {
    CommentID: string;
}

export interface DeleteOwnCommentResponse {
    Record: CommentPublicRecord;
}

export interface EditCommentRequest {
    CommentID: string;
    Text: string;
}

export interface EditCommentResponse {
    Record: CommentPublicRecord;
    Error: string;
}

export interface GetCommentsForContentRequest {
    ContentID: string;
    Order: CommentOrder;
    PageSize: number;
    PageOffset: number;
}

export interface GetCommentsForCommentRequest {
    ParentCommentID: string;
    Order: CommentOrder;
    PageSize: number;
    PageOffset: number;
}

export interface GetCommentsResponse extends RecordResponse<CommentResponseRecord> {
    Parent: CommentResponseRecord
}

export interface LikeCommentRequest {
    CommentID: string;
}

export interface LikeCommentResponse {
    Record: CommentPublicRecord;
}

export interface UnLikeCommentRequest {
    CommentID: string;
}

export interface UnLikeCommentResponse {
    Record: CommentPublicRecord;
}