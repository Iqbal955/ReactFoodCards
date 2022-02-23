import React from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "center",
  },
}));

function Food() {
  const classes = useStyles();
  const location = useLocation();
  const { data } = location.state;

  return (
    <Grid
      container
      align="center"
      justify="center"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
      spacing={4}
      xs={12}
      md={12}
      lg={12}
    >
      <Grid item>
        <img src={data.thumbnailUrl} />
      </Grid>
      <Grid item>
        <Typography>Hello</Typography>
      </Grid>
    </Grid>
  );
}

export default Food;
