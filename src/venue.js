import React, { useState } from "react";

const Venue = () => {
  const [randomImage, setRandomImage] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const images = [
    "https://media.tenor.com/Srnj6pMFsPoAAAAM/angry-cute.gif",
    "https://media.tenor.com/nqNmASdokgUAAAAM/good-morning.gif",
    "https://media1.tenor.com/m/KCiwAge-inQAAAAC/efgg.gif",
  ];
  const handleButtonClick = (e) => {
    console.log(e);
    if (e === "3") {
      const randomIndex = Math.floor(Math.random() * images.length);
      const selectedImage = images[randomIndex];
      setRandomImage(selectedImage);
    } else if (e === "2") {
      setRandomImage(
        "https://media.tenor.com/Vxo4EHquZkIAAAAj/tkthao219-bubududu.gif"
      );
      setDisabled(true);
    } else {
      setRandomImage(
        "https://media.tenor.com/8gJYQy7k_NUAAAAj/tkthao219-bubududu.gif"
      );
      setDisabled(true);
    }
  };
  return (
    <>
      {!disabled && (
        <>
          {" "}
          <h2>Please choose a venue</h2>
          <div className="venues">
            <button onClick={() => handleButtonClick("1")}>
              Art Exhibition
            </button>
            <button onClick={() => handleButtonClick("2")}>Club</button>
            <button onClick={() => handleButtonClick("3")}>
              Hehe...both
              <br />
              {randomImage && `(aye!)`}
            </button>
          </div>
        </>
      )}
      {randomImage && (
        <>
          {disabled && <h2>Okayy bubu</h2>}
          <img src={randomImage} alt="Random Image" />
        </>
      )}
    </>
  );
};

export default Venue;
