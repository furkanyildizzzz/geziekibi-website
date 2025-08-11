import {
  CurrencyEnum,
  LanguageEnum,
  PageTypeEnum,
  PublishStatusEnum,
  TourServiceTypeEnum,
  TourTypeEnum,
} from "../lib/enums";

export type ApiResponse<T = any> = ApiErrorResponse | ApiSuccessResponse<T>;

export interface ApiErrorResponse extends Response {
  errorType: ErrorType;
  errorMessage: string;
  errors: string[] | null;
  errorRaw: any;
  errorsValidation: ErrorValidation[] | null;
  stack?: string;
}
export type ErrorType =
  | "General"
  | "Raw"
  | "Validation"
  | "Unauthorized"
  | "BAD REQUEST"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "CONFLICT"
  | "INTERNAL SERVER ERROR"
  | "METHOD NOT ALLOWED"
  | "NOT FOUND"
  | "REQUEST TIMEOUT";
export type ErrorValidation = { [key: string]: string };

export interface ApiSuccessResponse<T> extends Response {
  message: string;
  data: T;
}
export type DeleteSuccessResponse = {};
export type UserSuccessResponse = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
  fullName: string;
  role: "ADMINISTRATOR" | "STANDART"; // Adjust roles as necessary
  language: string; // e.g., "en-US", "tr-TR"
  profileImage: CloudinaryImage;
  address: UserAddress;
};
export type UserAddress = {
  secondEmail: string;
  website: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
};
export type LoginSuccessResponse = {
  accessToken: string;
  user: UserSuccessResponse;
};
export type SignupSuccessResponse = string;
export type TagSuccessResponse = { id: number; name: string; seoLink: string };
export type TourPathSuccessResponse = { id: number; name: string };
export type TourCategorySuccessResponse = {
  id: number;
  name: string;
  description: Text;
  parent: TourCategorySuccessResponse;
  subCategories: TourCategorySuccessResponse[];
  uploadedPrimaryImages: CloudinaryImage[];
};
export type TourServiceSuccessResponse = {
  id: number;
  name: string;
  description: string;
  type: TourServiceTypeEnum;
  service: ServiceSuccessResponse;
};
export type ServiceSuccessResponse = {
  id: number;
  name: string;
  description: string;
};
export type CloudinaryImage = {
  originalName: string;
  publicId: string;
  url: string;
  secureUrl: string;
  format: string;
  createdAt: Date;
  order: number;
};
export type Catalog = {
  id: number;
  originalName: string;
  publicId: string;
  url: string;
  secureUrl: string;
  format: string;
  createdAt: Date;
  order: number;
  publishDate: Date;
  publishStatus: PublishStatusEnum;
};
export type TourService = {
  id: number;
  type: TourServiceTypeEnum;
  service: ServiceSuccessResponse;
};
export type TourDailyPath = {
  id: number;
  name: string;
};
export type DailyVisitingPlace = {
  id: number;
  name: string;
};
export type TourDailyForm = {
  breakfast: string;
  lunch: string;
  dinner: string;
  description: string;
  dailyPaths: TourDailyPath[];
  dailyVisitingPlaces: DailyVisitingPlace[];
};

export type TourSuccessResponse = {
  id: number;
  title: string;
  spot: string;
  body: string;
  tourType: TourTypeEnum;
  daysAndNights: string;
  uploadedPrimaryImages: CloudinaryImage[];
  uploadedGalleryImages: CloudinaryImage[];
  publishStatus: string;
  publishDate: Date;
  category: TourCategorySuccessResponse;
  prices: { name: string; description: string; price: number }[];
  tags: TagSuccessResponse[];
  tourServices: TourService[];
  dailyForms: TourDailyForm[];
  tourDates: TourDateSuccessResponse[];
  slugType: "tour";
  importantNotes: string;
};

