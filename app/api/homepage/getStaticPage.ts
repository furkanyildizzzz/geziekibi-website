import { PageTypeEnum } from "@/lib/enums";
import {
  ApiResponse,
  HomepageBlogListSuccessResponse,
  StaticPageSuccessResponse,
} from "@/types/ApiResponseType";
import { apiRequest } from "@/util/ApiRequest";

export const getStaticPage = async (
  pageTypeEnum: PageTypeEnum
): Promise<ApiResponse<StaticPageSuccessResponse>> => {
  const response = await apiRequest<StaticPageSuccessResponse>(
    "homepage/staticPage/" + pageTypeEnum,
    "GET"
  );

  return response;
};
