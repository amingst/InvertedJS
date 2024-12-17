import { RecordResponse } from '../base';
import { CommentPublicRecord } from './CommentRecord';
import { CommentOrder } from './SharedTypes';

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
};

export type AdminDeleteCommentRequest = {
	CommentID: string;
};

export type AdminDeleteCommentResponse = {
	Record: CommentPublicRecord;
};

export type AdminPinCommentRequest = {
	CommentID: string;
};

export type AdminPinCommentResponse = {
	Record: CommentPublicRecord;
};

export type AdminUnDeleteCommentRequest = {
	CommentID: string;
};

export type AdminUnDeleteCommentResponse = {
	Record: CommentPublicRecord;
};

export type AdminUnPinCommentRequest = {
	CommentID: string;
};

export type AdminUnPinCommentResponse = {
	Record: CommentPublicRecord;
};

export type CreateCommentForContentRequest = {
	ContentID: string;
	Text: string;
};

export type CreateCommentForCommentRequest = {
	ParentCommentID: string;
	Text: string;
};

export type CreateCommentResponse = {
	Record: CommentPublicRecord;
	Error: string;
};

export type DeleteOwnCommentRequest = {
	CommentID: string;
};

export type DeleteOwnCommentResponse = {
	Record: CommentPublicRecord;
};

export type EditCommentRequest = {
	CommentID: string;
	Text: string;
};

export type EditCommentResponse = {
	Record: CommentPublicRecord;
	Error: string;
};

export type GetCommentsForContentRequest = {
	ContentID: string;
	Order: CommentOrder;
	PageSize: number;
	PageOffset: number;
};

export type GetCommentsForCommentRequest = {
	ParentCommentID: string;
	Order: CommentOrder;
	PageSize: number;
	PageOffset: number;
};

export type GetCommentsResponse = RecordResponse<CommentResponseRecord> & {
	Parent: CommentResponseRecord;
};

export type LikeCommentRequest = {
	CommentID: string;
};

export type LikeCommentResponse = {
	Record: CommentPublicRecord;
};

export type UnLikeCommentRequest = {
	CommentID: string;
};

export type UnLikeCommentResponse = {
	Record: CommentPublicRecord;
};
