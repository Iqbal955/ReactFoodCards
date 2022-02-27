import React, { useState, useEffect } from "react";
import axios from "axios";
import Pet from "./Pet.js";
import { Grid } from "@mui/material";
import {
  BrowserRouter as Router,
  useParams,
  useNavigate,
} from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    heigth: 200,
    verticalAlign: "middle",
  },
});

function PetList() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    fetch("https://pet-store-api.herokuapp.com/api/v1/pets/?format=json")
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
      {data.map((PetData) => {
        return (
          <Grid item className={classes.root}>
            <Card sx={{ maxWidth: 150 }}>
              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
              />
              <Typography variant="body2" color="text.secondary">
                {PetData.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - {PetData.animal_type}
              </Typography>
              <CardActions />
              <Button
                size="small"
                onClick={() => {
                  navigate(`/${PetData.id}`, { state: { data: PetData } });
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

export default PetList;
