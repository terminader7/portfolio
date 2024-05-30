import Head from "next/head";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import InlineContainer from "../components/InlineContainer";
import { useTheme } from "@mui/material";
import MultiColorLine from "../components/MultiColorLine";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProjectContainer from "../components/ProjectContainer";
import CopyrightIcon from "@mui/icons-material/CopyrightRounded";
import emailjs from "emailjs-com";
import ChatBoxContainer from "../features/ChatBox/ChatBoxContainer";
import WorkExperienceContainer from "../features/Work-Experience/WorkExperienceContainer";
import AboutMeContainer from "../features/About-Me/AboutMeContainer";

emailjs.init("36z9_9o_TMkuwi-Jz");

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Head>
        <title>Naders Portfolio</title>
        <meta name="description" content="Nader's Portfolio" />
        <link rel="icon" href="/images/favicon.svg" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box
        sx={{
          width: "100%",
          margin: "auto",
          maxWidth: "1500px",
        }}
      >
        <InlineContainer
          sx={{
            padding: { xs: ".5rem", lg: "1rem" },
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Nader Ebrahim
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "common.white",
              gap: ".5rem",
              fontWeight: "bold",
              height: "2.5rem",
              ":hover": {
                backgroundColor: "primary.blue",
              },
            }}
            onClick={() => {
              window.open("https://github.com/terminader7/portfolio");
            }}
          >
            <GitHubIcon fontSize="large" />
            View the code
          </Button>
        </InlineContainer>
        <MultiColorLine height={"2px"} width={"100%"} />
      </Box>
      <InlineContainer
        sx={{
          justifyContent: { xs: "center", lg: "" },
          gap: { xs: "3rem", lg: "8rem" },
          height: { xs: "100%", lg: "85vh" },
          width: "100%",
          flexDirection: { xs: "column-reverse", lg: "row" },
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1500px",
        }}
      >
        <AboutMeContainer />
        <Box
          sx={{
            width: { xs: "100%", lg: "45%" },
          }}
        >
          <ChatBoxContainer />
        </Box>
      </InlineContainer>
      <WorkExperienceContainer />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1500px",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={600}
          marginBottom=".5rem"
          sx={{ textAlign: { xs: "center", lg: "start" } }}
        >
          Projects
        </Typography>
        <Grid
          container
          spacing={{ xs: 6, lg: 4 }}
          sx={{
            justifyContent: { xs: "center", lg: "start" },
          }}
        >
          <Grid item xs={12} lg={4}>
            <ProjectContainer
              projectImagePath="/images/weather-app.jpg"
              projectImageAlt="Image of weather app"
              projectName="Weather App"
              projectDesc="A simple weather app built using React and the OpenWeatherMap API. 90% complete."
              dateCompleted="2024"
              link="https://weather-app-swart-mu-44.vercel.app/"
              isWiP
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <ProjectContainer
              projectName="Hoops Hoopla"
              projectDesc="Nba stat tracker app built using SQL, Next, and MUI"
              dateCompleted="2024"
              link="https://github.com/terminader7/Hoops-Hoopla"
              isWiP
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <ProjectContainer
              projectImagePath="/images/github-app.jpg"
              projectImageAlt="Image of github finder app"
              projectName="Github Finder"
              projectDesc="A simple React app that allows you to search for Github users and view their profile and repos using React and Node.js."
              link="https://github-finder-git-master-terminader7s-projects.vercel.app/"
              dateCompleted="2021"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <ProjectContainer
              projectImagePath="/images/contact-keeper.jpg"
              projectImageAlt="Image of contact keeper app"
              projectName="Contact Keeper"
              projectDesc="Full stack MERN application for keeping track of contacts. Built with React, Node.js, Express, and MongoDB."
              dateCompleted="2022"
              link="https://github.com/terminader7/Contact-Keeper"
              isRetired
            />
          </Grid>
        </Grid>
      </Box>
      <Box marginBottom="1rem">
        <InlineContainer
          sx={{
            justifyContent: "center",
            gap: ".25rem",
          }}
        >
          <CopyrightIcon fontSize="small" />
          <Typography variant="body1" textAlign="center">
            2024 Nader Ebrahim
          </Typography>
        </InlineContainer>
        <Typography
          variant="body1"
          textAlign="center"
          color={theme.palette.grey[500]}
        >
          Version 1.0.0 built with Next.js and Material UI.
        </Typography>
      </Box>
    </Box>
  );
}
