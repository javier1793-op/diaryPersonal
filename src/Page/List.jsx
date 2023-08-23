import Button from "../Components/Button";
import Refrexion from "../assets/img/zona/reflexion.jpeg";
import "../Css/list.scss";
import { useState } from "react";

const List = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="containerList">
      <img src={Refrexion} alt="background-list" className="backgroundlist" />
      
        {!open &&
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
              <Button name={"Open list"} setOpen={setOpen} />
            </div>
          </div>
      </div>
        }
        {open &&
        <div className="contentTable">
           <div className="contentItem">aca el listado</div>
        </div>
        }
    </div>
  );
};

export default List;
