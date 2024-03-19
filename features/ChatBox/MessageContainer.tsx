import { useState } from "react";
import { Box, Fade, styled, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import InlineContainer from "../../components/InlineContainer";
import EmailBox from "./EmailBox";

const TypingIndicator = styled(Typography)(({ theme }) => ({
  fontStyle: "italic",
  color: theme.palette.text.secondary,
}));

const MessageBubble = styled(Paper)<{ isUser?: boolean }>(
  ({ theme, isUser }) => `
    elevation: 3;
    width: fit-content;
    padding: .5rem;
    margin: .25rem;
    border-radius: 10px;
    background-color: ${
      isUser ? theme.palette.common.white : theme.palette.primary.blue
    };
    color: ${isUser ? theme.palette.common.black : theme.palette.common.white};
    border-bottom-right-radius: ${isUser ? "0px" : "10px"};
    border-bottom-left-radius: ${isUser ? "10px" : "0px"};
    margin-right:1rem;
  `
);

const MessagesBox = styled(Box)(({ theme }) => ({
  scrollbarWidth: "thin",
  scrollbarColor: `${theme.palette.grey[800]} transparent`,
  display: "flex",
  flexDirection: "column",
  maxHeight: "500px",
  overflow: "auto",
}));

const MessageContainer = ({
  messages,
  showTextBox,
  hasSelectedMessage,
  isTyping,
}: {
  messages: { message: string; isUser: boolean }[];
  showTextBox: boolean;
  hasSelectedMessage: boolean;
  isTyping: boolean;
}) => {
  return (
    <MessagesBox>
      {messages?.flatMap((message, index) => {
        const showImage = hasSelectedMessage && !message.isUser;
        const segments = message.message
          .split("_")
          .map((segment, segmentIndex) => (
            <InlineContainer
              key={`${index}-${segmentIndex}`}
              sx={{
                justifyContent: message.isUser ? "end" : "start",
                gap: ".5rem",
              }}
            >
              <MessageBubble isUser={message.isUser}>
                <Typography variant="body1" fontWeight={500}>
                  {segment}
                </Typography>
              </MessageBubble>
            </InlineContainer>
          ));
        return segments;
      })}
      {isTyping && (
        <MessageBubble>
          <TypingIndicator
            variant="body2"
            fontWeight={600}
            sx={{ color: "common.white" }}
          >
            Typing...
          </TypingIndicator>
        </MessageBubble>
      )}
      {showTextBox && (
        <Box display="flex" justifyContent="center" marginTop="1rem">
          <EmailBox />
        </Box>
      )}
    </MessagesBox>
  );
};

export default MessageContainer;
