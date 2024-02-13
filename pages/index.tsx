import Head from "next/head";
import { Box, Typography, useMediaQuery } from "@mui/material";
import InlineContainer from "../components/InlineContainer";
import { useTheme } from "@mui/material";
import MultiColorLine from "../components/MultiColorLine";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
        paddingInline: isMobile ? "0" : "10rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Head>
        <title>Naders Portfolio</title>
        <meta name="description" content="Nader's Portfolio" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <InlineContainer
        sx={{
          width: "100%",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          height: "100vh",
          flexDirection: { xs: "column-reverse", md: "row" },
          marginTop: { xs: "8rem", md: "0" },
          marginBottom: { xs: "5rem", md: "0" },
          gap: { xs: "2rem", md: "0" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "40%" },
            gap: "2rem",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              textAlign: { xs: "center", md: "start" },
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {!isMobile && (
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Nader Ebrahim
              </Typography>
            )}
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{ fontWeight: "bold" }}
            >
              Frontend <br /> Software Developer
            </Typography>
            <Box sx={{ paddingInline: { xs: "1rem", md: "0" } }}>
              <MultiColorLine height={"15px"} width={"100%"} />
            </Box>
            <Typography variant="h6">
              I specialize in transforming abstract concepts into tangible,
              user-friendly experiences.
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h4"
              fontWeight={600}
              marginBottom=".5rem"
              sx={{ textAlign: { xs: "center", md: "start" } }}
            >
              Skillset
            </Typography>
            <Skillset />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "start" },
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
                  window.open("/NaderEbrahim.pdf");
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
            display: "flex",
            width: { xs: "90%", md: "30%" },
            flexDirection: "column",
          }}
        >
          <ChatBoxContainer />
        </Box>
      </InlineContainer>
      <Box display="flex" flexDirection="column" gap="1rem" marginBottom="4rem">
        <Typography
          variant="h4"
          fontWeight={600}
          marginBottom=".5rem"
          sx={{ textAlign: { xs: "center", md: "start" } }}
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
      <Box display="flex" flexDirection="column" gap="1rem" marginBottom="5rem">
        <Typography
          variant="h4"
          fontWeight={600}
          marginBottom=".5rem"
          sx={{ textAlign: { xs: "center", md: "start" } }}
        >
          Projects
        </Typography>
        <InlineContainer
          sx={{
            flexDirection: isMobile ? "column" : "row",
            gap: { xs: "5rem", md: "10rem" },
          }}
        >
          <ProjectContainer
            projectName="Hoops Hoopla"
            projectDesc="Nba stat tracker app built using SQL, Next, and MUI"
            dateCompleted="2024"
            isWiP
          />
          <ProjectContainer
            projectImagePath="/images/github-finder.jpg"
            projectImageAlt="Image of github finder app"
            projectName="Github Finder"
            projectDesc="A simple React app that allows you to search for Github users and
            view their profile and repos using React and Node.js."
            dateCompleted="2021"
          />
          <ProjectContainer
            projectImagePath="/images/contact-keeper.jpg"
            projectImageAlt="Image of contact keeper app"
            projectName="Contact Keeper"
            projectDesc="Full stack MERN application for keeping track of contacts. Built with React, Node.js, Express, and MongoDB."
            dateCompleted="2022"
          />
        </InlineContainer>
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
          Built with Next.js and Material UI.
        </Typography>
      </Box>
    </Box>
  );
}
