import { Box, Button } from "@mui/material";
import InlineContainer from "../../components/InlineContainer";

const SelectMessageContainer = ({ messages, onSelect }) => {
  return (
    <InlineContainer
      sx={{
        alignSelf: "end",
        justifyContent: "flex-end",
        flexFlow: "wrap",
        gap: { xs: "6px", lg: ".5rem" },
        width: { xs: "100%", md: "70%", lg: "80%" },
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
              fontSize: ".75rem",
              backgroundColor: "primary.green",
              ":hover": {
                backgroundColor: "common.white",
                color: "common.black",
              },
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
