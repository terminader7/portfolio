import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
const ResponseContainer = ({ messages }) => {
  return (
    <>
      {messages?.map((message, index) => {
        const segments = message.message.split(/\.(?=\s)|!(?=\s)/);

        return segments.map((segment, segmentIndex) => (
          <Paper
            key={`${index}-${segmentIndex}`}
            elevation={3}
            sx={{
              maxWidth: "300px",
              padding: ".5rem",
              margin: ".25rem",
              backgroundColor: message.isUser ? "common.white" : "common.black",
              color: message.isUser ? "common.black" : "common.white",
              borderRadius: "10px",
              borderBottomRightRadius:
                message.isUser && segmentIndex === segments.length - 1
                  ? "10px"
                  : "0px",
            }}
          >
            <Typography variant="body1">{segment}</Typography>
          </Paper>
        ));
      })}
    </>
  );
};

export default ResponseContainer;
