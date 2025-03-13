import Image from "next/image";
import Card from "@mui/material/Card";
import MultiColorLine from "../../components/MultiColorLine";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Collapse } from "@mui/material";
import DownArrowIcon from "@mui/icons-material/ExpandMoreRounded";
import { useState } from "react";
import { styled } from "@mui/system";

const ExperienceCardContainer = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "row",
  padding: "1rem",
  gap: "1rem",
  width: "90%",
  maxWidth: "90%",
  height: "auto",
  overflow: "hidden",
  transition: "height 0.6s ease-in-out",
  position: "relative",
  ":hover": {
    cursor: "pointer",
  },
  [theme.breakpoints.up("lg")]: {
    width: "720px",
    maxWidth: "720px",
  },
}));

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
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const handleToggle = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };
  return (
    <ExperienceCardContainer onClick={handleToggle}>
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
        <Collapse in={isDescriptionVisible} timeout="auto" unmountOnExit>
          <Typography variant="body1" sx={{ marginTop: "1rem" }}>
            {description}
          </Typography>
        </Collapse>
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
    </ExperienceCardContainer>
  );
};

export default ExperienceCard;
