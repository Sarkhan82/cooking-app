import axios from "axios";
import React, { useEffect, useState } from "react";
import Meals from "./Meals";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    axios
      .get("https://themealdb.com/api/json/v1/1/search.php?s=" + inputValue)
      .then((res) => setData(res.data.meals));
  }, [inputValue]);
  return (
    <div className="app-container">
      <h1>React Cooking App</h1>
      <input
        type="text"
        placeholder="Tapez le nom d'un aliment (en anglais)"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="meals-container">
        {data &&
          data
            .slice(0, 24)
            .map((meal, index) => <Meals key={index} meal={meal} />)}
      </div>
    </div>
  );
};

export default App;
