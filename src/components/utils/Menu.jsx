/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
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
              position: "fixed",
              top: "20px",
              left: "50%",
              color: "black",
              transform: "translateX(-50%)",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              zIndex: 1000, //
              transition: "background-color 0.3s ease, color 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 1)",
                color: "black",
              },
              pointerEvents: "auto",
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
                onNavigate("Soluciones centradas en empresas y personas");
                popupState.close();
              }}
            >
              Soluciones centradas en empresas y personas
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
