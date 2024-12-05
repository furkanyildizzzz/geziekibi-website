export enum TourTypeEnum {
  YURTICI = "yurtici",
  YURTDISI = "yurtdisi",
  GUNUBIRLIK = "gunubirlik",
}
export const TourTypeDisplayNames: { [key in TourTypeEnum]: string } = {
  [TourTypeEnum.YURTICI]: "Yurt İçi",
  [TourTypeEnum.YURTDISI]: "Yurt Dışı",
  [TourTypeEnum.GUNUBIRLIK]: "Günübirlik",
};

export enum PublishStatusEnum {
  PUBLISH = "publish",
  DRAFT = "draft",
  UNPUBLISH = "unpublish",
}
export const PublishStatusDisplayNames: { [key in PublishStatusEnum]: string } =
  {
    [PublishStatusEnum.PUBLISH]: "Publish",
    [PublishStatusEnum.DRAFT]: "Draft",
    [PublishStatusEnum.UNPUBLISH]: "Unpublish",
  };

export enum CurrencyEnum {
  TRY = "try",
  EUR = "eur",
  USD = "usd",
}
export const CurrencyDisplayNames: { [key in CurrencyEnum]: string } = {
  [CurrencyEnum.TRY]: "TL ₺",
  [CurrencyEnum.EUR]: "Euro €",
  [CurrencyEnum.USD]: "Dolar $",
};

export enum TourServiceTypeEnum {
  INCLUDED = "included",
  INHERIT = "inherit",
  EXCLUDED = "excluded",
}
export const TourServiceTypeEnumDisplayNames: {
  [key in TourServiceTypeEnum]: string;
} = {
  [TourServiceTypeEnum.INCLUDED]: "Included",
  [TourServiceTypeEnum.INHERIT]: "Inherit",
  [TourServiceTypeEnum.EXCLUDED]: "Excluded",
};

export enum LanguageEnum {
  TR = "turkish",
  EN = "english",
}
export const LanguageEnumDisplayNames: {
  [key in LanguageEnum]: string;
} = {
  [LanguageEnum.TR]: "Türkçe",
  [LanguageEnum.EN]: "English",
};

export enum PageTypeEnum {
  PageAboutUs = "page-about-us",
  PageSecretPolicy = "page-secret-policy",
  PageUsagePolicy = "page-usage-policy",
  PageInformationSecurityPolicy = "page-information-security-policy",
  PageKVKKPolicy = "page-kvkk-policy",
  PageCookiePolicy = "page-cookie-policy",
  PageMembershipAgreementPolicy = "page-membership-agreement-policy",
  PageHumanResources = "page-human-resources",
}

export const PageTypeEnumDisplayNames: {
  [key in PageTypeEnum]: string;
} = {
  [PageTypeEnum.PageAboutUs]: "About Us",
  [PageTypeEnum.PageSecretPolicy]: "Secret Policy",
  [PageTypeEnum.PageUsagePolicy]: "Usage Policy",
  [PageTypeEnum.PageInformationSecurityPolicy]: "Information Security Policy",
  [PageTypeEnum.PageKVKKPolicy]: "KVKK Policy",
  [PageTypeEnum.PageCookiePolicy]: "Cookie Policy",
  [PageTypeEnum.PageMembershipAgreementPolicy]: "Membership Agreement Policy",
  [PageTypeEnum.PageHumanResources]: "Human Resources",
};