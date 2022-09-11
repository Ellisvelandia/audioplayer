import React, {useContext} from 'react'
import songsList form "../../context/songs
"

let Playlist = () => {
  return (
    <div className='playlist'>
      <ul className='loi'>
   {
    songsList.map(
      (song,i) =>
      <li className='songContainer'></li>
    )
   }
      </ul>
    </div>
  )
}

export default Playlist