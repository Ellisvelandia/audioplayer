import React, {useContext} from 'react'

let Playlist = () => {
  return (
    <div className='playlist'>
      <ul className='loi'>
   {
    songsList.map(
      ()
    )
   }
      </ul>
    </div>
  )
}

export default Playlist