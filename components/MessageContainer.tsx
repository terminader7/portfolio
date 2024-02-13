import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const MessageContainer = ({ messages }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {messages?.flatMap((message, index) => {
        const segments = message.message
          .split("_")
          .map((segment, segmentIndex) => (
            <Paper
              key={`${index}-${segmentIndex}`}
              elevation={3}
              sx={{
                width: "fit-content",
                padding: ".5rem",
                margin: ".25rem",
                backgroundColor: message.isUser
                  ? "common.white"
                  : "primary.green",
                color: message.isUser ? "common.black" : "common.white",
                borderRadius: "10px",
                borderBottomRightRadius:
                  message.isUser &&
                  segmentIndex === message.message.split("_").length - 1
                    ? "0px"
                    : "10px",
                borderBottomLeftRadius:
                  message.isUser ||
                  segmentIndex !== message.message.split("_").length - 1
                    ? "0px"
                    : "10px",
                alignSelf: message.isUser ? "flex-end" : "flex-start",
              }}
            >
              <Typography variant="body1">{segment}</Typography>
            </Paper>
          ));
        return segments;
      })}
    </Box>
  );
};

export default MessageContainer;
