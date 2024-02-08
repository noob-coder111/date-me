import { useState } from "react";
import "./App.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import Venue from "./venue";

function App() {
  const [yesLabel, setYesLabel] = useState("Yes");
  const [noLabel, setNoLabel] = useState("No");
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const gifURL1 =
    "https://media.tenor.com/0imRtuzqccIAAAAi/bubu-dudu-flower-gift.gif";
  const gifURL2 = "https://media.tenor.com/3DR7cG_N_w0AAAAj/bubu-dudu-bubu.gif";
  const handleNo = (e) => {
    if (e === "No") {
      setNoLabel(yesLabel);
      setYesLabel(noLabel);
    }
    setActive(true);
  };
  return (
    <div className="container">
      {active ? (
        <img src={gifURL2} alt="Your GIF" />
      ) : (
        <img src={gifURL1} alt="Your GIF" />
      )}
      <h1>Will You be my Valentine??</h1>
      <div className="buttons">
        <button
          onClick={() => {
            handleNo(yesLabel);
          }}
        >
          {yesLabel}
        </button>
        <button
          onClick={() => {
            handleNo(noLabel);
          }}
        >
          {noLabel}
        </button>
      </div>
      {active && (
        <div>
          <h1>Thankyou for being my Valentine!</h1>
          <h2>Where do you wanna go for our Date?</h2>
          <h3
            onClick={() => {
              navigate("/venue");
            }}
          >
            Please click here to fix our date
          </h3>
        </div>
      )}
    </div>
  );
}

export default App;
