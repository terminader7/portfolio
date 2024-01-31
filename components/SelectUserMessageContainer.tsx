import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const SelectUserMessageContainer = ({}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: "300px",
        padding: ".5rem",
        margin: "1rem",
        backgroundColor: "transparent",
        color: "common.white",
        border: "1px solid",
        borderColor: "common.white",
        borderRadius: "10px",
        borderBottomRightRadius: "0px",
        ":hover": {
          backgroundColor: "common.white",
          color: "common.black",
          transition: "all 0.3s ease",
          cursor: "pointer",
        },
      }}
    >
      <Typography variant="body1">Testing</Typography>
    </Paper>
  );
};

export default SelectUserMessageContainer;
