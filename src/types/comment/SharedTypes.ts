export enum CommentOrder {
    Liked = 0,
    Older = 1,
    Newer = 2,
}

export enum CommentRestrictionMinimumEnum {
    Anonymous = 0,
    Subscriber = 1,
    PaidSubscriber = 2,
    CommentModerator = 3,
    AdminOnly = 4
}

export type CommentRestrictionMinimum = {
    Minimum: CommentRestrictionMinimumEnum;
    Level: number;
}