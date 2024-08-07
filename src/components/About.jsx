import "./About.css";
import { useContext } from "react";
import SizeAvatars from "./utils/Avatar";
import { DataContext } from "../Context/DataContext";

export default function About() {
  const data = useContext(DataContext);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section id="about" style={{ marginTop: "70px" }}>
        <div className="row">
          <div style={{ textAlign: "-webkit-center" }}>
            <SizeAvatars />
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
