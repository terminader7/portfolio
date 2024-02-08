import { Box } from "@mui/material";
import TextField from "./TextField";

const EmailBox = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="1rem">
      <TextField placeholder="Your email here" />
      <TextField placeholder="Message" />
    </Box>
  );
};

export default EmailBox;
