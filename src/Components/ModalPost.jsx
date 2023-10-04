import '../Css/modalPost.scss'
import { GrClose } from "react-icons/gr";
import Post from './Post';

const ModalPost = ({setModal,Postselect}) => {

  
  return (
    <div className="containerModalPost">
        <section className="headModal">

        <GrClose className='iconCloseModal'
        onClick={()=>{setModal(false)}}
        />
        </section>
        <section className="bodyModalPost">
          <h1>{Postselect.title}</h1>
          <h4>{Postselect.subtitle}</h4>
          <div className="genresPost">
            {(Postselect.category).map(en=>
              <span>
                {en}
              </span>
            )}
          </div>
          <h4>{Postselect.image}</h4>
          <h4>{Postselect.video}</h4>
          <p>{Postselect.content}</p>
        </section>
    </div>
  )
}

export default ModalPost