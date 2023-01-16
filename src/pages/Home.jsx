import { Context } from "../Context.jsx";
import React, { useContext } from "react";




function Home() {

  const { photos } = useContext(Context);

    const displayImages = photos.map(photo=>{
      return (
        <img src={photo.url}></img>
      )
    })

    return (
      <div>
        <h1>This is the home page</h1>
        {displayImages}
      </div>
    );
  }
  
  export default Home;