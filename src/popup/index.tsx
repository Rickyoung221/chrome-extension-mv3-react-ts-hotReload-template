import * as React from 'react';
import "./style.css";
import CustomButtonDemo from '../components/CustomButtonDemo';
//import Content from '../content_script';

function Popup(){
    return(
        <div className = 'App' >
            <h1> This is popup page. Using CRA and MV3.  </h1>
            <CustomButtonDemo
                border={''} 
                color={'yellow'} 
                height={'80px'} 
                onClick={() => console.log("You clicked on the pink circle!")}
                radius={'50%'} 
                width={'80px'} 
                children = 'Button in Popup'
            />
        </div>
    )
}
export default Popup;