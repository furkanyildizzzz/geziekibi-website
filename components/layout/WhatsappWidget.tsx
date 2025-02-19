import { useEffect, useState } from "react";

const WhatsappWidget = () => {
  const [isAndroid, setIsAndroid] = useState(false);
  const phone_no = "905326551498";

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsAndroid(navigator.userAgent.toLowerCase().includes("android"));
    }
  }, []);

  return (
    <a
      href={`https://wa.me/${phone_no}?text=Send20%a20%quote`}
      className="whatsapp-widget"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault(); // Prevent default link behavior
        if (!isAndroid) {
          window.open(`https://web.whatsapp.com/send?phone=${phone_no}`);
        } else {
          window.open(
            `https://api.whatsapp.com/send/?phone=${phone_no}&text=Send20%a20%quote&type=phone_number&app_absent=0`
          );
        }
      }}
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
