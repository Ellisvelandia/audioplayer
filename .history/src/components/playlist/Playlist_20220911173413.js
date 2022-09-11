import React, { useContext } from "react";
import {song_list} from "../../context/songs";

let Playlist = () => {
  return (
    <div className="playlist">
      <ul className="loi">
        {song_list.map((song, i) => (
          <li className="songContainer"></li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
