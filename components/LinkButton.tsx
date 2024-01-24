import { Button, Typography } from "@mui/material";

const LinkButton = ({ href, text, color, hoverColor }) => {
  return (
    <Button
      sx={{
        border: "2px solid",
        borderColor: { color },
        borderRadius: "5px",
        color: { color },
        ":hover": {
          borderColor: { hoverColor },
        },
      }}
      onClick={() => window.open(href, "_blank")}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          paddingInline: "4rem",
        }}
      >
        {text}
      </Typography>
    </Button>
  );
};
export default LinkButton;
