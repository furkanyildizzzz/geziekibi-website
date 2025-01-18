import {
  ApiResponse,
  FeaturedTourListSuccessResponse,
} from "@/types/ApiResponseType";
import { apiRequest } from "@/util/ApiRequest";

export const getTours = async (): Promise<
  ApiResponse<FeaturedTourListSuccessResponse[]>
> => {
  const response = await apiRequest<FeaturedTourListSuccessResponse[]>(
    "tour/",
    "GET"
  );

  return response;
};
