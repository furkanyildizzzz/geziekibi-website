import {
  ApiResponse,
  TravelCalendarResponse,
} from "@/types/ApiResponseType";
import { apiRequest } from "@/util/ApiRequest";

export const getTravelCalendar = async (): Promise<
  ApiResponse<TravelCalendarResponse>
> => {
  const response = await apiRequest<TravelCalendarResponse>(
    "homepage/travelCalendar/",
    "GET"
  );

  return response;
};
