import '../Css/modalPost.scss'
import { GrClose } from "react-icons/gr";

const ModalPost = ({setModal}) => {

  return (
    <div className="containerModalPost">
        <section className="headModal">

        <GrClose className='iconCloseModal'
        onClick={()=>{setModal(false)}}
        />
        </section>
    </div>
  )
}

export default ModalPost