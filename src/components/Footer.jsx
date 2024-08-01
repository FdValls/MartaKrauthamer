import { MDBFooter } from "mdb-react-ui-kit";

export default function App() {
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
        <a className="text-dark">Fernando Valls </a>
      </div>
    </MDBFooter>
  );
}
