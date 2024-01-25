import { Box } from "@mui/material";
import InlineContainer from "./InlineContainer";

const MultiColorLine = () => {
  return (
    <InlineContainer
      height="20px"
      width="30rem"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        sx={{
          backgroundColor: "primary.red",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      />
      <Box
        sx={{
          backgroundColor: "primary.green",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      />
      <Box
        sx={{
          backgroundColor: "primary.orange",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      />
      <Box
        sx={{
          backgroundColor: "primary.yellow",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      />
      <Box
        sx={{
          backgroundColor: "primary.blue",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      />
    </InlineContainer>
  );
};
