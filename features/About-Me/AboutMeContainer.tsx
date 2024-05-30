import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MultiColorLine from "../../components/MultiColorLine";
import Skillset from "./Skillset";
import { useMediaQuery, useTheme } from "@mui/material";
import Contact from "./Contact";

const AboutMeContainer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
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
          I have over 3 years of experience in transforming abstract concepts
          into tangible, user-friendly experiences.
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
      <Contact />
    </Box>
  );
};

export default AboutMeContainer;
