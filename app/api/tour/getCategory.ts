import {
  ApiResponse,
  CategoryListSuccessResponse,
} from "@/types/ApiResponseType";
import { apiRequest } from "@/util/ApiRequest";

export const getCategory = async (
  seoLink: string
): Promise<ApiResponse<CategoryListSuccessResponse>> => {
  const response = await apiRequest<CategoryListSuccessResponse>(
    "tour/category/" + seoLink,
    "GET"
  );

  return response;
};
