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
            backgroundColor: message.isUser ? "common.white" : "common.black",
            color: message.isUser ? "common.black" : "common.white",
            borderRadius: "10px",
            borderBottomRightRadius: message.isUser ? "0px" : "10px",
          }}
        >
          <Typography variant="body1">{message.message}</Typography>
        </Paper>
      ))}
    </>
  );
};

export default MessageContainer;
