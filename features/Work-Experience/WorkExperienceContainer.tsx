import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InlineContainer from "../../components/InlineContainer";
import ExperienceCard from "./ExperienceCard";
import { useMediaQuery, useTheme } from "@mui/material";

const WorkExperienceContainer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const finliDescription = `Designed and developed interactive UI components using modern JavaScript frameworks,
    resulting in a more engaging and dynamic user interface. Developed and implemented responsive web designs, ensuring optimal user experience
    across various devices and screen sizes.Collaborated closely with backend developers to bridge the gap between front-end and
    backend functionalities, showcasing adaptability by contributing to full-stack development
    tasks when needed.`;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginX: "auto",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        sx={{
          textAlign: { xs: "center", lg: "start" },
          marginBottom: ".5rem",
          maxWidth: "1500px",
        }}
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
          imageSrc={"/images/finli-logo.jpg"}
          companyName="Finli"
          jobTitle="Frontend Engineer L3"
          timeWorked="Aug 2022 - Dec 2023"
          description={finliDescription}
        />
      </InlineContainer>
    </Box>
  );
};

export default WorkExperienceContainer;
