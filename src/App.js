import React from "react";
import PetList from "./components/PetList";
import UpdatePet from "./components/UpdatePet";
import Pet from "./components/Pet";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import CreatePet from "./components/CreatePet";
import NavBar from "./utils/NavBar";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3006/pets")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<PetList data={data} />}></Route>
        <Route path="/:id" element={<Pet />}></Route>
        <Route
          path="/:id/edit"
          element={<UpdatePet data={data} setData={setData} />}
        ></Route>
        <Route
          path="/create"
          element={<CreatePet data={data} setData={setData} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

// Create he card component
//import React from "react";

/* import { useParams } from "react-router-dom";

import PropTypes from "prop-types";
import React, { Component } from "react";

export class App extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <Petlist />
      </div>
    );
  }
} 
export default App; /* 


const PetCard = (props) => {
  return (
    <div>
      <img src={props.img} alt={props.img} />

      <div>{props.Description}</div>
      <button onClick={() => toggleModal(props)}>MoreInfo</button>
    </div>
  );
};

const Petlist = () => {
  const data = [
    {
      íd: 1,
      img: "google.com",
      Description: "i am testing things out",
    },
  ];

  return (
    <>
      {data.map((Pet) => (
        <PetCard {...Pet} />
      ))}
    </>
  );
};

const Pet = (props) => {
  return (
    <div>
      <div>Title</div>
      <img src={props.img} alt={props.img} />
      <div>{props.Description}</div>
      <button onClick={() => navigate("Pet")}>MoreInfo</button>
    </div>
  );
}; */
