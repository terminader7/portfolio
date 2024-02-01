import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const MessageContainer = ({ selectedMessages }) => {
  return (
    <>
      {selectedMessages.map((message, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            maxWidth: "300px",
            padding: ".5rem",
            margin: ".25rem",
            backgroundColor: "common.white",
            color: "common.black",
            borderRadius: "10px",
            borderBottomRightRadius: "0px",
          }}
        >
          <Typography variant="body1">{message}</Typography>
        </Paper>
      ))}
    </>
  );
};

export default MessageContainer;
