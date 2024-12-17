export type CommentRecord = {
    Public: CommentPublicRecord;
    Private: CommentPrivateRecord;
}

export type CommentPublicRecord = {
    CommentID: string;
    ParentCommentID: string;
    ContentID: string;
    UserID: String;
    CreatedOnUTC: string;
    ModifiedOnUTC: string;
    PinnedOnUTC: string;
    DeletedOnUTC: string;
    Data: CommentPublicData;
}

export type CommentPrivateRecord = {
    CreatedBy: string;
    ModifiedBy: string;
    PinnedBy: string;
    DeletedBy: string;
    Data: CommentPrivateData;
}

export type CommentPublicData = {
    CommentText: string;
    Likes: number;
}

export type CommentPrivateData = {
    LikedByUserIDs: string[]
}