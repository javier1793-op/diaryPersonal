import Button from '../Components/Button'
import Refrexion from "../assets/img/zona/reflexion.jpeg";
import "../Css/list.scss";

const List = () => {
  return (
    <div className="containerList">
      <img src={Refrexion} alt="background-list" className="backgroundlist" />
      <div className="contentList">
        <div className="contentIntro">
           <div className="titleSecret">
          <div className="title-inner">
            <div className="mozart titleAventure">
              <div className={`mozart-innerSecret`}>Secret</div>
            </div>
            
          </div>
        </div>
        <span className={`spanDescription `}>
            The biggest secrets are <br /> the ones that never come to light.
            </span>
            <div className="btnopenlist">

            <Button name={'Open list'} />
            </div>
        </div>
       
      </div>
    </div>
  );
};

export default List;
