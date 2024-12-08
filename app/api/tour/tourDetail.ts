import { ApiResponse, TourSuccessResponse } from "@/types/ApiResponseType";
import { apiRequest } from "@/util/ApiRequest";

export const getTourDetail = async (
  seoLink: string
): Promise<ApiResponse<TourSuccessResponse>> => {
  const response = await apiRequest<TourSuccessResponse>(
    "tour/" + seoLink,
    "GET"
  );

  console.log({ TourDetail: response });

  return response;
};
