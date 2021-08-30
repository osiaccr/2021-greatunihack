import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "20em",
  },
}));

interface HomeButtonProps {
  pageDetails: {
    link: string;
    name: string;
    description: string;
    external?: boolean;
  };
}

export default function HomeButton(props: HomeButtonProps) {
  const { pageDetails } = props;
  const classes = useStyles();
  const history = useHistory();

  const handleOnClick = useCallback(() => {
    pageDetails.external
      ? (window.location.href = pageDetails.link)
      : history.push(pageDetails.link);
  }, [history, pageDetails.link, pageDetails.external]);

  return (
    <Box m={4}>
      <Card className={classes.root}>
        <CardActionArea onClick={handleOnClick}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {pageDetails.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {pageDetails.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
