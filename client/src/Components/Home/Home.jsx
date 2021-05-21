import React from "react";
import "./Home.css";
import Nature from "../../Videos/new.mp4";
import { Link } from "react-router-dom";
import FaceIcon from "@material-ui/icons/Face";
import Button from "@material-ui/core/Button";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function Home() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#1f7a8c",
      },
      secondary: {
        main: "#1f7a8c",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <video
          className="home-video"
          playsInline
          autoPlay="autoplay"
          muted
          loop="loop"
          poster="https://res.cloudinary.com/dbmxg3su8/image/upload/v1621609706/Screen_Shot_2021-05-21_at_11.06.39_AM_zmggx7.png"
        >
          <source src={Nature} type="video/mp4" />
        </video>
        <header class="viewport-header">
          <div className="background-color">
            <h1 className="greeting">Hello, I'm Nikki Gilpin.</h1>
            <h2 className="greeting-two">
              I'm a full-stack software engineer.{" "}
            </h2>
            <Link className="link" to="/main">
              <Button
                className="home-button"
                startIcon={<FaceIcon />}
                size="large"
                variant="contained"
                color="primary"
                type="submit"
              >
                Learn More About Me!
              </Button>
            </Link>
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default Home;
