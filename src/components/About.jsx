import "./About.css";
// import { useContext, useEffect, useState } from "react";
// import { DataContext } from "../Context/DataContext";
import imagen from "../images/fotomarta.jpeg";

export default function About() {
  // const data = useContext(DataContext);
  // const [imagen, setImagen] = useState("");

  // useEffect(() => {
  //   if (data) {
  //     setImagen(`/images/${data.main.image}`);
  //   }
  // }, [data]);

  // console.log("imagen", imagen);

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <section id="about" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={imagen} alt="perfil" />
          </div>
          <div>
            <h2 className="hover-effect">Marta Krauthamer </h2>
          </div>
          <div className="formatoPerfil">
            <p>
              Lic. En Psicología de la UBA con Postgrado en Psicología Laboral
              (APBA). Consultora especializada en Outplacement, Coaching
              Ejecutivo y Transiciones de Carrera. Especialista en Técnicas de
              Evaluación, programas de Orientación Vocacional y Salud Laboral.
              Psicoterapia para adultos. Orientada a brindar servicios
              personalizados y de calidad para impulsar el crecimiento y el
              desarrollo de las organizaciones y las personas. He participado en
              proyectos de evaluación y desarrollo del capital humano en
              Argentina, Uruguay y Brasil. Escribí diversos artículos referidos
              a los temas propios a mi área de expertise. Todos los procesos se
              pueden realizar en modalidad virtual o presencial.
            </p>
            <div className="row"></div>
          </div>
        </div>
      </section>
    </>
  );
}
