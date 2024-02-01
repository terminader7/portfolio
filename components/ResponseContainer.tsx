import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const ResponseContainer = ({ messages }) => {
  return (
    <>
      {messages?.map((message, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            maxWidth: "300px",
            padding: ".5rem",
            margin: ".25rem",
            backgroundColor: "common.black",
            color: "common.white",
            borderRadius: "10px",
            borderBottomLeftRadius: "0px",
          }}
        >
          <Typography variant="body1">{message.text}</Typography>
        </Paper>
      ))}
    </>
  );
};

export default ResponseContainer;
