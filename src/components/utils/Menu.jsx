/* eslint-disable react/prop-types */
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const MenuPopupState = ({ onNavigate }) => {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <section>
          <Button
            variant="contained"
            {...bindTrigger(popupState)}
            sx={{
              position: "fixed", // Fijar el botón para que siempre esté visible
              top: "20px", // Posicionarlo a 20px del borde superior
              left: "50%", // Centrar horizontalmente
              color: "black",
              transform: "translateX(-50%)", // Ajustar la posición para centrarlo
              backgroundColor: "rgba(255, 255, 255, 0.8)", // Fondo claro con transparencia
              zIndex: 1000, // Asegurarse de que esté sobre otros elementos
              transition: "background-color 0.3s ease, color 0.3s ease", // Suavizar la transición de color
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 1)", // Fondo sólido al pasar el mouse
                color: "black", // Cambiar el color del texto al pasar el mouse
              },
              pointerEvents: "auto", // Asegura que el botón sea clicable en todo momento
            }}
          >
            Menu
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              onClick={() => {
                onNavigate("about");
                popupState.close();
              }}
            >
              Acerca de mi
            </MenuItem>
            <MenuItem
              onClick={() => {
                onNavigate("ejercicio-profesional");
                popupState.close();
              }}
            >
              Ejercicio Profesional
            </MenuItem>
            <MenuItem
              onClick={() => {
                onNavigate("contacto");
                popupState.close();
              }}
            >
              Contacto
            </MenuItem>
          </Menu>
        </section>
      )}
    </PopupState>
  );
};

export default MenuPopupState;
