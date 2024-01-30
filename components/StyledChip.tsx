import { styled } from "@mui/material";
import MuiChip, { ChipProps } from "@mui/material/Chip";

interface StyledChipProps extends ChipProps {
  background: string;
}

const Chip = styled(MuiChip)<StyledChipProps>(
  ({ theme, background }) => `
    display: inline-flex;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
    align-items: center;
    height: auto;
    justify-content: center;
    padding: ${theme.spacing(0.25, 0)};
    border-radius: 4px;
    color: ${theme.palette.common.white};
    background-color: ${background};
`
);

const SkillChip = ({ label, background }: StyledChipProps) => {
  return <Chip variant="filled" label={label} background={background} />;
};

export default SkillChip;
