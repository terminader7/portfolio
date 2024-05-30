import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InlineContainer from "../../components/InlineContainer";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import ResumeIcon from "@mui/icons-material/DescriptionRounded";
import { useTheme } from "@mui/material";

const Contact = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", lg: "start" },
      }}
    >
      <Typography variant="h4" fontWeight={600} marginBottom=".5rem">
        Get In Touch
      </Typography>
      <InlineContainer gap="1rem">
        <IconButton
          onClick={() => {
            window.open("https://github.com/terminader7");
          }}
        >
          <GitHubIcon
            fontSize="large"
            sx={{
              color: "common.white",
              ":hover": {
                transition: "all .2s ease-in-out",
                transform: "scale(1.2)",
                color: theme.palette.primary.red,
              },
            }}
          />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open("mailto:mohammed.n.ebrahim@gmail.com");
          }}
        >
          <EmailIcon
            fontSize="large"
            sx={{
              color: "common.white",
              ":hover": {
                transition: "all .2s ease-in-out",
                transform: "scale(1.2)",
                color: theme.palette.primary.orange,
              },
            }}
          />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open("/naderebrahim.pdf");
          }}
        >
          <ResumeIcon
            fontSize="large"
            sx={{
              color: "common.white",
              ":hover": {
                transition: "all .2s ease-in-out",
                transform: "scale(1.2)",
                color: theme.palette.primary.yellow,
              },
            }}
          />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open("https://www.instagram.com/the_terminader/");
          }}
        >
          <InstagramIcon
            fontSize="large"
            sx={{
              color: "common.white",
              ":hover": {
                transition: "all .2s ease-in-out",
                transform: "scale(1.2)",
                color: theme.palette.primary.green,
              },
            }}
          />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open("https://www.linkedin.com/in/nader-ebrahim-28576b199/");
          }}
        >
          <LinkedInIcon
            fontSize="large"
            sx={{
              color: "common.white",
              ":hover": {
                transition: "all .2s ease-in-out",
                transform: "scale(1.2)",
                color: theme.palette.primary.blue,
              },
            }}
          />
        </IconButton>
      </InlineContainer>
    </Box>
  );
};

export default Contact;
