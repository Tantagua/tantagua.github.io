import React from "react";
import { LightBox } from "react-lightbox-pack";
import "react-lightbox-pack/dist/index.css";
import data from "./data.json"; // <--- Importing Sample JSON Data

export default function Galeria() {
  // State
  const [toggle, setToggle] = React.useState(false);
  const [sIndex, setSIndex] = React.useState(0);

  // Handler
  const lightBoxHandler = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };

  return (
    <div>
      {data.map((item, index) => (
        <>
          <img
            key={item.id}
            src={item.image}
            alt={item.title}
            style={{ maxHeight: "33vh", maxWidth: "28vw", margin: "1vh" }}
            onClick={() => {
              lightBoxHandler(true, index);
            }}
          />
        </>
      ))}

      <LightBox
        state={toggle}
        event={lightBoxHandler}
        data={data}
        
        imageWidth="60vw"
        imageHeight="70vh"
        thumbnailHeight={50}
        thumbnailWidth={50}
        setImageIndex={setSIndex}
        imageIndex={sIndex}
      />
    </div>
  );
}
