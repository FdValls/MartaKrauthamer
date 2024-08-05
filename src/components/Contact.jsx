import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./Contact.module.css";
import EmailIcon from "@mui/icons-material/Email";
import SnackbarManager from "../Handler/Snackhandler";
import { sendEmail } from "../api/Emails.jsx";
export default function Contact() {
  // const [submitted, setSubmitted] = useState(false);
  const [getCaptcha, setGetCaptcha] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState("");
  const [mensaje, setMensaje] = useState("");
  const recaptchaRef = useRef(null);

  const handleSnackbarClose = () => {
    setOpenSnackbar("");
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCaptchaChange = (value) => {
    setGetCaptcha(value);
  };

  const reset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      role: "",
      message: "",
    });

    recaptchaRef.current.reset();

    // window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      setMensaje("Por favor completar el nombre completo");
      setOpenSnackbar("warning");
      return;
    }
    if (!formData.email) {
      setMensaje("Por favor completar el email");
      setOpenSnackbar("warning");
      return;
    }
    if (!formData.company) {
      setMensaje("Por favor completar el nombre de la empresa");
      setOpenSnackbar("warning");
      return;
    }
    if (!formData.role) {
      setMensaje("Por favor completar el rol");
      setOpenSnackbar("warning");
      return;
    }
    if (!formData.message) {
      setMensaje("Por favor completar el la consulta");
      setOpenSnackbar("warning");
      return;
    }

    if (!getCaptcha) {
      setMensaje("Por favor, verifica el captcha");
      setOpenSnackbar("error");
      return;
    }

    try {
      await sendEmail(formData);
      // await sendEmailResend(formData);
      setMensaje("Formulario enviado con éxito");
      setOpenSnackbar("success");
      reset();
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <section style={{ textAlign: "-webkit-center" }}>
      <div
        className="formatoContacto"
        style={{ maxWidth: "400px", padding: "40px" }}
      >
        <div className={styles.tittle}>
          <EmailIcon />
          <h2 style={{ fontSize: "28px" }} id="contacto">
            Contacto
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              marginBottom: "10px",
            }}
          >
            <label>Nombre y Apellido:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                color: "black",
                backgroundColor: "cornsilk",
              }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                color: "black",
                backgroundColor: "cornsilk",
              }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Telefono (opcional):</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                color: "black",
                backgroundColor: "cornsilk",
              }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Empresa:</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                color: "black",
                backgroundColor: "cornsilk",
              }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Rol:</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                color: "black",
                backgroundColor: "cornsilk",
              }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Consulta:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                height: "120px",
                color: "black",
                backgroundColor: "cornsilk",
              }}
            />
          </div>
          <ReCAPTCHA
            ref={recaptchaRef}
            style={{ textAlign: "-webkit-center" }}
            sitekey={import.meta.env.VITE_SITE_KEY_RECAPTCHA}
            onChange={handleCaptchaChange}
          />
          <br />
          <div style={{ textAlign: "center" }}>
            <button
              id="btn"
              className={styles.send}
              type="submit"
              style={{ padding: "10px 20px" }}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <SnackbarManager
        openSnackbar={openSnackbar}
        handleClose={handleSnackbarClose}
        msg={mensaje}
      />
    </section>
  );
}
