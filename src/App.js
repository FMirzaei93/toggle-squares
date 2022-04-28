import logo from "./logo.svg";
import React from "react";
import "./index.css";
import boxes from "./boxes";
import Box from "./Box";

function App() {
  // --------------------------- .map function -------------------------------

  // .map function returns a new array without modifying the original array,
  //that will have the same length as the original array,
  //and whatever that we return in its callback function, is what will get placed in the same index in the new array as what was in the original array.

  const [array, setArray] = React.useState(boxes);

  // An array of Box components
  const boxesArray = array.map((item) => (
    <Box key={item.id} clickHandler={toggle} onState={item.on} id={item.id} />
  ));

  function toggle(id) {
    //Here we can create a newArray exactly like the boxesArray using a for loop and only change the state of "on" property of the index with id = id(the parameter of this function)
    // *****PURPOSE : In setArray YOU ARE GOING TO RETURN THE NEW ARRAY IN THE END
    // setArray(prevArray=>{
    // const newArray =[]
    // for(let i=0; i<prevArray.length; i++){
    //     if (prevArray[i].id===id){
    //       newArray.push({...prevArray[i], on: !prevArray[i].on})
    //  }
    //  else {
    //    newArray.push(prevArray[i])
    //  }
    //   return newArray

    //setArray: Everytime that we click and this method is called, we want to update the state of our boxesArray, so we use setArray. Now update the array with what? here you'll see:
    //prevArray.map: Instead of using for loop and create a newArray and replace it as a new state with the prev version of our array, we can use .map function that create a new array with the items that we define.
    setArray((prevArray) => {
      return prevArray.map((item) => {
        //what's gonna happen to each item of prevArray? here you'll see:
        return item.id === id ? { ...item, on: !item.on } : item;
      });
    });
  }

  return <div className='App'>{boxesArray}</div>;
}

export default App;
