import { Box, Fade, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import EmailBox from "./EmailBox";
import Image from "next/image";
import InlineContainer from "../../components/InlineContainer";

const MessageBubble = styled(Paper)<{ isUser: boolean }>(
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
}: {
  messages: { message: string; isUser: boolean }[];
  showTextBox: boolean;
  hasSelectedMessage: boolean;
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
              {showImage && (
                <Fade in={hasSelectedMessage} timeout={500}>
                  <Image
                    src="/images/picOfMe.jpg"
                    alt="Portrait of Nader"
                    width={40}
                    height={40}
                    style={{
                      borderRadius: "50%",
                      alignSelf: "center",
                    }}
                  />
                </Fade>
              )}
              <MessageBubble isUser={message.isUser}>
                <Typography variant="body1">{segment}</Typography>
              </MessageBubble>
            </InlineContainer>
          ));
        return segments;
      })}
      {showTextBox && (
        <Box display="flex" justifyContent="center" marginTop="1rem">
          <EmailBox />
        </Box>
      )}
    </MessagesBox>
  );
};

export default MessageContainer;
