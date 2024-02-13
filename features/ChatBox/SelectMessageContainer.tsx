import { Box, Button } from "@mui/material";
import InlineContainer from "../../components/InlineContainer";

const SelectMessageContainer = ({ messages, onSelect }) => {
  return (
    <InlineContainer
      sx={{
        justifyContent: "flex-end",
        flexFlow: "row wrap",
        gap: { xs: ".25rem", md: "0" },
      }}
    >
      {messages?.map((message, index) => (
        <Box key={index}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => onSelect(message)}
            sx={{
              color: "common.white",
              borderColor: "common.white",
              borderRadius: "20px",
              margin: ".25rem",
              height: "fit-content",
              fontSize: ".75rem",
              ":hover": {
                backgroundColor: "common.white",
                color: "common.black",
                borderColor: "common.white",
              },
              width: "fit-content",
            }}
          >
            {message}
          </Button>
        </Box>
      ))}
    </InlineContainer>
  );
};

export default SelectMessageContainer;