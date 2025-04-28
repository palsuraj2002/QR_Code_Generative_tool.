import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgba(238, 238, 238, 0.84)",
        color: "#333",
        padding: "20px",
        textAlign: "center",
        position: "fixed", // To keep it at the bottom
        bottom: "0",
        left: "0",
        width: "100%",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Toolbox.com By Suraj Pal | Made with
        ❤️{" "}
      </p>
    </footer>
  );
};

export default Footer;
