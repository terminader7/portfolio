import { Box, Button } from "@mui/material";
import InlineContainer from "../../components/InlineContainer";

const SelectMessageContainer = ({ messages, onSelect }) => {
  return (
    <InlineContainer
      sx={{
        justifyContent: "flex-end",
        flexFlow: "row wrap",
        gap: { xs: ".25rem", md: "0" },
        width: "100%",
      }}
    >
      {messages?.map((message, index) => (
        <Box key={index}>
          <Button
            variant="contained"
            size="small"
            onClick={() => onSelect(message)}
            sx={{
              color: "common.white",
              borderRadius: "20px",
              margin: ".25rem",
              height: "fit-content",
              fontSize: ".75rem",
              backgroundColor: "primary.green",
              ":hover": {
                backgroundColor: "common.white",
                color: "common.black",
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
