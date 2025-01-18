import { ApiResponse, FAQSuccessResponse } from "@/types/ApiResponseType";
import { apiRequest } from "@/util/ApiRequest";

export const getFAQs = async (): Promise<ApiResponse<FAQSuccessResponse[]>> => {
  const response = await apiRequest<FAQSuccessResponse[]>(
    "homepage/faqs/",
    "GET"
  );

  return response;
};
