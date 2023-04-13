import { useState } from "react";
import "./App.css";
import Quotebox from "./components/Quotebox";
import db from "./db/quotes.json";

// https://jsonblob.com/918261686465740800
// 1.- crear archivo quotes.json que será nuestra db (fake)
// 2.- importar el archivo json

const arrayColors = ["#00c6ab", "#c8ad8d", "#f86f6f", "#6aa3b4", "#3f8880", "#d6ebc1", "#7795ec", "#9fc368", "#d2f35b", "#bdffe0", "#bdffe0", "#8d6f5a"];

const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length;
  const randomIndex = Math.floor(Math.random() * quantityValues);
  return arrayElements[randomIndex];
};

function App() {
  const [quote, setQuote] = useState(getRandom(db));

  const [color, setColor] = useState(getRandom(arrayColors))

  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColors))
  }

  console.log(getRandom(db));

  return (
    <div className="App" style={{backgroundColor: color}}>
      <Quotebox 
      quote={quote} 
      newQuote={newQuote} 
      color={color} />
    </div>
  );
}

export default App;
