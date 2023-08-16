import '../Css/post.scss'
import Postmain from '../assets/img/main2.jpeg'

const Post = () => {
  return (
    <>
        <div className="containerPost">
          <img src={Postmain} alt="mainPost" className='mainPost' />
        </div>
    </>
  )
}

export default Post