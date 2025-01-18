import { toast } from "react-toastify";

const ShowSuccess = (message: string) => {
  toast.success(message, {
    // position: "top-right",
    autoClose: 2000, // 5 seconds delay before redirect
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export default ShowSuccess;
