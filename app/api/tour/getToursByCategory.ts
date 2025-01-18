import {
  ApiResponse,
  FeaturedTourListSuccessResponse,
} from "@/types/ApiResponseType";
import { apiRequest } from "@/util/ApiRequest";

export const getToursByCategoryId = async (
  categoryId: number
): Promise<ApiResponse<FeaturedTourListSuccessResponse[]>> => {
  const response = await apiRequest<FeaturedTourListSuccessResponse[]>(
    "tour?categoryId=" + categoryId,
    "GET"
  );

  return response;
};
