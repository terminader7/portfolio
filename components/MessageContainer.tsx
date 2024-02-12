import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const MessageContainer = ({ messages }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {messages?.map((message, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            width: "fit-content",
            padding: ".5rem",
            margin: ".25rem",
            backgroundColor: message.isUser ? "common.white" : "primary.green",
            color: message.isUser ? "common.black" : "common.white",
            borderRadius: "10px",
            borderBottomRightRadius: message.isUser ? "0px" : "10px",
            borderBottomLeftRadius: message.isUser ? "10px" : "0px",
            alignSelf: message.isUser ? "flex-end" : "flex-start",
          }}
        >
          <Typography variant="body1">{message.message}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default MessageContainer;
