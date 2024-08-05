import emailjs from "emailjs-com";

export function sendEmail(formData) {
  return emailjs.send(
    import.meta.env.VITE_ID_SERVICE, // Reemplaza con tu ID de servicio
    import.meta.env.VITE_ID_TEMPLATE, // Reemplaza con tu ID de plantilla
    formData,
    import.meta.env.VITE_USER_KEY // Reemplaza con tu API key o User ID
  );
}
