import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiAlert: {
      styleOverrides: {
        icon: {
          fontSize: "30px",
        },
      },
    },
  },
});
function CustomSnackbar(props) {
  const { open, onClose, message, severity, duration } = props;

  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={duration}
        onClose={onClose}
      >
        <Alert
          onClose={onClose}
          severity={severity}
          style={{
            width: "400px",
            fontSize: "20px",
            opacity: "1",
            background: "white",
          }}
        >
          {message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default CustomSnackbar;
