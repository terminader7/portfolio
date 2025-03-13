import Head from "next/head";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import InlineContainer from "../components/InlineContainer";
import { useTheme } from "@mui/material";
import MultiColorLine from "../components/MultiColorLine";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/CopyrightRounded";
import emailjs from "emailjs-com";
import ChatBoxContainer from "../features/ChatBox/ChatBoxContainer";
import WorkExperienceContainer from "../features/Work-Experience/WorkExperienceContainer";
import AboutMeContainer from "../features/About-Me/AboutMeContainer";
import ProjectsGrid from "../features/Projects/ProjectsGrid";

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
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "3rem", lg: "8rem" },
          height: { xs: "100%", lg: "85vh" },
          width: "100%",
          flexDirection: { xs: "column-reverse", lg: "row" },
          marginX: "auto",
          paddingX: { xs: "1rem", lg: "3rem", xl: "0" },
          maxWidth: "1500px",
        }}
      >
        <AboutMeContainer />
        <ChatBoxContainer />
      </InlineContainer>
      <WorkExperienceContainer />
      <ProjectsGrid />
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
