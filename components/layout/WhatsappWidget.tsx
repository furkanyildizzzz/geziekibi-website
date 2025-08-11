// import { useEffect, useState } from "react";

// const WhatsappWidget = ({ isMobileMenu }: any) => {
//   const [isAndroid, setIsAndroid] = useState(false);
//   const phone_no = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "905422924444"; // Fallback number

//   useEffect(() => {
//     if (typeof navigator !== "undefined") {
//       setIsAndroid(navigator.userAgent.toLowerCase().includes("android"));
//     }
//   }, []);

//   return (
//     <a
//       href={`https://wa.me/${phone_no}?text=Send%20a%20quote`}
//       className="whatsapp-widget"
//       target="_blank"
//       rel="noopener noreferrer"
//       onClick={(e) => {
//         e.preventDefault(); // Prevent default link behavior
//         if (!isAndroid) {
//           window.open(`https://web.whatsapp.com/send?phone=${phone_no}`);
//         } else {
//           window.open(
//             `https://api.whatsapp.com/send/?phone=${phone_no}&text=Send%20a%20quote&type=phone_number&app_absent=0`
//           );
//         }
//       }}
//     >
//       <img
//         src="/assets/imgs/whatsapp-icon.png"
//         alt="WhatsApp Chat"
//         width={60}
//         height={60}
//       />
//     </a>
//   );
// };

// export default WhatsappWidget;

import { useEffect, useState } from "react";

const WhatsappWidget = ({ isMobileMenu }: any) => {
  const [isMobile, setIsMobile] = useState(false);
  const phone_no = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "905422924444";

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const userAgent =
        navigator.userAgent || navigator.vendor || (window as any).opera;
      setIsMobile(
        /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(userAgent)
      );
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const message = encodeURIComponent("");
    const mobileUrl = `https://api.whatsapp.com/send?phone=${phone_no}&text=${message}`;
    const desktopUrl = `https://web.whatsapp.com/send?phone=${phone_no}&text=${message}`;

    if (isMobile) {
      window.open(mobileUrl, "_blank");
    } else {
      window.open(desktopUrl, "_blank");
    }
  };

  return (
    <a
      href={`https://wa.me/${phone_no}`}
      className="whatsapp-widget"
      onClick={handleClick}
      rel="noopener noreferrer"
    >
      <img
        src="/assets/imgs/whatsapp-icon.png"
        alt="WhatsApp Chat"
        width={60}
        height={60}
      />
    </a>
  );
};

export default WhatsappWidget;
