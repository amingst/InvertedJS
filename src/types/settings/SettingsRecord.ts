import { SubscriptionTier } from "../authorization";
import { CryptoPublicSettings } from "../authorization/payment/crypto";
import { FakePaymentPublicSettings } from "../authorization/payment/fake";
import { ParalellEconomyOwnerSettings, ParallelEconomyPublicSettings } from "../authorization/payment/parallel-economy";
import { PaypalPublicSettings, PaypalOwnerSettings } from "../authorization/payment/paypal";
import { StripePublicSettings, StripeOwnerSettings } from "../authorization/payment/stripe";
import { CommentOrder, CommentRestrictionMinimum } from "../comment";
import { LayoutEnum } from "../content";
import { SendgridOwnerSettings } from "../notification";

export type SettingsPublicData = {
    VersionNum: number;
    ModifiedOnUTC: string;
    Personalization: PersonalizationPublicRecord;
    Subscription: SubscriptionPublicRecord;
    Comments: CommentsPublicRecord;
    CMS: CMSPublicRecord,
    Notification: NotificationPublicRecord;
}

export type SettingsPrivateData = {
    ModifiedBy: string;
    Personalization: PersonalizationPrivateRecord;
    Subscription: SubscriptionPrivateRecord;
    Comments: CommentsPrivateRecord;
    CMS: CMSPrivateRecord,
    Notification: NotificationPrivateRecord;
}

export type SettingsOwnerData = {
    Personalization: PersonalizationOwnerRecord;
    Subscription: SubscriptionOwnerRecord;
    Comments: CommentsOwnerRecord;
    CMS: CMSOwnerRecord,
    Notification: NotificationOwnerRecord;}

export type PersonalizationPublicRecord = {
    Title: string;
    MetaDescription: string;
    DefaultToDarkMode: boolean;
    ProfileImageAssetId: string;
    HeaderImageAssetId: string;
}

export type PersonalizationPrivateRecord = {}

export type PersonalizationOwnerRecord = {}

export type SubscriptionPublicRecord = {
    Tiers: SubscriptionTier[]
    AllowOther: boolean;
    MinimumAllowed: boolean;
    MaximumAllowed: boolean;
    Fake: FakePaymentPublicSettings;
    ParalellEconomy: ParallelEconomyPublicSettings;
    Crypto: CryptoPublicSettings;
    Stripe: StripePublicSettings;
    Paypal: PaypalPublicSettings;
}

export type SubscriptionPrivateRecord = {}

export type SubscriptionOwnerRecord = {
    ParalellEconomy: ParalellEconomyOwnerSettings;
    Stripe: StripeOwnerSettings;
    Paypal: PaypalOwnerSettings;
}

export type CommentsPublicRecord = {
    AllowLinks: boolean;
    DefaultOrder: CommentOrder;
    DefaultRestriction: CommentRestrictionMinimum
    ExplicitModeEnabled: boolean;
}

export type CommentsPrivateRecord = {
    Blacklist: string[]
}

export type CommentsOwnerRecord = {}

export type CMSPublicRecord = {
    DefaultLayout: LayoutEnum;
    Channels: ChannelRecord[];
    Categories: CategoryRecord[];
    Menu: CMSPublicMenuRecord;
}

export type CMSPrivateRecord = {}

export type CMSOwnerRecord = {}

export type NotificationPublicRecord = {}

export type NotificationPrivateRecord = {}

export type NotificationOwnerRecord = {
    Sendgrid: SendgridOwnerSettings;
}

export type ChannelRecord = {
    ChannelId: string;
    ParentChannelId: string;
    DisplayName: string;
    UrlStub: string;
    ImageAssetId: string;
    YoutubeUrl: string;
    RumbleUrl: string;
    OldChannelUrl: string;
}

export type CategoryRecord = {
    CategoryId: string;
    ParentCategoryId: string;
    DisplayName: string;
    UrlStub: string;
    OldCategoryId: string;
}

export type CMSPublicMenuRecord = {
    AudioMenuLinkName: string;
    PictureMenuLinkName: string;
    VideoMenuLinkName: string;
    WrittenMenuLinkName: string;    
}

export type SettingsRecord = {  
    Public: SettingsPublicData,
    Private: SettingsPrivateData,
    Owner: SettingsOwnerData;
}