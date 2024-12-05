import {
  ApiResponse,
  FeaturedTourListSuccessResponse,
} from "@/types/ApiResponseType";
import { apiRequest } from "@/util/ApiRequest";

export const getTopTours = async (): Promise<
  ApiResponse<FeaturedTourListSuccessResponse[]>
> => {
  const response = await apiRequest<FeaturedTourListSuccessResponse[]>(
    "homepage/topTours/",
    "GET"
  );

  return response;
};
