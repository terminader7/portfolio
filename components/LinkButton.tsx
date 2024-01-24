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
    >
      <Typography
        variant="h5"
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
