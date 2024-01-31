import Button from "@mui/material/Button";

const CustomButton = ({ children, type, onClick }) => {
  return (
    <Button variant="contained" type={type} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
