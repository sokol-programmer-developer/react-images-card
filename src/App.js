import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./App.css"


// const url = "./data.js";
const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [load, setLoad] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    let newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const getTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoad(false);
    } catch (error) {
      setLoad(false);
    }
  };
  useEffect(() => {
    getTours();
  }, []);
  if (load) {
    return <Loading/>;
  }
  if (tours.length === 0) {


    return (
        <div className="container-title">
          <div className="app-title">
            <h2 className="app-title-h2">There's no more tours</h2>
            <button onClick={() => getTours()} className="app-btn">
             <h2>Show again</h2>
            </button>
          </div>
        </div>
    );
  }


  return (
      <div className="container-tours">
        <Tours tours={tours} removeTour={removeTour} />
      </div>
  );
}



export default App;