import Box from "@mui/material/Box";
import MessageContainer from "./MessageContainer";
import SelectUserMessageContainer from "./SelectUserMessageContainer";
import UserMessageContainer from "./UserMessageContainer";
import Button from "@mui/material/Button";
import { useState } from "react";

// For hobbies put gaming, basketball, and TTRPG, weightlifting, and cooking

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const responses = [
    "Hello",
    "Sure, I'd love to tell you about myself!",
    "You can send a message by clicking the 'Send' button.",
  ];

  const [selectedMessages, setSelectedMessages] = useState([]);

  const handleUserMessageSelect = (selectedMessage) => {
    const responseIndex = selectedMessages.length;
    if (responseIndex !== -1) {
      const response = responses[responseIndex];
      setMessages([...messages, { text: selectedMessage, type: "user" }]);
      setMessages([...messages, { text: response, type: "bot" }]);
      setSelectedMessages([...selectedMessages, selectedMessage]);
    }
  };

  const handleRestart = () => {
    setMessages([]);
    setSelectedMessages([]);
  };

  return (
    <Box display="flex" flexDirection="column">
      <MessageContainer messages={messages} />
      <UserMessageContainer selectedMessages={selectedMessages} />
      <SelectUserMessageContainer
        userMessages={selectedMessages}
        onSelect={handleUserMessageSelect}
      />
      <Button
        variant="outlined"
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
