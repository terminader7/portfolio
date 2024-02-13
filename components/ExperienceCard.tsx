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
  return (
    <Card
      onClick={handleToggle}
      sx={{
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        flexDirection: "row",
        padding: "1rem",
        gap: "1rem",
        width: { xs: "100%", md: "500px" },
        maxHeight: isDescriptionVisible ? "30rem" : "10rem",
        overflow: "hidden",
        transition: "max-height 0.7s ease-in-out",
        position: "relative",
        ":hover": {
          cursor: "pointer",
        },
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
      <DownArrowIcon
        sx={{
          position: "absolute",
          bottom: "15px",
          right: "5px",
          color: "common.white",
          transform: isDescriptionVisible ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease-in-out",
        }}
      />
    </Card>
  );
};

export default ExperienceCard;
