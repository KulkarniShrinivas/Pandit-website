export const whatsappData = () => {
<<<<<<< HEAD
  var phoneNumber = "7982103213"; // Replace with the phone number

  var whatsappUrl = "https://api.whatsapp.com/send?phone=" + phoneNumber;
=======
  const phoneNumber = "7899148582"; // Replace with the phone number
  const message = "Hello, this is a test message."; // Optional message

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
>>>>>>> 65b0304123b2ac8fc2ed5f2c562a14108299bde4

  window.location.href = whatsappUrl;
};
