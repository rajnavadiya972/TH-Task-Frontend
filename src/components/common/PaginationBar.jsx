import React from "react";
import Pagination from "@mui/material/Pagination";

const PaginationBar = ({count,onChange,defaultPage,className}) => {
  return <Pagination className={className} count={count} onChange={onChange} defaultPage={defaultPage} color="primary" />;
};

export default PaginationBar;
