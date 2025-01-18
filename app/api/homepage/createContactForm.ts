import { ContactForm } from "@/lib/definitions";
import {
  ApiResponse,
  CategoryListSuccessResponse,
} from "@/types/ApiResponseType";
import { apiRequest } from "@/util/ApiRequest";

export const createContactForm = async (
  data: ContactForm
): Promise<ApiResponse<boolean>> => {
  const response = await apiRequest<boolean>(
    "homepage/contactForm/",
    "POST",
    data
  );

  return response;
};
