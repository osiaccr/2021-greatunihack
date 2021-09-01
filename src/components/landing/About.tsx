import { Typography, Grid, Container, makeStyles } from "@material-ui/core";
const useStyle = makeStyles(() => ({
  root: {
    padding: "10px",
  },
}));

export default function About() {
  const classes = useStyle();
  return (
    <div id="about">
      <Container className={classes.root}>
        <Typography variant="h4" align="center">
          About Us
        </Typography>
        <Grid container xs={12} sm={6} md={4}>
          <Grid item>
            <Typography style={{ fontSize: "20px", padding: "20px" }}>
              We are GreatUniHack, an annual 24-hour student-oriented hackathon
              organised by the University of Manchester tech society, UniCS.
              Since 2014, we have brought together 2500 students from 88
              universities across Europe to work and develop innovative ideas in
              a competitive environment. This year&apos;s edition aims to
              introduce a new generation of developers with great potential for
              improving the technology industry and community through our online
              hackathon.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
