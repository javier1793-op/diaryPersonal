import '../Css/videoModal.scss'
import ReactPlayer from 'react-player'

const VideoModal = () => {
  return (
    <div className="containervideoModal">
      <ReactPlayer
          url={'https://www.youtube.com/watch?v=33PIIljnTPE'}
         
          width='100%'
          height='100%'
        />
    </div>
  )
}

export default VideoModal