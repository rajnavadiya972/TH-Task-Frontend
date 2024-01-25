import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Dropdown = ({ onChange, value, className }) => {
  return (
    <Select
      labelId="demo-simple-select-helper-label"
      className={`my-2 text-blue-700 w-30 h-12 justify-center ${className}`}
      id="demo-simple-select-helper"
      value={value}
      onChange={onChange}
    >
      <MenuItem value={10}>10/Page</MenuItem>
      <MenuItem value={20}>20/Page</MenuItem>
      <MenuItem value={30}>30/Page</MenuItem>
    </Select>
  );
};

export default Dropdown;
