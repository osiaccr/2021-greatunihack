import { Container, Button, Box, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import CountdownTimer from "src/components/landing/CountdownTimer";
import Logo from "src/images/logo512.png";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: "#a59132",
    color: "#fafdf6",
  },
  media: {
    [theme.breakpoints.up(600)]: {
      width: "70%",
    },
    width: "90%",

    marginLeft: "10px",
    marginTop: "10px",
  },
  title: {
    marginBottom: "20px",
  },
  box: {
    padding: "10px",
    paddingTop: "5em",
  },
  info: {
    padding: "30px",
  },
  plug: {
    marginTop: "20px",
  },
  nuclear: {
    color: "#ddd92a",
  },
  button: {
    marginTop: "30px",
    marginLeft: "5px",
    backgroundColor: "#a59132",
    border: "1px solid #fafdf6",
    color: "#fafdf6",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#fafdf6",
      color: "black",
    },
  },
}));

export default function Launch() {
  const classes = useStyles();
  const [earlyRestrict] = useState(() => {
    const currentTime = new Date();
    const hackathonTime = Date.parse(`${process.env.REACT_APP_HACKATHON_DATE}`);
    if (currentTime.getTime() < hackathonTime - 432000000) {
      // hackathonTime - 5 DAYS
      return true;
    } else {
      return false;
    }
  });
  return (
    <div className={classes.hero}>
      <Container>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          className={classes.box}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <img src={Logo} className={classes.media}></img>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={classes.info} pt={5}>
                <Typography variant="h4" className={classes.title}>
                  27th - 28th November
                </Typography>
                <CountdownTimer />
                <Typography variant="h6" className={classes.plug}>
                  Join us for another coding challenge, with a theme of{" "}
                  <a className={classes.nuclear}>NUCLEAR FALLOUT</a>. There is a
                  lot to enjoy and take part in!
                </Typography>
                <Box>
                  {earlyRestrict ? (
                    <Button
                      variant="contained"
                      component={Link}
                      to="/apply"
                      className={classes.button}
                    >
                      Apply Now!
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      component={Link}
                      to="/login"
                      className={classes.button}
                    >
                      Log in
                    </Button>
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
