import React from "react";

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/logo.png"
      {...props}
      style={{ width: "70px" }}
    />
  );
};

export default Logo;
