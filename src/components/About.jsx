import "./About.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataContext";

export default function About() {
  const data = useContext(DataContext);
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    if (data) {
      setImagen(`/images/${data.main.image}`);
    }
  }, [data]);

  console.log("imagen", imagen);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section id="about" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={imagen} alt="perfil" />
          </div>
          <div>
            <h2 className="hover-effect">{data.main.name}</h2>
          </div>
          <div className="formatoPerfil">
            <p>{data.main.bio}</p>
            <div className="row"></div>
          </div>
        </div>
      </section>
    </>
  );
}
