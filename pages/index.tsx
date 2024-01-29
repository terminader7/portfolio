import Head from "next/head";
import { Box, Typography, useMediaQuery } from "@mui/material";
import InlineContainer from "../components/InlineContainer";
import LinkButton from "../components/LinkButton";
import { useTheme } from "@mui/material";
import MultiColorLine from "../components/MultiColorLine";
import SkillChip from "../components/SkillChip";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Divider from "@mui/material/Divider";

// For hobbies put gaming, basketball, and TTRPG, weightlifting, and cooking

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box paddingInline="5rem">
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
              <SkillChip label="HTML" background={theme.palette.primary.red} />
              <SkillChip label="CSS" background={theme.palette.primary.red} />
              <SkillChip
                label="JavaScript"
                background={theme.palette.primary.red}
              />
              <SkillChip
                label="React"
                background={theme.palette.primary.orange}
              />
              <SkillChip
                label="Next.js"
                background={theme.palette.primary.orange}
              />
              <SkillChip
                label="TypeScript"
                background={theme.palette.primary.orange}
              />{" "}
              <SkillChip
                label="Material UI"
                background={theme.palette.primary.yellow}
              />
              <SkillChip
                label="Tailwind CSS"
                background={theme.palette.primary.yellow}
              />
              <SkillChip
                label="VSCode"
                background={theme.palette.primary.green}
              />
              <SkillChip
                label="CLion"
                background={theme.palette.primary.green}
              />
              <SkillChip
                label="Warp"
                background={theme.palette.primary.green}
              />
              <SkillChip label="Git" background={theme.palette.primary.blue} />
            </InlineContainer>
          </Box>
          <Box>
            <Typography variant="h4" fontWeight={600} marginBottom=".5rem">
              Get In Touch
            </Typography>
            <InlineContainer gap="1rem">
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
                      color: theme.palette.primary.red,
                    },
                  }}
                />
              </IconButton>
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
                    },
                  }}
                />
              </IconButton>
            </InlineContainer>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap="1rem">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Thanks for stopping by, <br /> take a look around.
          </Typography>
          <InlineContainer gap="2rem">
            <LinkButton
              href=""
              text="Resume"
              color={theme.palette.primary.red}
              hoverColor="common.white"
            />
            <LinkButton
              href="https://www.linkedin.com/in/nader-ebrahim-28576b199/"
              text="LinkedIn"
              color={theme.palette.primary.red}
              hoverColor="common.white"
            />
          </InlineContainer>
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
            gap: "10rem",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            sx={{ backgroundColor: "common.black" }}
          >
            <Typography variant="h6" fontWeight={600} textAlign="center">
              Sincera
            </Typography>
          </Box>
          <MultiColorLine height={"100px"} width={"5px"} direction="column" />
          <Box display="flex" flexDirection="column">
            <Typography variant="h6" fontWeight={600} textAlign="center">
              Finli
            </Typography>
          </Box>
        </InlineContainer>
      </Box>
      <Box display="flex" flexDirection="column" gap="1rem">
        <Typography variant="h4" fontWeight={600} marginBottom=".5rem">
          Projects
        </Typography>
        <InlineContainer
          sx={{
            flexDirection: isMobile ? "column" : "row",
            gap: "10rem",
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Hoops Hoopla
          </Typography>
          <Typography variant="h6" fontWeight={600}>
            Github Finder
          </Typography>
          <Typography variant="h6" fontWeight={600}>
            Contact Keeper
          </Typography>
        </InlineContainer>
      </Box>
    </Box>
  );
}
