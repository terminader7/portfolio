import Head from "next/head";
import { Box, Typography, useMediaQuery } from "@mui/material";
import InlineContainer from "../components/InlineContainer";
import LinkButton from "../components/LinkButton";
import { useTheme } from "@mui/material";
import MultiColorLine from "../components/MultiColorLine";
import StyledChip from "../components/StyledChip";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import ExperienceCard from "../components/ExperienceCard";
import ProjectContainer from "../components/ProjectContainer";
import ArrowRightIcon from "@mui/icons-material/ArrowRightAltRounded";
import ResumeIcon from "@mui/icons-material/DescriptionRounded";

// For hobbies put gaming, basketball, and TTRPG, weightlifting, and cooking

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
    <Box paddingInline="10rem">
      <Head>
        <title>Naders Portfolio</title>
        <meta name="description" content="Nader's Portfolio" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <InlineContainer
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box display="flex" gap="2rem" flexDirection="column" width="40%">
          <Box display="flex" flexDirection="column" gap="1rem">
            <Typography
              variant="h5"
              textAlign="center"
              sx={{
                fontWeight: "bold",
                textAlign: "start",
              }}
            >
              Nader Ebrahim
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Frontend Software Developer
            </Typography>
            <MultiColorLine height={"20px"} width={"100%"} />
            <Typography variant="h6">
              I specialize in crafting visually appealing, seamlessly functional
              user interfaces and thrive on transforming abstract concepts into
              tangible, user-friendly experiences.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" fontWeight={600} marginBottom=".5rem">
              Skillset
            </Typography>
            <InlineContainer gap=".5rem" width="70%" sx={{ flexWrap: "wrap" }}>
              <StyledChip label="HTML" background={theme.palette.primary.red} />
              <StyledChip label="CSS" background={theme.palette.primary.red} />
              <StyledChip
                label="JavaScript"
                background={theme.palette.primary.red}
              />
              <StyledChip
                label="React"
                background={theme.palette.primary.orange}
              />
              <StyledChip
                label="Next.js"
                background={theme.palette.primary.orange}
              />
              <StyledChip
                label="TypeScript"
                background={theme.palette.primary.orange}
              />{" "}
              <StyledChip
                label="Material UI"
                background={theme.palette.primary.yellow}
              />
              <StyledChip
                label="Tailwind CSS"
                background={theme.palette.primary.yellow}
              />
              <StyledChip
                label="VSCode"
                background={theme.palette.primary.green}
              />
              <StyledChip
                label="Warp"
                background={theme.palette.primary.green}
              />
              <StyledChip label="Git" background={theme.palette.primary.blue} />
              <StyledChip
                label="Node.js"
                background={theme.palette.primary.blue}
              />
            </InlineContainer>
          </Box>
          <Box>
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
        <Box display="flex" flexDirection="column" gap="1rem">
          <Box>
            <Typography variant="h4" fontWeight={600} marginBottom=".5rem">
              "CHAT BOT" HERE
            </Typography>
          </Box>
          {/* <Image
            src="/images/picOfMe.jpg"
            alt="Nader"
            width={200}
            height={200}
            style={{ borderRadius: "20px" }}
          /> */}
        </Box>
      </InlineContainer>
      <Box display="flex" flexDirection="column" gap="1rem" marginBottom="4rem">
        <Typography variant="h4" fontWeight={600} marginBottom=".5rem">
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
          {/* <Divider
            orientation="horizontal"
            flexItem
            sx={{
              borderColor: "common.white",
              width: "200px",
              alignSelf: "center",
            }}
          /> */}
          <ArrowRightIcon fontSize="large" sx={{ alignSelf: "center" }} />
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
        <Typography variant="h4" fontWeight={600} marginBottom=".5rem">
          Projects
        </Typography>
        <InlineContainer
          sx={{
            flexDirection: isMobile ? "column" : "row",
            gap: "10rem",
          }}
        >
          <ProjectContainer
            projectImagePath=""
            projectImageAlt=""
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
    </Box>
  );
}
