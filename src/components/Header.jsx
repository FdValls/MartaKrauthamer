import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

export default function Header() {
  const data = useContext(DataContext);

  if (!data || !data.items) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <header id="home" style={{ position: "relative", overflow: "hidden" }}>
        <div>
          <div>
            <h1 className="responsive-headline">{data.main.name}</h1>
            <h3>{data.main.description}.</h3>
            <hr />
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </div>
      </header>
    </section>
  );
}
