import Box from "@mui/material/Box";
import MessageContainer from "./MessageContainer";
import SelectMessageContainer from "./SelectMessageContainer";
import { useState } from "react";
import Image from "next/image";
import { IconButton, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import RestartIcon from "@mui/icons-material/RestartAltRounded";
import { getRandomQuote } from "../queries";

const ChatBoxContainer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const userMessagesMap = {
    hobbies: "What are your hobbies?",
    about: "Tell me about yourself",
    sendMessage: "I'd like to send a message",
    quote: "Give me a random quote",
  };

  const fetchRandomQuote = async () => {
    const quote = await getRandomQuote();
    return `"${quote.content}" _ - ${quote.author} _ Courtesy of api.quotable.io`;
  };

  const defaultFirstMessage = "Hello! _ What can I do for you?";

  const responseMap = {
    [userMessagesMap.hobbies]:
      "When I'm not working I'm either watching basketball, spending time with friends and family, or playing video games. _ I also enjoy cooking and weightlifting.",
    [userMessagesMap.about]:
      "I'm a software engineer with about 4 years of professional experience. _ I'm currently working on some projects, this one included.",
    [userMessagesMap.sendMessage]:
      "Perfect! _ Just type your message below, and I'll respond as soon as I can.",
  };

  fetchRandomQuote()
    .then((quote) => {
      responseMap[userMessagesMap.quote] = quote;
    })
    .catch((error) => {
      console.error("Error fetching random quote:", error);
    });

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
    if (message === userMessagesMap.quote) {
      fetchRandomQuote().then((quote) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { message, isUser: true },
          {
            message: quote,
            isUser: false,
          },
        ]);
      });
      setMessagesToSelect((prevMessages) =>
        prevMessages.filter((msg) => msg !== message)
      );
      setHasSelectedMessage(true);
      return;
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
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        marginBottom: { xs: "0", md: "5rem" },
        gap: "2rem",
      }}
    >
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
      <Box
        sx={{
          display: "flex",
          justifyContent: hasSelectedMessage ? "flex-end" : "center",
          transition: "justify-content 1s",
        }}
      >
        <Image
          src="/images/picOfMe.jpg"
          alt="Portrait of Nader"
          width={hasSelectedMessage ? 100 : 300}
          height={hasSelectedMessage ? 100 : 300}
          style={{
            borderRadius: "50%",
            transition: "1s all",
            transform: hasSelectedMessage ? "translateX(50%)" : "none",
          }}
        />
      </Box>
      <MessageContainer messages={messages} showTextBox={showTextBox} />
      {!showTextBox && (
        <SelectMessageContainer
          messages={messagesToSelect}
          onSelect={handleUserMessageSelect}
        />
      )}
      {hasSelectedMessage && (
        <IconButton
          onClick={handleRestart}
          sx={{
            color: "primary.red",
            borderColor: "primary.red",
            ":hover": {
              backgroundColor: "primary.red",
              color: "common.white",
              borderColor: "primary.red",
            },
            alignSelf: "start",
            fontSize: "body2.fontSize",
            borderRadius: "10px",
            gap: ".25rem",
            fontWeight: "bold",
          }}
        >
          Restart
          <RestartIcon fontSize="small" />
        </IconButton>
      )}
    </Box>
  );
};

export default ChatBoxContainer;
