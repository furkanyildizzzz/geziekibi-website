import {
  ApiResponse,
  FeaturedTourListSuccessResponse,
} from "@/types/ApiResponseType";
import { apiRequest } from "@/util/ApiRequest";

export const getFeaturedTours = async (): Promise<
  ApiResponse<FeaturedTourListSuccessResponse[]>
> => {
  const response = await apiRequest<FeaturedTourListSuccessResponse[]>(
    "homepage/featuredTours/",
    "GET"
  );

  return response;
};
