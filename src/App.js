import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Images from "./content/Images"
import Descriptions from "./content/Descriptions"

function App() {

  // Setting up data for prop 
  const [nasaData, setNasaData] = useState(null)
  useEffect(() => {
    const getData = () => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=7hZufxNLloTMNrWdIJZuvzaAobjgoxMMwyykhCua")
      .then((res) => {
        setNasaData(res.data)
        // console.log(res.data)
      })
      .catch((err) => {
        console.dir(err)
      })
    }
    getData()
  }, [])


  if (!nasaData) return <h3>Loading...</h3>;
  return (
    <div className="App">
      <Images nasaData={nasaData.hdurl}/>
      <h1>NASA PHOTO OF THE DAY</h1>
      <Descriptions nasaData={nasaData.explanation}/>
    </div>
  );
}

export default App;
