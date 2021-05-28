import React from "react";
import "./ContactMe.css";
import GetAppIcon from "@material-ui/icons/GetApp";
import Button from "@material-ui/core/Button";

function ContactMe() {
  return (
    <div className="abstract">
      <h1 className="project-title">Impressed? Hire Me. Let's Talk. </h1>
      <a
        className="link"
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/file/d/1-Tqk0y4pZmmaq5G6_rrCINjSEpAt1O-r/view?usp=sharing"
      >
        <Button
          className="home-button"
          size="large"
          variant="contained"
          color="default"
          startIcon={<GetAppIcon />}
          type="submit"
        >
          Download My Resume
        </Button>
      </a>
      <footer className="Footer-Container">
        <div>
          <h2>Email Me! </h2>
          <a
            className="Email"
            href="mailto: niikkicodes@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dbmxg3su8/image/upload/v1621593030/Screen_Shot_2021-05-21_at_6.30.10_AM_ie2g2t.png"
              alt="Github Logo"
              height="120"
              width="120"
            ></img>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default ContactMe;
