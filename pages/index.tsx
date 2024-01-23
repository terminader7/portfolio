import Head from "next/head";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Naders Portfolio</title>
        <meta name="description" content="Nader's Portfolio" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <Typography variant="h1" sx={{ color: "green.main" }}>
        Naders Portfolio
      </Typography>
    </Box>
  );
}
