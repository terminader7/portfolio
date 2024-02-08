import { Box, Button } from "@mui/material";
import TextField from "./TextField";
import SendIcon from "@mui/icons-material/SendRounded";

const EmailBox = () => {
  return (
    <Box display="flex" flexDirection="column" gap="1rem" width="90%">
      <TextField placeholder="Your email here" />
      <TextField placeholder="Message" multiline rows={4} />
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
      >
        Send
      </Button>
    </Box>
  );
};

export default EmailBox;
