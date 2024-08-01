import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      style={{
        width: "65%",
        padding: "20px",
      }}
    >
      <Accordion
        sx={{
          color: "black",
          background: "radial-gradient(cornsilk, transparent)",
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            justifyContent: "center", // Centrar horizontalmente el contenido
            "& .MuiAccordionSummary-content": {
              justifyContent: "center", // Asegurar que el contenido interno esté centrado
            },
          }}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              color: "black",
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "22px",
              transition: "transform 0.3s ease, text-shadow 0.3s ease", // Suavizar la transición
              "&:hover": {
                transform: "scale(1.1)", // Aumentar tamaño al pasar el mouse
                textShadow: "0 0 10px rgba(255, 255, 255, 0.8)", // Sombra blanca sutil
              },
            }}
          >
            Outplacement
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "19px",
            }}
          >
            En un contexto empresarial cambiante como el actual, en donde las
            fusiones y reestructuraciones pueden exigir desvinculaciones, el
            programa de outplacement “humaniza” estos procesos minimizando el
            impacto psicológico producido por la pérdida del trabajo y ayuda a
            las personas a reorientar su carrera rápidamente y en las mejores
            condiciones posibles. Asimismo cuida la marca empresaria y preserva
            el compromiso de quienes continúan en la organización.El proceso
            consta de un conjunto de estrategias y técnicas que facilitan la
            reinserción de quienes son desvinculados de la empresa. Ofrece el
            asesoramiento, la formación y los medios necesarios para la nueva
            transición de carrera. Puede ser individual o grupal y finaliza
            cuando el candidato alcanza su recolocación.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          color: "black",
          background: "radial-gradient(cornsilk, transparent)",
        }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{
            justifyContent: "center", // Centrar horizontalmente el contenido
            "& .MuiAccordionSummary-content": {
              justifyContent: "center", // Asegurar que el contenido interno esté centrado
            },
          }}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "22px",
              transition: "transform 0.3s ease, text-shadow 0.3s ease", // Suavizar la transición
              "&:hover": {
                transform: "scale(1.1)", // Aumentar tamaño al pasar el mouse
                textShadow: "0 0 10px rgba(255, 255, 255, 0.8)", // Sombra blanca sutil
              },
            }}
          >
            Coaching
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "19px",
            }}
          >
            Este programa está diseñado para maximizar el desempeño de
            participante mediante el desarrollo de sus habilidades y
            competencias. A través de encuentros individuales se trabaja para
            identificar áreas de mejora, establecer metas claras y fomentar un
            crecimiento personal y profesional que sea sostenible en el tiempo.
            El objetivo es ayudar a las personas a comprender qué deben cambiar
            para alcanzar sus metas.El programa cuenta con una duración
            determinada y se tratan cuestiones específicas destinadas a
            facilitar la transformación personal. El coaching indaga en el
            presente para orientarse luego hacia el futuro.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          color: "black",
          background: "radial-gradient(cornsilk, transparent)",
        }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          sx={{
            justifyContent: "center", // Centrar horizontalmente el contenido
            "& .MuiAccordionSummary-content": {
              justifyContent: "center", // Asegurar que el contenido interno esté centrado
            },
          }}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "22px",
              transition: "transform 0.3s ease, text-shadow 0.3s ease", // Suavizar la transición
              "&:hover": {
                transform: "scale(1.1)", // Aumentar tamaño al pasar el mouse
                textShadow: "0 0 10px rgba(255, 255, 255, 0.8)", // Sombra blanca sutil
              },
            }}
          >
            Programa de Retiro
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "19px",
            }}
          >
            Este programa invita a las personas en situación de “retiro laboral”
            a afrontar la nueva realidad como una oportunidad de cambio y
            crecimiento.Su objetivo es ofrecer una salida cuidada contribuyendo
            en el armado de un proyecto personal que sea afín a sus intereses,
            capacidades y experiencia. Se buscan vocaciones dormidas,
            aprendizajes postergados y todo lo que pueda contribuir a la
            reconversión de la identidad y la autoestima. Se preserva un rol
            activo buscando actividades/proyectos que necesiten de los
            conocimientos y habilidades de la persona y que a su vez estén en
            sintonía con su situación presente.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          color: "black",
          background: "radial-gradient(cornsilk, transparent)",
        }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{
            justifyContent: "center", // Centrar horizontalmente el contenido
            "& .MuiAccordionSummary-content": {
              justifyContent: "center", // Asegurar que el contenido interno esté centrado
            },
          }}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "22px",
              transition: "transform 0.3s ease, text-shadow 0.3s ease", // Suavizar la transición
              "&:hover": {
                transform: "scale(1.1)", // Aumentar tamaño al pasar el mouse
                textShadow: "0 0 10px rgba(255, 255, 255, 0.8)", // Sombra blanca sutil
              },
            }}
          >
            Evaluaciones psicotécnicas y de potencial
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "19px",
            }}
          >
            Mediante una amplia gama de técnicas de evaluación se identifica la
            presencia y el nivel de desarrollo de las habilidades, competencias
            y aptitudes de los candidatos respecto de los requerimientos del
            puesto. El análisis posterior de la información obtenida permite
            tomar decisiones basadas en información objetiva así como también
            efectuar hipótesis sobre comportamientos y desempeño futuros.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          color: "black",
          background: "radial-gradient(cornsilk, transparent)",
        }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{
            justifyContent: "center", // Centrar horizontalmente el contenido
            "& .MuiAccordionSummary-content": {
              justifyContent: "center", // Asegurar que el contenido interno esté centrado
            },
          }}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "22px",
              transition: "transform 0.3s ease, text-shadow 0.3s ease", // Suavizar la transición
              "&:hover": {
                transform: "scale(1.1)", // Aumentar tamaño al pasar el mouse
                textShadow: "0 0 10px rgba(255, 255, 255, 0.8)", // Sombra blanca sutil
              },
            }}
          >
            Orientación Vocacional
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "19px",
            }}
          >
            Es un servicio orientado a jóvenes para descubrir y desarrollar su
            camino profesional ideal. Mediante ejercicios y pruebas
            especialmente diseñados se los ayuda a profundizar en su
            autoconocimiento, explorar intereses, valores, oferta del mercado
            para poder tomar una decisión bien informada sobre su plan de
            carrera
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          color: "black",
          background: "radial-gradient(cornsilk, transparent)",
        }}
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel6bh-header"
          sx={{
            justifyContent: "center", // Centrar horizontalmente el contenido
            "& .MuiAccordionSummary-content": {
              justifyContent: "center", // Asegurar que el contenido interno esté centrado
            },
          }}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontSize: "22px",
              transition: "transform 0.3s ease, text-shadow 0.3s ease", // Suavizar la transición
              "&:hover": {
                transform: "scale(1.1)", // Aumentar tamaño al pasar el mouse
                textShadow: "0 0 10px rgba(255, 255, 255, 0.8)", // Sombra blanca sutil
              },
            }}
          >
            Psicoterapia Individual
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "19px",
            }}
          >
            Un espacio interpersonal de escucha y empatía destinado a mejorar la
            calidad de vida de las personas, con un enfoque personalizado y
            adecuado a las necesidades individuales.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
