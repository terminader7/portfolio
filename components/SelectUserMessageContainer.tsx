import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const SelectUserMessageContainer = ({ userMessages, onSelect }) => {
  return (
    <Box>
      {userMessages?.map((message, index) => (
        <>
          <Button
            key={index}
            variant="outlined"
            onClick={() => onSelect(message)}
            sx={{
              color: "common.white",
              borderColor: "common.white",
              borderRadius: "20px",
              ":hover": {
                backgroundColor: "common.white",
                color: "common.black",
                borderColor: "common.white",
              },
            }}
          >
            {message}
          </Button>
        </>
      ))}
    </Box>
  );
};

export default SelectUserMessageContainer;
