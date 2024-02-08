import MuiTextField, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material";

export type CustomTextFieldProps = TextFieldProps & {
  format?: string | null;
};

const CustomTextField = styled(MuiTextField)<CustomTextFieldProps>(
  ({ theme }) => `
    transition: border  200ms, box-shadow  200ms;
     
    & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
      border-color: ${theme.palette.common.white}; /* Set the default border color */
      transition: border  200ms, box-shadow  200ms;
    }
     
    & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline:hover {
      border-color: ${theme.palette.common.white};
    }
  
    & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${theme.palette.common.white}; /* Ensure border remains white when focused */
      transition: border  200ms, box-shadow  200ms;
    }
`
);

const TextField = ({ ...props }: CustomTextFieldProps) => {
  return (
    <CustomTextField
      variant="outlined"
      size="small"
      disabled={props?.disabled}
      {...props}
    />
  );
};

export default TextField;
