import {
  ApiResponse,
  BlogCategoryListSuccessResponse,
} from "@/types/ApiResponseType";
import { apiRequest } from "@/util/ApiRequest";

export const getCategories = async (): Promise<
  ApiResponse<BlogCategoryListSuccessResponse[]>
> => {
  const response = await apiRequest<BlogCategoryListSuccessResponse[]>(
    "blog/blogCategories/",
    "GET"
  );

  console.log({ categories: response });

  return response;
};
