import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Dropdown = ({ onChange, value }) => {
  return (
    <Select
      labelId="demo-simple-select-helper-label"
      className="my-2 px-20 text-blue-700"
      id="demo-simple-select-helper"
      value={value}
      onChange={onChange}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  );
};

export default Dropdown;
