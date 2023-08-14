export const whatsappData = () => {
  const phoneNumber = "7899148582"; // Replace with the phone number
  const message = "Hello, this is a test message."; // Optional message

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  window.location.href = whatsappUrl;
};
