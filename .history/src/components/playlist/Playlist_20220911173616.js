import React, { useContext } from "react";
import {song_list} from "../../context/songs";

let Playlist = () => {
  return (
    <div className="playlist">
      <ul className="loi">
        {song_list.map((song, i) => (
              <li
              className={'songContainer ' + (currentSong === i ? 'selected' : '')}
              key={i}
              onClick={() => {
                SetCurrent(i)
              }}
            >
              <div className="tmbn_song">
                <i className="fas fa-play"></i>
              </div>
              <div className="songmeta_playlist">
                <span className="songname">{song.title}</span>
                <span className="songauthors">{song.artistName}</span>
              </div>
              <div className="playlist_btns_group">
                <button className="fav_song playlist_btn">
                  <i className="far fa-heart fa-lg"></i>
                </button>
                <button className="options_song playlist_btn">
                  <i class="fas fa-ellipsis-v fa-lg"></i>
                </button>
              </div>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
