import React from "react";
import Button from "@mui/material/Button";

const ButtonComponent = ({ children, type, onClick }) => {
  return (
    <>
      <Button variant="contained" type={type} onClick={onClick}>
        {children}
      </Button>
    </>
  );
};
export default ButtonComponent;