export type TourListSuccessResponse = {
  id: number;
  title: string;
  spot: string;
  tourType: string;
  primaryImages: CloudinaryImage[];
  publishStatus: string;
  publishDate: Date;
  category: TourCategorySuccessResponse;
  prices: { name: string; description: string; price: number }[];
};
export type TourPriceSuccessResponse = {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: CurrencyEnum;
  rowId: number;
};
export type TourDateSuccessResponse = {
  id: number;
  startDate: Date;
  endDate: Date;
  description: string;
  isActive: boolean;
  prices: TourPriceSuccessResponse[];
};
export type BlogCategorySuccessResponse = {
  id: number;
  name: string;
  description: Text;
  parent: TourCategorySuccessResponse;
  subCategories: TourCategorySuccessResponse[];
  uploadedPrimaryImages: CloudinaryImage[];
};
export type BlogSuccessResponse = {
  id: number;
  title: string;
  spot: string;
  body: string;
  language: LanguageEnum;
  publishStatus: string;
  publishDate: Date;
  category: BlogCategorySuccessResponse;
  tags: TagSuccessResponse[];
  uploadedPrimaryImages: CloudinaryImage[];
  slugType: "blog";
};

export type BlogListSuccessResponse = {
  id: number;
  title: string;
  spot: string;
  language: string;
  primaryImages: CloudinaryImage[];
  publishStatus: string;
  publishDate: Date;
  category: TourCategorySuccessResponse;
  tags: TagSuccessResponse[];
};

export type StaticPageSuccessResponse = {
  id: number;
  title: string;
  body: string;
  pageType: PageTypeEnum;
};

export type StaticPageListSuccessResponse = {
  id: number;
  title: string;
  pageType: PageTypeEnum;
};
export type FeaturedTourListSuccessResponse = {
  id: number;
  title: string;
  seoLink: string;
  tourType: string;
  startDate: Date;
  endDate: Date;
  uploadedPrimaryImages: CloudinaryImage[];
  daysAndNights: string;
  pricePerPerson: number;
  currency: CurrencyEnum;
  category: TourCategorySuccessResponse;
};

export type CategoryListSuccessResponse = {
  id: number;
  name: string;
  seoLink: string;
  description: string;
  parent: CategoryListSuccessResponse;
  subCategories: CategoryListSuccessResponse[];
  uploadedPrimaryImages: CloudinaryImage[];
  tourCount: number;
};

export type BlogCategoryListSuccessResponse = {
  id: number;
  name: string;
  seoLink: string;
  description: string;
  parent: CategoryListSuccessResponse;
  subCategories: CategoryListSuccessResponse[];
  uploadedPrimaryImages: CloudinaryImage[];
  blogCount: number;
};

export type HomepageBlogListSuccessResponse = {
  id: number;
  title: string;
  seoLink: string;
  publishDate: Date;
  uploadedPrimaryImages: CloudinaryImage[];
  comments: number;
  tags: TagSuccessResponse[];
  category: BlogCategorySuccessResponse;
};

export type FAQSuccessResponse = {
  id: number;
  Question: string;
  Answer: string;
  Order: number;
};
export type SliderResponse = {
  id: number;
  isActive: string;
  order: number;
  image: CloudinaryImage;
};

export type GoogleResponse = {
  rating: number;
  reviews: GoogleReviewResponse[];
  url: string;
};

export type GoogleReviewResponse = {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
};


export type PriceDTO = {
  amount: number;
  currency: CurrencyEnum;
}

export type TourDTO = {
  departureDate: string;  // ISO format
  returnDate: string;     // ISO format
  durationDays: number;
  tourName: string;
  seoLink: string;
  price: PriceDTO;
}

export type MonthDTO = {
  month: number;  // 1-12
  tours: TourDTO[];
}

export type YearDTO = {
  year: number;  // 1-12
  months: MonthDTO[];
}

export type TravelCalendarResponse = {
  years: YearDTO[];
}




