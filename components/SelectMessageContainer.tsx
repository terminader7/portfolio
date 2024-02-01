import { Button } from "@mui/material";
import Box from "@mui/material/Box";

const SelectMessageContainer = ({ messages, onSelect }) => {
  return (
    <Box>
      {messages?.map((message, index) => (
        <>
          <Button
            key={index}
            variant="outlined"
            size="small"
            onClick={() => onSelect(message)}
            sx={{
              color: "common.white",
              borderColor: "common.white",
              borderRadius: "20px",
              margin: ".25rem",
              height: "25px",
              fontSize: ".75rem",
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

export default SelectMessageContainer;
