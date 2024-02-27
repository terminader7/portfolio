import Head from "next/head";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import InlineContainer from "../components/InlineContainer";
import { useTheme } from "@mui/material";
import MultiColorLine from "../components/MultiColorLine";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import ExperienceCard from "../components/ExperienceCard";
import ProjectContainer from "../components/ProjectContainer";
import ArrowIcon from "@mui/icons-material/ArrowRightAltRounded";
import ResumeIcon from "@mui/icons-material/DescriptionRounded";
import Skillset from "../components/Skillset";
import CopyrightIcon from "@mui/icons-material/CopyrightRounded";
import emailjs from "emailjs-com";
import ChatBoxContainer from "../features/ChatBox/ChatBoxContainer";

emailjs.init("36z9_9o_TMkuwi-Jz");

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const sinceraDescription = `Developed Next.js websites for clients from a multitude of
  backgrounds from ecommerce to digital marketing. Collaborated
  with a small team cultivating an agile work environment and
  ensured every feature release was on time and to the clients
  exact specifications.`;

  const finliDescription = `Designed and developed interactive UI components using modern JavaScript frameworks,
  resulting in a more engaging and dynamic user interface. Developed and implemented responsive web designs, ensuring optimal user experience
  across various devices and screen sizes.Collaborated closely with backend developers to bridge the gap between front-end and
  backend functionalities, showcasing adaptability by contributing to full-stack development
  tasks when needed.`;

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
            justifyContent: { xs: "center", lg: "start" },
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Nader Ebrahim
          </Typography>
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
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: { xs: "100%", lg: "800px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              textAlign: { xs: "center", lg: "start" },
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{ fontWeight: "bold" }}
            >
              Frontend <br /> Software Developer
            </Typography>
            <MultiColorLine height={"12px"} width={"100%"} />
            <Typography variant="h6" sx={{ width: { lg: "80%" } }}>
              I specialize in transforming abstract concepts into tangible,
              user-friendly experiences.
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h4"
              fontWeight={600}
              marginBottom=".5rem"
              sx={{ textAlign: { xs: "center", lg: "start" } }}
            >
              Skillset
            </Typography>
            <Skillset />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", lg: "start" },
            }}
          >
            <Typography variant="h4" fontWeight={600} marginBottom=".5rem">
              Get In Touch
            </Typography>
            <InlineContainer gap="1rem">
              <IconButton
                onClick={() => {
                  window.open("https://github.com/terminader7");
                }}
              >
                <GitHubIcon
                  fontSize="large"
                  sx={{
                    color: "common.white",
                    ":hover": {
                      transition: "all .2s ease-in-out",
                      transform: "scale(1.2)",
                      color: theme.palette.primary.red,
                    },
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open("mailto:mohammed.n.ebrahim@gmail.com");
                }}
              >
                <EmailIcon
                  fontSize="large"
                  sx={{
                    color: "common.white",
                    ":hover": {
                      transition: "all .2s ease-in-out",
                      transform: "scale(1.2)",
                      color: theme.palette.primary.orange,
                    },
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open("/naderebrahim.pdf");
                }}
              >
                <ResumeIcon
                  fontSize="large"
                  sx={{
                    color: "common.white",
                    ":hover": {
                      transition: "all .2s ease-in-out",
                      transform: "scale(1.2)",
                      color: theme.palette.primary.yellow,
                    },
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open("https://www.instagram.com/the_terminader/");
                }}
              >
                <InstagramIcon
                  fontSize="large"
                  sx={{
                    color: "common.white",
                    ":hover": {
                      transition: "all .2s ease-in-out",
                      transform: "scale(1.2)",
                      color: theme.palette.primary.green,
                    },
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/nader-ebrahim-28576b199/"
                  );
                }}
              >
                <LinkedInIcon
                  fontSize="large"
                  sx={{
                    color: "common.white",
                    ":hover": {
                      transition: "all .2s ease-in-out",
                      transform: "scale(1.2)",
                      color: theme.palette.primary.blue,
                    },
                  }}
                />
              </IconButton>
            </InlineContainer>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", lg: "45%" },
          }}
        >
          <ChatBoxContainer />
        </Box>
      </InlineContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{
            textAlign: { xs: "center", lg: "start" },
            marginBottom: ".5rem",
            maxWidth: "1500px",
          }}
        >
          Experience
        </Typography>
        <InlineContainer
          sx={{
            flexDirection: isMobile ? "column" : "row",
            gap: "1rem",
          }}
        >
          <ExperienceCard
            imageSrc={"/images/sincera-logo.jpg"}
            companyName="Sincera"
            jobTitle="Frontend Engineer"
            timeWorked="Nov 2020 - Aug 2022"
            description={sinceraDescription}
          />
          {isMobile ? (
            <ArrowIcon
              fontSize="large"
              sx={{ alignSelf: "center", rotate: "90deg" }}
            />
          ) : (
            <ArrowIcon fontSize="large" sx={{ alignSelf: "center" }} />
          )}
          <ExperienceCard
            imageSrc={"/images/finli-logo.jpg"}
            companyName="Finli"
            jobTitle="Frontend Engineer L3"
            timeWorked="Aug 2022 - Dec 2023"
            description={finliDescription}
          />
        </InlineContainer>
      </Box>

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
          spacing={{ xs: 6, lg: 20 }}
          sx={{
            justifyContent: { xs: "center", lg: "start" },
          }}
        >
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
