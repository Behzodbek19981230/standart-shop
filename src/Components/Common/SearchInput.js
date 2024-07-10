import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  InputGroupText,
} from "reactstrap";

function SearchInput() {
  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <InputGroup>
        <Input
          placeholder="Search for Standards..."
          style={{
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "25px",
            borderTopRightRadius: "25px",
            borderBottomRightRadius: "25px",
            paddingRight: "40px", // Extra padding to ensure text doesn't overlap the icon
          }}
        />
        <InputGroupText
          style={{
            backgroundColor: "#cce8e4",
            borderTopRightRadius: "25px",
            borderBottomRightRadius: "25px",
            border: "none",
            padding: "0.375rem 0.75rem",
          }}
        >
          <i data-feather="search"></i>{" "}
        </InputGroupText>
      </InputGroup>
      <a href="#" style={{ float: "right", marginTop: "10px" }}>
        Advanced Search
      </a>
    </div>
  );
}

export default SearchInput;
