import Box from "@mui/material/Box";
import ResponseContainer from "./ResponseContainer";
import SelectUserMessageContainer from "./SelectUserMessageContainer";
import UserMessageContainer from "./UserMessageContainer";
import Button from "@mui/material/Button";
import { useState } from "react";
import RestartIcon from "@mui/icons-material/RestartAlt";

// For hobbies put gaming, basketball, and TTRPG, weightlifting, and cooking

const ChatBox = () => {
  const responses = [
    "Hello",
    "Sure, I'd love to tell you about myself!",
    "You can send a message by clicking the 'Send' button.",
  ];
  const userMessages = [
    "What are your hobbies",
    "Tell me about yourself",
    "How do I send a message?",
  ];

  const [messages, setMessages] = useState([]);

  const [selectedMessages, setSelectedMessages] = useState([]);

  const handleUserMessageSelect = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, sender: "user" },
    ]);
    setSelectedMessages((prevSelectedMessages) =>
      prevSelectedMessages.filter(
        (selectedMessage) => selectedMessage !== message
      )
    );
  };

  const handleRestart = () => {
    setMessages([]);
    setSelectedMessages([]);
  };

  return (
    <Box display="flex" flexDirection="column">
      <ResponseContainer messages={messages} />
      <UserMessageContainer selectedMessages={selectedMessages} />
      <SelectUserMessageContainer
        userMessages={selectedMessages}
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
