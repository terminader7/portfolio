import { Box, Button } from "@mui/material";
import TextField from "./TextField";
import SendIcon from "@mui/icons-material/SendRounded";
import { useState } from "react";
import emailjs from "emailjs-com";

const EmailBox = () => {
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: userEmail,
      message: message,
    };

    emailjs
      .send(
        "service_lhwa4y9",
        "template_hcso5hl",
        templateParams,
        "36z9_9o_TMkuwi-Jz"
      )
      .then(
        (result) => {
          console.log("Email sent successfully", result.text);
        },
        (error) => {
          console.log("Error sending email", error.text);
        }
      );
  };

  return (
    <Box display="flex" flexDirection="column" gap="1rem" width="90%">
      <TextField
        placeholder="Your email here"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <TextField
        placeholder="Message"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        variant="contained"
        size="small"
        endIcon={<SendIcon fontSize="small" />}
        sx={{
          backgroundColor: "common.white",
          ":hover": { backgroundColor: "common.white" },
          width: "fit-content",
          fontWeight: "bold",
          alignSelf: "flex-end",
        }}
        onClick={handleSubmit}
      >
        Send
      </Button>
    </Box>
  );
};

export default EmailBox;
