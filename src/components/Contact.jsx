import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./Contact.module.css";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  //USAR useRef para el CATPCHA
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [getCaptcha, setGetCaptcha] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setGetCaptcha(value);
    console.log("Usuario verificado");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getCaptcha) {
      console.log("Captcha verificado");
      console.log(formData);
      setSubmitted(true);
    } else {
      alert("Por favor, verifica el captcha");
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
        {submitted ? (
          <div style={{ textAlign: "center", color: "green" }}>
            ¡Formulario enviado con éxito!
          </div>
        ) : (
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
            {/* <ReCAPTCHA
              style={{ textAlign: "-webkit-center" }}
              sitekey="6LcNdhoqAAAAAGU3D3a-mz9adHYvK_ojpmjMbUto"
              onChange={handleCaptchaChange}
            /> */}
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
        )}
      </div>
    </section>
  );
}
