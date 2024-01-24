import Head from "next/head";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import InlineContainer from "../components/InlineContainer";
import LinkButton from "../components/LinkButton";

export default function Home() {
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
            sx={{ color: "primary.orange", fontWeight: "bold" }}
          >
            Nader Ebrahim <br /> Frontend Engineer
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography
            variant="h4"
            sx={{
              color: "common.white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Thanks for stopping by! <br /> Take a look around.
          </Typography>
          <InlineContainer>
            <LinkButton
              href=""
              text="Resume"
              color="primary.red"
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
