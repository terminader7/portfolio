import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const MessageContainer = ({}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: "300px",
        padding: ".5rem",
        margin: "1rem",
        backgroundColor: "common.black",
        color: "common.white",
        borderRadius: "10px",
        borderBottomLeftRadius: "0px",
      }}
    >
      <Typography variant="body1">Testing</Typography>
    </Paper>
  );
};

export default MessageContainer;
