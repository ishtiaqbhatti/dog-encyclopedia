import React from "react";
import LoveIcon from "@material-ui/icons/Favorite";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Made with{" "}
        <span style={{ marginTop: "100px" }}>
          <LoveIcon style={{ fill: "black", marginTop: "10px" }} />{" "}
        </span>{" "}
        by <span>Ishtiaq Bhatti</span>
      </p>
    </footer>
  );
};

export default Footer;
