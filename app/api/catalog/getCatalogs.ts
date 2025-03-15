import {
  ApiResponse,
  Catalog,
} from "@/types/ApiResponseType";
import { apiRequest } from "@/util/ApiRequest";

export const getCatalogs = async (): Promise<
  ApiResponse<Catalog[]>
> => {
  const response = await apiRequest<Catalog[]>(
    "homepage/catalogs/",
    "GET"
  );

  return response;
};
