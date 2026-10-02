import { Alert } from "@mui/material";

const ErrorMessage = ({ message }) => {
  return (
    <Alert severity="error" sx={{ mt: 4 }}>
      {message}
    </Alert>
  );
};

export default ErrorMessage;