const WhatsappWidget = () => {
  const isAndroid = navigator.userAgent.toLowerCase().indexOf("android") !== -1;
  const phone_no = "905326551498"; //"905070478291";

  return (
    <a
      href="https://wa.me/905070478291?text=Send20%a20%quote" // Replace with your WhatsApp number
      className="whatsapp-widget"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
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
        src="/assets/imgs/whatsapp-icon.png" // Add your WhatsApp icon to public/images/
        alt="WhatsApp Chat"
        width={60}
        height={60}
      />
    </a>
  );
};
export default WhatsappWidget;
