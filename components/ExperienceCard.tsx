import Image from "next/image";
import Card from "@mui/material/Card";
import MultiColorLine from "./MultiColorLine";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

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
  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        flexDirection: "row",
        padding: "1rem",
        gap: "1rem",
        width: "500px",
        height: "250px",
      }}
    >
      <Image
        src={imageSrc}
        alt="Nader"
        width={50}
        height={50}
        style={{ borderRadius: "20px" }}
      />
      <MultiColorLine height={"100%"} width={"3px"} direction="column" />
      <Box>
        <Typography variant="h6" fontWeight={600} textAlign="start">
          {companyName}
        </Typography>
        <Typography variant="body1" textAlign="start">
          <strong> {jobTitle}</strong> - {timeWorked}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Card>
  );
};

export default ExperienceCard;
