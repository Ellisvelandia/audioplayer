import React from "react";
import './main.css'
import './input.css'


let AudioPlayer = () => {
  return (
    <div className="audioplayer">
     <div className="inside_content">
     <Header/>
     <Actions/>
     <Playlist/>
     </div>
    </div>
  )
}

export default AudioPlayer;