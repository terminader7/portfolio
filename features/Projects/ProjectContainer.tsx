import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import InlineContainer from "../../components/InlineContainer";
import StyledChip from "../../components/StyledChip";
import { useTheme } from "@mui/material";
import LinkIcon from "@mui/icons-material/LaunchRounded";

const ProjectContainer = ({
  projectImagePath = "/images/wip.jpg",
  projectImageAlt = "Work in progress",
  projectName,
  projectDesc,
  dateCompleted,
  link,
  isWiP = false,
  isRetired = false,
}: {
  projectImagePath?: string;
  projectImageAlt?: string;
  projectName: string;
  projectDesc: string;
  dateCompleted: string;
  link?: string;
  isWiP?: boolean;
  isRetired?: boolean;
}) => {
  const theme = useTheme();
  const isMobile = theme.breakpoints.down("lg");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        height: { xs: "fit-content", lg: "400px" },
        alignItems: { xs: "center", lg: "start" },
        textAlign: { xs: "center", lg: "start" },
      }}
    >
      <Image
        src={projectImagePath}
        alt={projectImageAlt}
        width={isMobile ? 350 : 400}
        height={isMobile ? 175 : 200}
        style={{
          borderRadius: "10px",
          filter: isRetired ? "brightness(0.6)" : "none",
        }}
      />
      <Typography
        variant="h6"
        fontWeight={600}
        onClick={() => link && window.open(link, "_blank")}
        sx={{
          ":hover": {
            cursor: "pointer",
          },
        }}
      >
        {projectName}
        {link && (
          <LinkIcon
            fontSize="small"
            sx={{
              verticalAlign: "text-top",
              marginLeft: ".25rem",
              color: theme.palette.grey[300],
            }}
          />
        )}
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.grey[400]}
        sx={{ width: { xs: "80%", lg: "100%" } }}
      >
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
        {isRetired && (
          <StyledChip label="Retired" background={theme.palette.grey[800]} />
        )}
      </InlineContainer>
    </Box>
  );
};

export default ProjectContainer;
