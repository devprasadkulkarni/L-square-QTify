import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import styles from "./Button.module.css";

const ButtonMui = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Button
        className={styles.font}
        variant="contained"
        sx={{
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.main,
        }}
      >
        Give Feedback
      </Button>
    </Box>
  );
};

export default ButtonMui;
