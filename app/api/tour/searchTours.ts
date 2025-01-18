import {
  ApiResponse,
  FeaturedTourListSuccessResponse,
  TourDailyPath,
} from "@/types/ApiResponseType";
import { apiRequest } from "@/util/ApiRequest";

export interface SearchParams {
  startDate: Date | null;
  destination: TourDailyPath | null;
}

export const searchTours = async (
  params: SearchParams
): Promise<ApiResponse<FeaturedTourListSuccessResponse[]>> => {
  const response = await apiRequest<FeaturedTourListSuccessResponse[]>(
    "tour/search",
    "POST",
    params
  );

  return response;
};
