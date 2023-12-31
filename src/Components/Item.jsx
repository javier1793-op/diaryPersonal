import "../Css/item.scss";
import Leaf from "../assets/img/texture/hoja.png";


const Item = ({setOpenModal}) => {
  return (
    <div className="containerItem">
      <div className="contentItemleft">
        <div className="titleItem">
          <img src={Leaf} alt="leaf" className="leaf" />
          titulo
        </div>
        <hr />
        <div className="descriptionItem">descripcion..</div>
      </div>
      <div className="contentItemright">
      <button className={`btnexplore active`}
      onClick={()=>{
        setOpenModal(true)
      }}
      >More..</button>
      </div>
    </div>
  );
};

export default Item;
