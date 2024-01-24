import React from "react";
import Pagination from "@mui/material/Pagination";

const PaginationBar = ({count,onChange,defaultPage}) => {
  return <Pagination count={count} onChange={onChange} defaultPage={defaultPage} color="primary" />;
};

export default PaginationBar;
