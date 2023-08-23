import '../Css/head.scss'
import Button from './Button'
import Song from '../assets/img/song.png'
import Songtach from '../assets/img/songtach.png'
import { useState } from 'react'

const Head = ({setSong, song}) => {

  const [active, setActive] = useState(false)
  const [songicon, setSongicon] = useState(Song)

  const handleSong =()=>{
    setSong(!song)
    setActive(!active)

    if(!active){
      setSongicon(Songtach)
    }else{
      setSongicon(Song)
    }
  }


  return (
    <div className="containerHead">
      <div className={`contentSong ${active?'active':''}`}
        onClick={handleSong}
      >
       <img src={songicon} alt="Logotiposong" />
      </div>
       <div className="menu">
        <Button name={'Login'}/>
       </div>
    </div>
  )
}

export default Head