import React from "react";
import LongDay from "../../Videos/LongDaySR.mp4";
import CodeCard from "../../Videos/CodeCareSR.mp4";
import Remember from "../../Videos/RememberSR.mp4";
import Button from "@material-ui/core/Button";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";

import "./Projects.css";

function Projects() {
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
      <div className="project-container-container">
        <h1 className="project-title"> Projects</h1>
        <div className="project-container">
          <div>
            <h2 className="project-title">Code.Cards</h2>
            <p>
              Code.Cards is designed to create a resource for new developers to
              study and solidify important methods, definitions and concepts.
              Users can view existing cards other developers have made. Users
              can also create their own cards. This was built using airtable as
              the backend API and react for the front end. I utilized figma for
              my wireframes. My styling was done using solely CSS.
            </p>
          </div>
          <div className="left">
            <video className="project-videos" controls muted>
              <source src={CodeCard} type="video/mp4" />
            </video>
            <div className="buttons">
              <div className="button-space">
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/nikkiicole/Code.Cards"
                >
                  <Button
                    className="home-button"
                    size="large"
                    variant="contained"
                    color="default"
                    startIcon={<GitHubIcon />}
                    type="submit"
                  >
                    Github
                  </Button>
                </a>
              </div>
              <div className="button-space">
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://codecards.netlify.app/"
                >
                  <Button
                    className="home-button"
                    size="large"
                    variant="contained"
                    color="default"
                    startIcon={<WebIcon />}
                    type="submit"
                  >
                    Project
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project-container">
          <div>
            <h2 className="project-title">Remember</h2>
            <p>
              Remember is an app for anyone who may have lost a loved one and is
              looking for a way to keep a digital memory of them including
              contributions from family members and friends. Remember allows
              users to add photos and memories to a loved one's profile.
              Remember is built using React for the Frontend and Ruby on Rails
              for the backend with full authentication using devise. I included
              AWS for image uploading. For styling I used a mixture of Material
              UI and CSS.
            </p>
          </div>
          <div className="left">
            <video className="project-videos" controls muted>
              <source src={Remember} type="video/mp4" />
            </video>
            <div className="buttons">
              <div className="button-space">
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/nikkiicole/Remember_App"
                >
                  <Button
                    className="home-button"
                    size="large"
                    variant="contained"
                    color="default"
                    startIcon={<GitHubIcon />}
                    type="submit"
                  >
                    Github
                  </Button>
                </a>
              </div>
              <div className="button-space">
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://always-remember.netlify.app/"
                >
                  <Button
                    className="home-button"
                    size="large"
                    variant="contained"
                    color="default"
                    startIcon={<WebIcon />}
                    type="submit"
                  >
                    Project
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project-container">
          <div>
            <h2 className="project-title">LongDay</h2>
            <p>
              LongDay is a random drink recipe generator and a random advice
              slip generator. The user can either select to get a random
              cocktail recipe, random advice or both. There is functionality to
              search cocktails by name if the user doesn't like the random
              option. LongDay was built with a third party API called the
              cocktail db. The front end is designed with Javascript. I used
              solely CSS to style the application
            </p>
          </div>
          <div className="left">
            <video className="project-videos" controls muted>
              <source src={LongDay} type="video/mp4" />
            </video>
            <div className="buttons">
              <div className="button-space">
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/nikkiicole/Long-Day"
                >
                  <Button
                    className="home-button"
                    size="large"
                    variant="contained"
                    color="default"
                    startIcon={<GitHubIcon />}
                    type="submit"
                  >
                    Github
                  </Button>
                </a>
              </div>
              <div className="button-space">
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://long-day.surge.sh/"
                >
                  <Button
                    className="home-button"
                    size="large"
                    variant="contained"
                    color="default"
                    startIcon={<WebIcon />}
                    type="submit"
                  >
                    Project
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Projects;
