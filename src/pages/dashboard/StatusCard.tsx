import {
  Box,
  Card,
  CardContent,
  Typography,
  makeStyles,
  LinearProgress,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    [theme.breakpoints.up("md")]: {
      width: "60em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "20em",
    },
  },
  title: {
    fontWeight: 600,
  },
}));

export default function HomeButton() {
  const classes = useStyles();
  const [userStatus] = useState<number>(() => {
    return 20;
  });

  return (
    <Box m={4}>
      <Card className={classes.root}>
        <CardContent>
          <Box mb={3}>
            <Typography
              variant="h5"
              component="h2"
              align="center"
              className={classes.title}
            >
              Status
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Box width="100%" mr={2}>
              <LinearProgress variant="determinate" value={20} />
            </Box>
            <Box>
              <Typography
                variant="body2"
                color="textSecondary"
              >{`${userStatus}%`}</Typography>
            </Box>
          </Box>
          {/* TODO: Get status from Firebase, set according text and progressbar values */}
          <Box mt={3}>
            <Typography variant="body2" component="p" align="center">
              Registered
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}