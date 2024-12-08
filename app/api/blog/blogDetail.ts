import { ApiResponse, BlogSuccessResponse } from "@/types/ApiResponseType";
import { apiRequest } from "@/util/ApiRequest";

export const getBlogDetail = async (
  seoLink: string
): Promise<ApiResponse<BlogSuccessResponse>> => {
  const response = await apiRequest<BlogSuccessResponse>(
    "blog/" + seoLink,
    "GET"
  );

  console.log({ BlogDetail: response });

  return response;
};
