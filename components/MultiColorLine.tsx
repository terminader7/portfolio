import { Box } from "@mui/material";
import InlineContainer from "./InlineContainer";

const MultiColorLine = ({
  height,
  width,
  direction = "row",
}: {
  height: string;
  width: string;
  direction?: "row" | "column";
}) => {
  return (
    <InlineContainer
      height={height}
      width={width}
      alignItems="center"
      justifyContent="center"
      direction={direction}
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
          backgroundColor: "primary.green",
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

export default MultiColorLine;
