import { ErrorValidation } from "@/types/ApiResponseType";
import { toast } from "react-toastify";

const ShowValidationError = (errorsValidation: ErrorValidation[]) => {
  // Check if there are any validation errors
  if (errorsValidation && errorsValidation.length > 0) {
    // Display each validation error as a separate toast
    errorsValidation.forEach((error: ErrorValidation) => {
      // Since error is an object with key-value pairs, extract the key and message
      const [field, message] = Object.entries(error)[0];
      toast.error(message, {
        // position: "top-right",
        autoClose: 5000, // 5 seconds delay before redirect
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    });
  }
};

export default ShowValidationError;
