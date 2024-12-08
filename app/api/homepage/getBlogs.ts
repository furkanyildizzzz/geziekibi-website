import {
  ApiResponse,
  HomepageBlogListSuccessResponse,
} from "@/types/ApiResponseType";
import { apiRequest } from "@/util/ApiRequest";

export const getBlogs = async (): Promise<
  ApiResponse<HomepageBlogListSuccessResponse[]>
> => {
  const response = await apiRequest<HomepageBlogListSuccessResponse[]>(
    "homepage/blogs/",
    "GET"
  );

  return response;
};
