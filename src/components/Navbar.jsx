import Person2Icon from "@mui/icons-material/Person2";
import EmailIcon from "@mui/icons-material/Email";
import AssignmentIcon from "@mui/icons-material/Assignment";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuPopupState from "../components/utils/Menu";

const pillTabs = [
  "Acerca de Mi",
  "Soluciones centradas en empresas y personas",
  "Contacto",
];

const PillTabs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Ajusta el breakpoint según sea necesario

  const handleNavigation = (id) => {
    switch (id) {
      case "acerca-de-mi":
        id = "about";
        break;
      case "soluciones-centradas-en-empresas-y-personas":
        id = "Ejercicio profesional";
        break;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with ID '${id}' not found.`);
    }
  };

  if (isMobile) {
    return (
      <MenuPopupState
        onNavigate={(id) => {
          const adjustedId = id.replace(/\s+/g, "-").toLowerCase();
          handleNavigation(adjustedId);
        }}
      />
    );
  }

  const tabsComponents = pillTabs.map((text, i) => {
    const id = text.replace(/\s+/g, "-").toLowerCase();
    return (
      <>
        <button
          key={text}
          onMouseEnter={() => setHoveredIndex(i)}
          onClick={() => handleNavigation(id)}
          style={{
            position: "relative",
            padding: "0.65rem 0.75rem",
            background: "white",
            color: "black",
            border: 0,
            borderRadius: "999px",
            display: "flex",
            flexDirection: "row",
            gap: "5px",
          }}
        >
          {hoveredIndex === i && (
            <MagicTabSelect
              id="pillTabs"
              transition={{ type: "spring", bounce: 0.35 }}
            >
              <span
                style={{
                  borderRadius: "999px",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 10,
                  background: "white",
                  mixBlendMode: "difference",
                }}
              />
            </MagicTabSelect>
          )}
          {i === 0 && <AssignmentIcon />}
          {i === 1 && <Person2Icon />}
          {i === 2 && <EmailIcon />}
          {text}
        </button>
      </>
    );
  });

  return <div className={styles.navbar}>{tabsComponents}</div>;
};

export default PillTabs;
