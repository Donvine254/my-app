import React, { useState } from "react";

const Child = ({
  name,
  handleCommunication,
  handleSiblingCommunication,
  fruits,
  image,
  response,handleResponse
}) => {
  const [childFruits, setChildFruits] = useState([]);

  const handleParentToChildCommunication = () => {
    if (fruits.length > 0) {
      setChildFruits((prevChildFruits) => [...prevChildFruits, fruits[0]]);
      handleCommunication();
    }
  };

  const handleSiblingToSiblingCommunication = () => {
    if (fruits.length > 1) {
      const siblingFruit = fruits[1];
      setChildFruits((prevChildFruits) => [...prevChildFruits, siblingFruit]);
      handleSiblingCommunication(siblingFruit);
    }
    handleResponse();
  };
  const buttonLabel = name === "Jane" ? "Give me some bro" : "Give me some siz";

  return (
    <div id="child">
      <h3>{name}</h3>
      <img src={image} alt="childImage" />
      <p id="fruitsList">Held Fruits: {childFruits.join(", ")}</p>
      <button onClick={handleParentToChildCommunication}>
        Mom, I'm Hungry
      </button>
      <button onClick={handleSiblingToSiblingCommunication}>
        {buttonLabel}
      </button>
      <p>{response}</p>
    </div>
  );
};

export default Child;
