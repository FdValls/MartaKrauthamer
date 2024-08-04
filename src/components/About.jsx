import "./About.css";
import SizeAvatars from "./utils/Avatar";

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
          <div style={{ textAlign: "-webkit-center" }}>
            <SizeAvatars />
          </div>
          <div>
            <h2 className="hover-effect">Marta Krauthamer </h2>
          </div>
          <div className="formatoPerfil">
            <p>
              Lic. En Psicología de la UBA con Postgrado en Psicología Laboral
              (APBA). Formación en Coaching Ejecutivo. Orientada a brindar
              servicios personalizados y de calidad para impulsar el crecimiento
              y el desarrollo de las organizaciones y las personas. Todos los
              procesos se pueden realizar en modalidad virtual o presencial.
            </p>
            <div className="row"></div>
          </div>
        </div>
      </section>
    </>
  );
}
