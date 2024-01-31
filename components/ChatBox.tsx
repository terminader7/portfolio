import Box from "@mui/material/Box";
import MessageContainer from "./MessageContainer";
import SelectUserMessageContainer from "./SelectUserMessageContainer";
import { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const responses = [
    {
      index: 0,
      message: "Hello",
    },
    {
      index: 1,
      message: "Hello",
    },
    {
      index: 2,
      message: "Hello",
    },
    {
      index: 3,
      message: "Hello",
    },
    {
      index: 4,
      message: "Hello",
    },
    {
      index: 5,
      message: "Hello",
    },
    {
      index: 6,
      message: "Hello",
    },
    {
      index: 7,
      message: "Hello",
    },
    {
      index: 8,
      message: "Hello",
    },
  ];

  const userMessages = [
    {
      index: 0,
      message: "What are your hobbies?",
    },
    {
      index: 1,
      message: "Send a message",
    },
    {
      index: 2,
      message: "Tell me about yourself",
    },
  ];
  return (
    <Box display="flex" flexDirection="column">
      <MessageContainer />
      <SelectUserMessageContainer />
    </Box>
  );
};
export default ChatBox;
