import { toast } from "react-toastify";

const ShowError = (message: string) => {
  toast.error(message, {
    // position: "top-right",
    autoClose: 2000, // 5 seconds delay before redirect
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export default ShowError;
