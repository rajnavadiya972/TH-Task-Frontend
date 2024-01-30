import TextField from "@mui/material/TextField";

const Input = ({ error, label, type, onChange, name, placeholder, value, onBlur, helperText }) => {
  return (
    <>
      <TextField
        helperText={helperText}
        error={error}
        id="outlined-password-input"
        name={name}
        label={label}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
};

export default Input;
