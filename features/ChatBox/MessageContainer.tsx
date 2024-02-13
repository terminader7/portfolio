import { Box, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import EmailBox from "./EmailBox";

const MessageBubble = styled(Paper)<{ isUser: boolean }>(
  ({ theme, isUser }) => `
    elevation: 3;
    width: fit-content;
    padding: .5rem;
    margin: .25rem;
    border-radius: 10px;
    background-color: ${
      isUser ? theme.palette.common.white : theme.palette.primary.green
    };
    color: ${isUser ? theme.palette.common.black : theme.palette.common.white};
    align-self: ${isUser ? "flex-end" : "flex-start"};
    border-bottom-right-radius: ${isUser ? "0px" : "10px"};
    border-bottom-left-radius: ${isUser ? "10px" : "0px"};
  `
);

const MessageContainer = ({
  messages,
  showTextBox,
}: {
  messages: { message: string; isUser: boolean }[];
  showTextBox: boolean;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "500px",
        overflow: "auto",
      }}
    >
      {messages?.flatMap((message, index) => {
        const segments = message.message
          .split("_")
          .map((segment, segmentIndex) => (
            <MessageBubble
              key={`${index}-${segmentIndex}`}
              isUser={message.isUser}
            >
              <Typography variant="body1">{segment}</Typography>
            </MessageBubble>
          ));
        return segments;
      })}
      {showTextBox && (
        <Box display="flex" justifyContent="center" marginTop="1rem">
          <EmailBox />
        </Box>
      )}
    </Box>
  );
};

export default MessageContainer;
