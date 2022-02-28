import React from "react";
import { useLocation } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    heigth: 200,
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

function Pet() {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state;

  return (
    <Grid
      container
      align="center"
      justify="center"
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: "100px", maxHeight: "100vh" }}
      spacing={4}
      xs={12}
      md={12}
      lg={12}
    >
      <Grid item>
        <img src="https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80" />
      </Grid>
      <Grid item>
        <h2>Details</h2>
        <Typography>Name: {data.name}</Typography>
        <Typography>Age: {data.age}</Typography>
        <Typography>Breed: {data.animal_type}</Typography>
        <Typography>Color: {data.color}</Typography>
        <Button
          onClick={() => {
            navigate(`/${data.id}/edit`, { state: { data: data } });
          }}
        >
          Edit
        </Button>
      </Grid>
    </Grid>
  );
}

export default Pet;
