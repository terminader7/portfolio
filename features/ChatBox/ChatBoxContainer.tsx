import Box from "@mui/material/Box";
import MessageContainer from "./MessageContainer";
import SelectMessageContainer from "./SelectMessageContainer";
import { useState } from "react";
import Image from "next/image";
import { Fade, IconButton, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import RestartIcon from "@mui/icons-material/RestartAltRounded";
import { getRandomJoke, getRandomQuote } from "../queries";

const ChatBoxContainer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const userMessagesMap = {
    about: "Tell me about yourself 🤔",
    hobbies: "What are your hobbies? 🏀",
    sendMessage: "Send a message 📬",
    quote: "Quote of the day? 📜",
    joke: "Tell me a joke 😂",
  };

  const fetchRandomQuote = async () => {
    const quote = await getRandomQuote();
    return `"${quote.content}" _ - ${quote.author}`;
  };

  const fetchRandomJoke = async () => {
    const joke = await getRandomJoke();
    return `${joke.joke}`;
  };

  const defaultFirstMessage = "Hello! _ What can I do for you?";

  const responseMap = {
    [userMessagesMap.hobbies]:
      "When I'm not working I'm either watching basketball, spending time with friends and family, or playing video games. _ I also enjoy trying my hand at cooking, I'm always looking for new recipes to try out!",
    [userMessagesMap.about]:
      "I'm a software engineer with about 3 years of professional experience. _ I'm currently working on some projects, this one included.",
    [userMessagesMap.sendMessage]:
      "Perfect! Just type your message below, and I'll respond as soon as I can.",
  };

  fetchRandomQuote()
    .then((quote) => {
      responseMap[userMessagesMap.quote] = quote;
    })
    .catch((error) => {
      console.error("Error fetching random quote:", error);
    });

  fetchRandomJoke()
    .then((joke) => {
      responseMap[userMessagesMap.joke] = joke;
    })
    .catch((error) => {
      console.error("Error fetching random joke:", error);
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
  const [isTyping, setIsTyping] = useState(false);

  const handleUserMessageSelect = (message) => {
    setIsTyping(true);
    if (message === userMessagesMap.sendMessage) {
      setShowTextBox(true);
    }
    if (message === userMessagesMap.quote) {
      fetchRandomQuote().then((quote) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { message, isUser: true },
        ]);
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              message: quote,
              isUser: false,
            },
          ]);
          setIsTyping(false);
        }, 2000);
      });
      setMessagesToSelect((prevMessages) =>
        prevMessages.filter((msg) => msg !== message)
      );
      setHasSelectedMessage(true);
      return;
    }
    setMessages((prevMessages) => [...prevMessages, { message, isUser: true }]);
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: responseMap[message] || "I don't know the answer to that.",
          isUser: false,
        },
      ]);
      setIsTyping(false);
    }, 1000);
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
      sx={{
        display: "flex",
        flexDirection: "column",
        marginBottom: { xs: "0", lg: "5rem" },
        gap: "2rem",
        padding: "1rem",
        maxWidth: "550px",
      }}
    >
      {!hasSelectedMessage && (
        <Fade in={!hasSelectedMessage} timeout={500}>
          <Image
            src="/images/picOfMe.jpg"
            alt="Portrait of Nader"
            width={isMobile ? 150 : 300}
            height={isMobile ? 150 : 300}
            style={{
              borderRadius: "50%",
              alignSelf: "center",
            }}
          />
        </Fade>
      )}

      <MessageContainer
        messages={messages}
        showTextBox={showTextBox}
        hasSelectedMessage={hasSelectedMessage}
        isTyping={isTyping}
      />
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
