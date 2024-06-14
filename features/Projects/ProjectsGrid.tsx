import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProjectContainer from "./ProjectContainer";

const ProjectsGrid = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "1500px",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        marginBottom=".5rem"
        sx={{ textAlign: { xs: "center", lg: "start" } }}
      >
        Projects
      </Typography>
      <Grid
        container
        spacing={{ xs: 6, lg: 4 }}
        sx={{
          justifyContent: { xs: "center", lg: "start" },
        }}
      >
        <Grid item xs={12} lg={4}>
          <ProjectContainer
            projectImagePath="/images/weather-app.jpg"
            projectImageAlt="Image of weather app"
            projectName="Weather App"
            projectDesc="A  weather app being built using Next and the OpenWeatherMap API. Nearly finished just needs a little more functionality"
            dateCompleted="2024"
            link="https://weather-app-swart-mu-44.vercel.app/"
            isWiP
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ProjectContainer
            projectImagePath="/images/natural-events-tracker.jpg"
            projectImageAlt="Image of natural events tracker tracker app"
            projectName="Natural Events World Tracker"
            projectDesc="A natural events tracker app being built using React and the NASA API."
            dateCompleted="2024"
            link="https://natural-disasters-tracker-dbwnc58q3-terminader7s-projects.vercel.app/"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ProjectContainer
            projectImagePath="/images/github-app.jpg"
            projectImageAlt="Image of github finder app"
            projectName="Github Finder"
            projectDesc="A simple React app that allows you to search for Github users and view their profile and repos using React and Node.js."
            link="https://github-finder-git-master-terminader7s-projects.vercel.app/"
            dateCompleted="2021"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ProjectContainer
            projectName="Hoops Hoopla"
            projectDesc="Nba stat tracker app being built using SQL, Next, and MUI"
            dateCompleted="2024"
            link="https://github.com/terminader7/Hoops-Hoopla"
            isWiP
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ProjectContainer
            projectImagePath="/images/contact-keeper.jpg"
            projectImageAlt="Image of contact keeper app"
            projectName="Contact Keeper"
            projectDesc="Full stack MERN application for keeping track of contacts. Built with React, Node.js, Express, and MongoDB."
            dateCompleted="2022"
            link="https://github.com/terminader7/Contact-Keeper"
            isRetired
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectsGrid;
