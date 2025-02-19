import {
  ApiResponse,
  CategoryListSuccessResponse,
} from "@/types/ApiResponseType";
import { apiRequest } from "@/util/ApiRequest";

export const getCategories = async (): Promise<
  ApiResponse<CategoryListSuccessResponse[]>
> => {
  const response = await apiRequest<CategoryListSuccessResponse[]>(
    "homepage/categories/",
    "GET"
  );

  return response;
};
