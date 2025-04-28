import React from "react";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "rgb(255,100,30)",
        color: "white",
        padding: "1em",
        textAlign: "center",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
      }}
    >
      <img
        src={
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.I_R7FabUQyXetdCwfnTE2QHaGC%3Fpid%3DApi&f=1&ipt=c2395f84410b2d0a6bffccc96680c52eab45f0e9d810d03f30508b7b1bc4885b&ipo=images"
        }
        alt="QR Code Generator Logo"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center", 
          gap: "1em",
          width: "60px",
          borderRadius: "10px",
        }}
      />
    </header>
  );
};

export default Header;
