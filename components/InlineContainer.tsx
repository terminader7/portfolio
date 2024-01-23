import { StackProps } from "@mui/material/Stack";
import Stack from "@mui/material/Stack";

const InlineContainer = ({ children, ...props }: StackProps) => (
  <Stack direction="row" alignItems="center" {...props}>
    {children ?? null}
  </Stack>
);

export default InlineContainer;
