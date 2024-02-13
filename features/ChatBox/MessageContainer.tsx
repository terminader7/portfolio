import { Box, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const MessageBubble = styled(Paper)<{ isuser: boolean }>(
  ({ theme, isuser }) => `
    elevation: 3;
    width: fit-content;
    padding: .5rem;
    margin: .25rem;
    border-radius: 10px;
    background-color: ${
      isuser ? theme.palette.common.white : theme.palette.primary.green
    };
    color: ${isuser ? theme.palette.common.black : theme.palette.common.white};
    align-self: ${isuser ? "flex-end" : "flex-start"};
    border-bottom-right-radius: ${isuser ? "0px" : "10px"};
    border-bottom-left-radius: ${isuser ? "10px" : "0px"};
  `
);

const MessageContainer = ({ messages }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {messages?.flatMap((message, index) => {
        const segments = message.message
          .split("_")
          .map((segment, segmentIndex) => (
            <MessageBubble
              key={`${index}-${segmentIndex}`}
              isuser={message.isUser}
            >
              <Typography variant="body1">{segment}</Typography>
            </MessageBubble>
          ));
        return segments;
      })}
    </Box>
  );
};

export default MessageContainer;
