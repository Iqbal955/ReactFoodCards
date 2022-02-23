import React, { useState, useEffect } from "react";
import axios from "axios";
import Food from "./Food.js";
import { Grid } from "@mui/material";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ClassNames } from "@emotion/react";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    heigth: 200,
    verticalAlign: "middle",
  },
});

function FoodList() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <Grid
      container
      spacing={2}
      style={{ marginTop: "250px", maxHeight: "120px" }}
      align="center"
      justify="center"
      justifyContent="center"
      alignItems="center"
    >
      {data.map((FoodData) => {
        return (
          <Grid item className={classes.root}>
            <Card sx={{ maxWidth: 150 }}>
              <CardMedia component="img" image={FoodData.thumbnailUrl} />
              <Typography variant="body2" color="text.secondary">
                {FoodData.title}
              </Typography>
              <CardActions />
              <Button
                size="small"
                onClick={() => {
                  navigate(`/${FoodData.id}`, { state: { data: FoodData } });
                }}
              >
                Learn More
              </Button>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default FoodList;
