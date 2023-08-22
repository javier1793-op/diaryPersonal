import Refrexion from '../assets/img/zona/reflexion.jpeg'
import '../Css/list.scss'

const List = () => {
  return (
    <div className="containerList">
         <img
            src={Refrexion}
            alt="background-list"
            className="backgroundlist"
          />
    <div className="contentList">
        aca el contenido
    </div>
    </div>
  )
}

export default List