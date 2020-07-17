import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {

  // Setting up data for prop 
  const [nasaData, setNasaData] = useState(null)
  useEffect(() => {
    const getData = () => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=7hZufxNLloTMNrWdIJZuvzaAobjgoxMMwyykhCua")
      .then((res) => {
        setNasaData(res.data)
      })
      .catch((err) => {
        console.dir(err)
      })
      getData()
    }
  }, [])



  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
