import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const UserMessageContainer = ({}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: "300px",
        padding: ".5rem",
        margin: "1rem",
        backgroundColor: "common.white",
        color: "common.black",
        borderRadius: "10px",
        borderBottomRightRadius: "0px",
      }}
    >
      <Typography variant="body1">Testing</Typography>
    </Paper>
  );
};

export default UserMessageContainer;
