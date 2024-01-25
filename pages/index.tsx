import Head from "next/head";
import { Box, Typography } from "@mui/material";
import InlineContainer from "../components/InlineContainer";
import LinkButton from "../components/LinkButton";
import { useTheme } from "@mui/material";

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
          paddingInline: "3rem",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            textAlign="center"
            sx={{ color: "common.white", fontWeight: "bold" }}
          >
            Nader Ebrahim <br /> Frontend Developer
          </Typography>
          <InlineContainer
            height="20px"
            width="30rem"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={{
                backgroundColor: "primary.red",
                height: "100%",
                width: "100%",
                overflow: "hidden",
              }}
            />
            <Box
              sx={{
                backgroundColor: "primary.green",
                height: "100%",
                width: "100%",
                overflow: "hidden",
              }}
            />
            <Box
              sx={{
                backgroundColor: "primary.orange",
                height: "100%",
                width: "100%",
                overflow: "hidden",
              }}
            />
            <Box
              sx={{
                backgroundColor: "primary.yellow",
                height: "100%",
                width: "100%",
                overflow: "hidden",
              }}
            />
            <Box
              sx={{
                backgroundColor: "primary.blue",
                height: "100%",
                width: "100%",
                overflow: "hidden",
              }}
            />
          </InlineContainer>
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
