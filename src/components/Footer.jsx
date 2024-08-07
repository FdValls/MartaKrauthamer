import { MDBFooter } from "mdb-react-ui-kit";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

export default function App() {
  const data = useContext(DataContext);

  if (!data || !data.items) {
    return <p>Loading...</p>;
  }

  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <div
        className="text-center p-3"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          fontSize: "19px",
          height: "60px",
          placeContent: "center",
        }}
      >
        &copy; {new Date().getFullYear()} Desing:{" "}
        <a className="text-dark">{data.footer.name}</a>
      </div>
    </MDBFooter>
  );
}
