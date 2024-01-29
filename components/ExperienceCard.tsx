import Image from "next/image";
import Card from "@mui/material/Card";
import MultiColorLine from "./MultiColorLine";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import DownArrowIcon from "@mui/icons-material/ExpandMoreRounded";
import { useState } from "react";

const ExperienceCard = ({
  imageSrc,
  companyName,
  jobTitle,
  timeWorked,
  description,
}: {
  imageSrc: string;
  companyName: string;
  jobTitle: string;
  timeWorked: string;
  description: string;
}) => {
  const theme = useTheme();
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const handleToggle = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        flexDirection: "row",
        padding: "1rem",
        gap: "1rem",
        width: "500px",
        height: "auto",
        transition: "height 0.7s ease-in-out",
        position: "relative",
      }}
    >
      <Image
        src={imageSrc}
        alt="Nader"
        width={50}
        height={50}
        style={{ borderRadius: "20px" }}
      />
      <MultiColorLine height={"auto"} width={"2px"} direction="column" />
      <Box width="90%">
        <Typography variant="h6" fontWeight={600} textAlign="start">
          {companyName}
        </Typography>
        <Typography variant="body1" textAlign="start">
          <strong> {jobTitle}</strong> - {timeWorked}
        </Typography>
        {isDescriptionVisible && (
          <Typography variant="body1">{description}</Typography>
        )}
      </Box>
      <IconButton
        onClick={handleToggle}
        sx={{
          ":hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <DownArrowIcon
          sx={{
            position: "absolute",
            bottom: "0",
            color: "common.white",
            transform: isDescriptionVisible ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </IconButton>
    </Card>
  );
};

export default ExperienceCard;
