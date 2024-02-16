import { useTheme } from "@mui/material";
import StyledChip from "./StyledChip";
import InlineContainer from "./InlineContainer";

const Skillset = () => {
  const theme = useTheme();
  return (
    <InlineContainer
      gap=".5rem"
      sx={{
        flexWrap: "wrap",
        justifyContent: { xs: "center", lg: "start" },
        width: { xs: "100%", lg: "55%" },
      }}
    >
      <StyledChip label="HTML" background={theme.palette.primary.red} />
      <StyledChip label="CSS" background={theme.palette.primary.red} />
      <StyledChip label="JavaScript" background={theme.palette.primary.red} />
      <StyledChip label="React" background={theme.palette.primary.orange} />
      <StyledChip label="Next.js" background={theme.palette.primary.orange} />
      <StyledChip
        label="TypeScript"
        background={theme.palette.primary.orange}
      />{" "}
      <StyledChip
        label="Material UI"
        background={theme.palette.primary.yellow}
      />
      <StyledChip
        label="Tailwind CSS"
        background={theme.palette.primary.yellow}
      />
      <StyledChip label="VSCode" background={theme.palette.primary.green} />
      <StyledChip label="Warp" background={theme.palette.primary.green} />
      <StyledChip label="Git" background={theme.palette.primary.blue} />
      <StyledChip label="Node.js" background={theme.palette.primary.blue} />
    </InlineContainer>
  );
};

export default Skillset;
