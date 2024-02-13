import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import InlineContainer from "./InlineContainer";
import StyledChip from "./StyledChip";
import { useTheme } from "@mui/material";

const ProjectContainer = ({
  projectImagePath = "/images/wip.jpg",
  projectImageAlt = "Work in progress",
  projectName,
  projectDesc,
  dateCompleted,
  isWiP = false,
}: {
  projectImagePath?: string;
  projectImageAlt?: string;
  projectName: string;
  projectDesc: string;
  dateCompleted: string;
  isWiP?: boolean;
}) => {
  const theme = useTheme();
  const isMobile = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        width: { xs: "100%", md: "20rem" },
        alignItems: { xs: "center", md: "start" },
        textAlign: { xs: "center", md: "start" },
      }}
    >
      <Image
        src={projectImagePath}
        alt={projectImageAlt}
        width={300}
        height={150}
        style={{
          borderRadius: "10px",
        }}
      />
      <Typography variant="h6" fontWeight={600}>
        {projectName}
      </Typography>
      <Typography variant="body1" color={theme.palette.grey[400]}>
        {projectDesc}
      </Typography>
      <InlineContainer gap="1rem">
        <StyledChip
          label={dateCompleted}
          background={theme.palette.primary.blue}
        />
        {isWiP && (
          <StyledChip label="WiP" background={theme.palette.primary.red} />
        )}
      </InlineContainer>
    </Box>
  );
};

export default ProjectContainer;
