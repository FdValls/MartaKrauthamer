import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import AssignmentIcon from "@mui/icons-material/Assignment";
import styles from "./Listado.module.css";
import Accordion from "../components/utils/Accordion";
export default function Listado() {
  const data = useContext(DataContext);

  if (!data || !data.items) {
    return <p>Loading...</p>;
  }

  return (
    <section id="Ejercicio profesional">
      <article
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={styles.container}>
          <AssignmentIcon style={{ fontSize: "28px" }} />
          <h2
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "28px",
              textAlign: "start",
              padding: "20px",
            }}
          >
            Ejercicio profesional
          </h2>
        </div>
        <Accordion />
      </article>
    </section>
  );
}
