import {
  ApiErrorResponse,
  GoogleResponse,
  GoogleReviewResponse,
} from "@/types/ApiResponseType";

export const getGoogleApiResponse = async (): Promise<
  GoogleResponse | ApiErrorResponse
> => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.GOOGLE_PLACE_ID}&fields=reviews,rating,url&reviews_no_translations=true&translated=false&key=${process.env.GOOGLE_API_KEY}`
    );
    if (response.ok) {
      const text = await response.text();
      if (text) {
        try {
          console.log({ text: JSON.parse(text) });
          return JSON.parse(text).result as GoogleResponse;
        } catch (error) {
          // throw new Error("Invalid JSON response from server.");
          return {
            errorMessage: "Invalid JSON response from server.",
          } as ApiErrorResponse;
        }
      } else {
        return {
          errorMessage: "Text is null.",
        } as ApiErrorResponse;
      }
    }
    return {
      errorMessage: "Google response failed",
    } as ApiErrorResponse;
  } catch (error) {
    return {
      errorMessage: "Error fetching google response.",
    } as ApiErrorResponse;
  }
};
