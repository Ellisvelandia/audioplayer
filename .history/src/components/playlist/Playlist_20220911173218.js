import React, {useContext} from 'react'

let Playlist = () => {
  return (
    <div className='playlist'>
      <ul className='loi'>
   {
    songsList.map(
      (song,i) =>
      <li className='songC'></li>
    )
   }
      </ul>
    </div>
  )
}

export default Playlist