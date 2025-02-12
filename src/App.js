import { useState } from "react";
import "./App.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import Venue from "./venue";

function App() {
  const [yesLabel, setYesLabel] = useState("Yes");
  const [noLabel, setNoLabel] = useState("No");
  const [image, setImage] = useState("https://media1.tenor.com/m/n1D_257ONacAAAAC/yap-yapping.gif");
  const [label, setLabel] = useState("Will you go on a date with me?");
  const [gift, setGift] = useState("");
  const navigate = useNavigate();

  const sadLabels = ["Why!?", "Please", "Think again"];
  const sadImages = ["https://media1.tenor.com/m/M_HYbyotRHwAAAAd/sad.gif", "https://media1.tenor.com/m/qKFNYB3HB9YAAAAC/cat-tiktok.gif", "https://media.tenor.com/LlxPGK7ACcgAAAAi/sad-cat.gif"];

  const handleYes = () => {
    window.location.href = "/venue";
  };

  const handleNo = () => {
    setImage(sadImages[Math.floor(Math.random() * sadImages.length)]);
    setLabel(sadLabels[Math.floor(Math.random() * sadLabels.length)]);
    setNoLabel("No?🥺")
  };

  return (
    <div className="container">
      <img src={image} alt="Your GIF" />
      <h1>{label}</h1>
      <div className="buttons">
        <button
          onClick={handleYes}
        >
          {yesLabel}
        </button>
        <button
          onClick={handleNo}
        >
          {noLabel}
        </button>
      </div>
    </div>
  );
}

export default App;




