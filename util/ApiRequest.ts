import {
  ApiErrorResponse,
  ApiResponse,
  ApiSuccessResponse,
} from "../types/ApiResponseType";
import Cookies from "js-cookie";

export async function apiRequest<T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: any
): Promise<ApiResponse<T>> {
  try {
    const token = Cookies.get("token");

    // Determine if body is FormData
    const isFormData = body instanceof FormData;
    // Set headers, omitting "Content-Type" if body is FormData
    const headers: HeadersInit = {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(!isFormData ? { "Content-Type": "application/json" } : {}),
    };
    // Prepare body
    const requestBody = isFormData ? body : JSON.stringify(body);
    const response = await fetch(`${process.env.BACKEND_URL}/website/${url}`, {
      method,
      headers,
      body: requestBody,
      cache: "no-store",
    });

    const result = await processApiResponse<T>(response);

    return result;
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error;
  }
}

export async function apiRequestFile<T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: File | File[]
): Promise<ApiResponse<T>> {
  try {
    const token = Cookies.get("token");

    const headers: HeadersInit = {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };

    let bodyContent: BodyInit | null = null;

    // Handle file or array of files
    const formData = new FormData();
    if (Array.isArray(body)) {
      body.forEach((file, index) => formData.append(`file${index}`, file));
    } else {
      formData.append("file", body as File);
    }
    bodyContent = formData;
    console.log({ body });
    const response = await fetch(`http://localhost:4000/v1/${url}`, {
      method,
      headers,
      body: bodyContent,
    });

    const result = await processApiResponse<T>(response);

    return result;
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error;
  }
}

async function processApiResponseEski<T>(
  response: Response
): Promise<ApiResponse<T>> {
  const result = await response.json();
  if (response.ok) {
    return result as ApiSuccessResponse<T>;
  } else {
    return result as ApiErrorResponse;
  }
}

async function processApiResponse<T>(
  response: Response
): Promise<ApiResponse<T>> {
  if (response.ok) {
    // Attempt to parse JSON if present, otherwise return an empty response
    const text = await response.text();
    if (text) {
      try {
        return JSON.parse(text) as ApiSuccessResponse<T>;
      } catch (error) {
        console.error("Error parsing JSON:", error);
        throw new Error("Invalid JSON response from server.");
      }
    } else {
      return {
        message: "No content",
        data: null,
      } as ApiSuccessResponse<T>;
    }
  } else {
    // Handle error responses as JSON if available
    const errorText = await response.text();
    try {
      const errorJson = errorText ? JSON.parse(errorText) : {};
      return { success: false, ...errorJson } as ApiErrorResponse;
    } catch (e) {
      return { errorMessage: errorText || "Unknown error" } as ApiErrorResponse;
    }
  }
}
