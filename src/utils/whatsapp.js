export const whatsappData = () => {
  var phoneNumber = "7899148582"; // Replace with the phone number
  var message = "Hello, this is a test message."; // Optional message

  var whatsappUrl =
    "https://api.whatsapp.com/send?phone=" +
    phoneNumber +
    "&text=" +
    encodeURIComponent(message);

  window.location.href = whatsappUrl;
};
