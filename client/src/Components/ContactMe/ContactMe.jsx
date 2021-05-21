import React from "react";
import "./ContactMe.css";

function ContactMe() {
  return (
    <div className="abstract">
      <h1>Impressed? Hire Me. Let's Talk. </h1>
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
