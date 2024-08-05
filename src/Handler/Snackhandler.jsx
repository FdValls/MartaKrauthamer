/* eslint-disable react/prop-types */
import CustomSnackbar from "../components/utils/Snackbar.jsx";

function SnackbarManager({ openSnackbar, handleClose, msg }) {
  const snackbarConfig = {
    warning: {
      message: msg,
      severity: "warning",
      duration: 3000,
    },
    error: {
      message: msg,
      severity: "error",
      duration: 3000,
    },
    success: {
      message: msg,
      severity: "success",
      duration: 4000,
    },
  };

  if (!openSnackbar) return null;

  return (
    <CustomSnackbar
      open={!!openSnackbar}
      onClose={handleClose}
      message={snackbarConfig[openSnackbar].message}
      severity={snackbarConfig[openSnackbar].severity}
      duration={snackbarConfig[openSnackbar].duration}
    />
  );
}

export default SnackbarManager;
