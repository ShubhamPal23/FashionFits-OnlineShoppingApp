import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayFunction from "./Pages/display-page";
import MyNav from "./Components/MyNav";
import ImageSlider from "./Components/ImageSlider";
import images from "./Components/images"

function App() {
  return (
    <div id="main">
      <MyNav/>
      <ImageSlider>
        {images.map((image,index)=>{
          return(
          <img key={index} src={image.imgurl} alt={image.imgalt} style={{width:"50%",height:"440px",objectFit:"fill",margin:"0 auto",display:"block"}} />)
        })}
      </ImageSlider>
      <DisplayFunction />
    </div>
  );
}

export default App;
