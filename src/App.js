import React from "react";
import FoodList from "./FoodList";
import Food from "./Food";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FoodList />}></Route>
        <Route path="/:id" element={<Food />}></Route>
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
        <Foodlist />
      </div>
    );
  }
} 
export default App; /* 


const FoodCard = (props) => {
  return (
    <div>
      <img src={props.img} alt={props.img} />

      <div>{props.Description}</div>
      <button onClick={() => toggleModal(props)}>MoreInfo</button>
    </div>
  );
};

const Foodlist = () => {
  const data = [
    {
      íd: 1,
      img: "google.com",
      Description: "i am testing things out",
    },
  ];

  return (
    <>
      {data.map((food) => (
        <FoodCard {...food} />
      ))}
    </>
  );
};

const Food = (props) => {
  return (
    <div>
      <div>Title</div>
      <img src={props.img} alt={props.img} />
      <div>{props.Description}</div>
      <button onClick={() => navigate("food")}>MoreInfo</button>
    </div>
  );
}; */
