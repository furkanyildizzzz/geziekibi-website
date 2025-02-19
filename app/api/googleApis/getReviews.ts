import {
  ApiErrorResponse,
  GoogleReviewResponse,
} from "@/types/ApiResponseType";

export const getReviews = async (): Promise<
  GoogleReviewResponse[] | ApiErrorResponse
> => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.GOOGLE_PLACE_ID}&fields=reviews&reviews_no_translations=true&translated=false&key=${process.env.GOOGLE_API_KEY}`
  );
  if (response.ok) {
    const text = await response.text();
    if (text) {
      try {
        return JSON.parse(text).result.reviews as GoogleReviewResponse[];
      } catch (error) {
        throw new Error("Invalid JSON response from server.");
      }
    } else {
      return {
        errorMessage: "No content",
      } as ApiErrorResponse;
    }
  }
  return [];
};
