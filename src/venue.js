import React, { useState } from "react";

const Venue = () => {
  const [gift, setGift] = useState("");

  const handleGiftSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:deepak9709065815@gmail.com?subject=Gift Request&body=I want: ${gift}`;
    alert("Message sent!")
  };

  return (
    <>
      <img src="https://i.pinimg.com/736x/44/e3/6d/44e36da9eb3789bb300bda0fd532b429.jpg" />
      <h1>Thankyou for being my Valentine!</h1>
      <h3 className="center-div">{`Let's go on a movie-cum(🌚)-dinner date`}</h3>
      <div style={{ margin: '10px' }}>
        <br /><br />
        <h4>Also, please enter some wishlist/suggestions reminder you wanna deliver.{`PS: You can enter any gift you wish for. It's anonymous!😉`}</h4>
        <form onSubmit={handleGiftSubmit}>
          <input
            type="text"
            value={gift}
            onChange={(e) => setGift(e.target.value)}
            placeholder="Type..."
            className="input"
            required
          />
          <button type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  )
}

export default Venue;
