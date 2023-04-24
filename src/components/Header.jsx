import React from "react";
import "./Header.css";
import HighlightIcon from "@mui/icons-material/Highlight";
const Header = () => {
  return (
    <>
      <h1 className="header">
        <HighlightIcon />
        ToDoList
      </h1>
    </>
  );
};

export default Header;
