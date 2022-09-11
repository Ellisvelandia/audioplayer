import React from "react";
import './main.css'
import './input.css'
import Header from "./components/Header";
import Actions from "./components/playlist/Actions";
import Playlist from "./components/playlist/Playlist";


let AudioPlayer = () => {
  return (
    <div className="audioplayer">
     <div className="inside_content">
     <Header/>
     <Actions/>
     <Playlist/> 
     </div>
   {/* <Controls/> */}
    </div>
  )
}

export default AudioPlayer;