import { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [fruits, setFruits] = useState([
    "🍏",
    "🍎",
    "🍈",
    "🍉",
    "🍇",
    "🍋",
    "🍌",
    "🍍",
    "🥭",
    "🍏",
    "🍎",
    "🍈",
    "🍉",
    "🍇",
    "🍋",
    "🍌",
    "🍍",
    "🥭",
  ]);
  const [johnResponse, setJohnResponse] = useState("");
  const [janeResponse, setJaneResponse] = useState("");
  const johnImage =
    "https://media.istockphoto.com/id/507032033/photo/im-one-cute-baby.jpg?s=612x612&w=0&k=20&c=b_PRUOvU7729cnXh8Wd_UyVD4waDqg-1DDkB0VR2Z3U=";
  const janeImage =
    "https://st3.depositphotos.com/1037987/15659/i/450/depositphotos_156592006-stock-photo-cute-baby-girl.jpg";

  const handleChildToParentCommunication = () => {
    setFruits((prevFruits) => prevFruits.slice(1)); // Remove the first fruit
  };
  const handleSiblingCommunication = (fruit) => {
    const updatedFruits = fruits.filter((f) => f !== fruit);
    setFruits(updatedFruits);
  };
  function handleResponse() {
      setJaneResponse("no, ask mom!");
      setJohnResponse("okay");
  }

  return (
    <>
      <div id="parent">
        <h2>Parent</h2>
        <img
          id="parentImg"
          src="https://thumbs.dreamstime.com/b/african-woman-holding-basket-fruits-isolated-white-background-cut-out-187186595.jpg"
          alt="Parent Image"
        />
        <p id="fruitsList">Fruits: {fruits.join(", ")}</p>
      </div>
      <div id="children">
        {" "}
        <Child
          name="John"
          image={johnImage}
          handleCommunication={handleChildToParentCommunication}
          handleSiblingCommunication={handleSiblingCommunication}
          handleResponse={handleResponse}
          response={johnResponse}
          fruits={fruits}
        />
        <Child
          name="Jane"
          image={janeImage}
          handleCommunication={handleChildToParentCommunication}
          handleSiblingCommunication={handleSiblingCommunication}
          fruits={fruits}
          response={janeResponse}
          handleResponse={handleResponse}
        />
      </div>
    </>
  );
};

export default Parent;
