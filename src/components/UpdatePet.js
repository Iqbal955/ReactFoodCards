import React, { Component, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useLocation } from "react-router-dom";

import Button from "@mui/material/Button";
import {
  BrowserRouter as Router,
  useParams,
  useNavigate,
} from "react-router-dom";

function UpdatePet() {
  const location = useLocation();
  const { data } = location.state;

  const [pet, setPet] = useState(data);

  console.log(pet);

  function handleChange(e) {  // e is the event
    const newdata= {...pet};
    newdata[e.target.name] = e.target.value;
    setPet(newdata);
    console.log(newdata);

  /*   handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }; */

  return (
    <form /* onSubmit={handleSubmit} */>
      <div>
        <label>Email address</label>
        <input
        /*        type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange()}
          value={email} */
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default UpdatePet;
/*   const columns = [
    { field: "name", headerName: "Name", width: 180, editable: true },
    { field: "age", headerName: "Age", type: "number", editable: true },
    {
      field: "breed",
      headerName: "Breed",
      type: "name",
      width: 180,
      editable: true,
    },
  ];

  const rows = [
    {
      id: data.id,
      name: data.name,
      age: data.age,
      breed: data.animal_type,
    },
  ];

  return (
    <div style={{ height: 300, width: "35%", align: "center" }}>
      {console.log(data)}
      <DataGrid rows={rows} columns={columns} />
      <Button>Save</Button>
    </div>
  ); */
