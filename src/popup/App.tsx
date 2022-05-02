import * as React from "react";
import "./index.css";
import CustomButtonDemo from "../components/CustomButtonDemo";
//import Content from '../content_script';

function Popup() {
  return (
    <div className="App">
      <h1> This is popup page. Using CRA and MV3. </h1>
      <CustomButtonDemo
        border={""}
        color={"yellow"}
        height={"80px"}
        onClick={() => console.log("You clicked on the yellow circle! Popup works.")}
        radius={"50%"}
        width={"80px"}
        children="Button in lili"
      />
    </div>
  );
}
export default Popup;