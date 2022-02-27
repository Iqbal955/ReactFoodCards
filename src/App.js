import React from "react";
import PetList from "./components/PetList";
import UpdatePet from "./components/UpdatePet";
import Pet from "./components/Pet";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PetList />}></Route>
        <Route path="/:id" element={<Pet />}></Route>
        <Route path="/:id/edit" element={<UpdatePet />}></Route>
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
