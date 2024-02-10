import Box from "@mui/material/Box";
import MessageContainer from "./MessageContainer";
import SelectMessageContainer from "./SelectMessageContainer";
import Button from "@mui/material/Button";
import { useState } from "react";
import EmailBox from "./EmailBox";
import Image from "next/image";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

const ChatBox = () => {
  const userMessagesMap = {
    hobbies: "What are your hobbies?",
    about: "Tell me about yourself",
    sendMessage: "I'd like to send a message",
    quote: "Give me a random quote",
  };

  const defaultFirstMessage = "Hello! How can I help you today?";

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const responseMap = {
    [userMessagesMap.hobbies]:
      "When I'm not working I'm either watching basketball, spending time with friends and family, or playing video games. I also enjoy cooking and weightlifting.",
    [userMessagesMap.about]:
      "I'm a software engineer with about 4 years of professional experience. I'm currently working on some projects, this one included.",
    [userMessagesMap.sendMessage]:
      "Perfect! Just type your message below, and I'll respond as soon as I can.",
    [userMessagesMap.quote]: "Certainly!",
  };

  const [messages, setMessages] = useState([
    { message: defaultFirstMessage, isUser: false },
  ]);
  ``;
  const [messagesToSelect, setMessagesToSelect] = useState([
    ...Object.values(userMessagesMap),
  ]);
  const [hasSelectedMessage, setHasSelectedMessage] = useState(false);
  const [showTextBox, setShowTextBox] = useState(false);

  const handleUserMessageSelect = (message) => {
    if (message === userMessagesMap.sendMessage) {
      setShowTextBox(true);
    }
    setMessages((prevMessages) => [
      ...prevMessages,
      { message, isUser: true },
      {
        message: responseMap[message] || "I don't know the answer to that.",
        isUser: false,
      },
    ]);
    setMessagesToSelect((prevMessages) =>
      prevMessages.filter((msg) => msg !== message)
    );
    setHasSelectedMessage(true);
  };

  const handleRestart = () => {
    setMessages([{ message: defaultFirstMessage, isUser: false }]);
    setMessagesToSelect([...Object.values(userMessagesMap)]);
    setHasSelectedMessage(false);
    setShowTextBox(false);
  };

  return (
    <Box display="flex" flexDirection="column" gap="2rem">
      {isMobile && (
        <Typography
          variant="h5"
          textAlign="center"
          sx={{
            fontWeight: "bold",
          }}
        >
          Nader Ebrahim
        </Typography>
      )}
      <Image
        src="/images/picOfMe.jpg"
        alt="Portrait of Nader"
        width={100}
        height={100}
        style={{ alignSelf: "center", borderRadius: "50%" }}
      />
      <MessageContainer messages={messages} />
      {showTextBox ? (
        <Box display="flex" justifyContent="center">
          <EmailBox />
        </Box>
      ) : (
        <SelectMessageContainer
          messages={messagesToSelect}
          onSelect={handleUserMessageSelect}
        />
      )}
      {hasSelectedMessage && (
        <Button
          variant="text"
          size="small"
          onClick={handleRestart}
          sx={{
            color: "primary.red",
            width: "100px",
            borderColor: "primary.red",
            borderRadius: "20px",
            ":hover": {
              backgroundColor: "primary.red",
              color: "common.white",
              borderColor: "primary.red",
            },
            alignSelf: "start",
          }}
        >
          Restart
        </Button>
      )}
    </Box>
  );
};

export default ChatBox;
