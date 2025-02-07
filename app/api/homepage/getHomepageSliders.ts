import { ApiResponse, SliderResponse } from "@/types/ApiResponseType";
import { apiRequest } from "@/util/ApiRequest";

export const getHomepageSliders = async (): Promise<
  ApiResponse<SliderResponse[]>
> => {
  const response = await apiRequest<SliderResponse[]>(
    "homepage/sliders/",
    "GET"
  );

  return response;
};
