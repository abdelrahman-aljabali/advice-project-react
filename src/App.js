import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState(null);
  const [error, setError] = useState(null);

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice);
        setError(null);
      })
      .catch((error) => {
        setError("Error fetching advice");
      });
  };

  return (
    <div className="App">
      <div className="card">
        {advice && <p>{advice}</p>}
        {error && <p className="error">{error}</p>}
        <button className="button" onClick={fetchAdvice}>
          Get Advice
        </button>
      </div>
    </div>
  );
}

export default App;
