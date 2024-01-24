import Head from "next/head";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Naders Portfolio</title>
        <meta name="description" content="Nader's Portfolio" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <Typography
        variant="h4"
        sx={{ color: "common.white", fontWeight: "bold" }}
      >
        {`Thanks for stopping by, I'm Nader.`}
      </Typography>
      <Image
        src="/images/picOfMe.jpg"
        alt="Nader"
        width={200}
        height={200}
        style={{ borderRadius: "20px" }}
      />
    </Box>
  );
}
