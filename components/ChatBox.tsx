import Box from "@mui/material/Box";
import ResponseContainer from "./ResponseContainer";
import SelectMessageContainer from "./SelectMessageContainer";
import Button from "@mui/material/Button";
import { useState } from "react";
import RestartIcon from "@mui/icons-material/RestartAlt";

// For hobbies put gaming, basketball, and TTRPG, weightlifting, and cooking

const ChatBox = () => {
  const userMessages = [
    "What are your hobbies?",
    "Tell me about yourself",
    "How do I send a message?",
  ];

  const responseMap = {
    "What are your hobbies?":
      "I enjoy playing video games, basketball, and tabletop RPGs.",
    "Tell me about yourself":
      "I'm Nader. I'm a software engineer with about 4 years of professional experience! I'm currently working on some projects, this one included.",
    "How do I send a message?":
      "You can type your message in the input field and click the 'Send' button.",
  };

  const [messages, setMessages] = useState([
    { message: "Hello! How can I help you today?", isUser: false },
  ]);
  ``;
  const [messagesToSelect, setMessagesToSelect] = useState(userMessages);

  const handleUserMessageSelect = (message) => {
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
  };

  const handleRestart = () => {
    setMessages([
      { message: "Hello! How can I help you today?", isUser: false },
    ]);
    setMessagesToSelect([...userMessages]);
  };

  return (
    <Box display="flex" flexDirection="column">
      <ResponseContainer messages={messages} />
      <SelectMessageContainer
        messages={messagesToSelect}
        onSelect={handleUserMessageSelect}
      />
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
    </Box>
  );
};

export default ChatBox;
