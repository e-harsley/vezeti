import React from "react";

const Photo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/photo.png"
      {...props}
      style={{ width: "70px" }}
    />
  );
};

export default Photo;
