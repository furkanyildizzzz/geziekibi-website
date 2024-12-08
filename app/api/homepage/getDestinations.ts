import { ApiResponse, TourDailyPath } from "@/types/ApiResponseType";
import { apiRequest } from "@/util/ApiRequest";

export const getDestinations = async (): Promise<
  ApiResponse<TourDailyPath[]>
> => {
  const response = await apiRequest<TourDailyPath[]>(
    "homepage/dailyPaths/",
    "GET"
  );

  return response;
};
