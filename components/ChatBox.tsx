import Box from "@mui/material/Box";
import MessageContainer from "./MessageContainer";
import SelectMessageContainer from "./SelectMessageContainer";
import Button from "@mui/material/Button";
import { useState } from "react";
import EmailBox from "./EmailBox";

const ChatBox = () => {
  const userMessages = [
    "What are your hobbies?",
    "Tell me about yourself",
    "I'd like to send a message",
  ];

  const defaultFirstMessage = "Hello! How can I help you today?";

  const responseMap = {
    "What are your hobbies?":
      "When I'm not working I'm either watching basketball, spending time with friends and family, or playing video games. I also enjoy cooking and weightlifting.",
    "Tell me about yourself":
      "I'm a software engineer with about 4 years of professional experience. I'm currently working on some projects, this one included.",
    "I'd like to send a message":
      "Just type your message below, and I'll respond as soon as I can.",
  };

  const [messages, setMessages] = useState([
    { message: defaultFirstMessage, isUser: false },
  ]);
  ``;
  const [messagesToSelect, setMessagesToSelect] = useState(userMessages);
  const [hasSelectedMessage, setHasSelectedMessage] = useState(false);
  const [showTextBox, setShowTextBox] = useState(false);

  const handleUserMessageSelect = (message) => {
    if (message === "I'd like to send a message") {
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
    setMessagesToSelect([...userMessages]);
    setHasSelectedMessage(false);
    setShowTextBox(false);
  };

  return (
    <Box display="flex" flexDirection="column" gap="2rem">
      <MessageContainer messages={messages} />
      <SelectMessageContainer
        messages={messagesToSelect}
        onSelect={handleUserMessageSelect}
      />
      {showTextBox && (
        <Box display="flex" justifyContent="center">
          <EmailBox />
        </Box>
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
