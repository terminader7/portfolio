import Head from "next/head";
import { Box, Typography } from "@mui/material";
import InlineContainer from "../components/InlineContainer";
import LinkButton from "../components/LinkButton";
import { useTheme } from "@mui/material";
import MultiColorLine from "../components/MultiColorLine";
import SkillChip from "../components/SkillChip";
// import Image from "next/image";

export default function Home() {
  const theme = useTheme();
  return (
    <Box>
      <Head>
        <title>Naders Portfolio</title>
        <meta name="description" content="Nader's Portfolio" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <InlineContainer
        sx={{
          width: "100%",
          justifyContent: "space-between",
          paddingInline: "5rem",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box display="flex" gap="1rem" flexDirection="column" width="40%">
          <Typography
            variant="h5"
            textAlign="center"
            sx={{
              color: "common.white",
              fontWeight: "bold",
              textAlign: "start",
            }}
          >
            Nader Ebrahim
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "common.white", fontWeight: "bold" }}
          >
            Frontend Software Developer
          </Typography>
          <MultiColorLine />
          <Typography variant="h6" color="common.white">
            I specialize in crafting visually appealing and seamlessly
            functional user interfaces. And I thrive on transforming abstract
            concepts into tangible, user-friendly experiences.
          </Typography>
          <Box>
            <Typography
              variant="h4"
              color="common.white"
              fontWeight={600}
              marginBottom=".5rem"
            >
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
        </Box>
        <Box display="flex" flexDirection="column" gap="1rem">
          <Typography
            variant="h4"
            sx={{
              color: "common.white",
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
    </Box>
  );
}
