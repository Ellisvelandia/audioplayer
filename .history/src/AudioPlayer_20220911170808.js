import React from "react";
import './main.css'
import './input.css'


let AudioPlayer = () => {
  return (
    <div className="audioplayer">
     <div className="inside_content">
     <Header/>
     <Actions/>
     <Header/>
     </div>
    </div>
  )
}

export default AudioPlayer;