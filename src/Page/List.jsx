import Button from "../Components/Button";
import Refrexion from "../assets/img/zona/reflexion.jpeg";
import "../Css/list.scss";
import { useState } from "react";
import Item from "../Components/Item";
import Cartel from '../assets/img/texture/cartel.png'
import { FiChevronsRight,FiChevronsLeft } from "react-icons/fi";


import Secret from "../assets/img/zona/reflexion.jpeg";

const List = () => {
  const [open, setOpen] = useState(false);

  const valores = window.location.search;
  const urlParams = new URLSearchParams(valores);
  var name = urlParams.get("world");

  const world = [
    {
      title: "Secret",
      description: "The biggest secrets are the ones that never come to light.",
      image: { Secret },
    },
    {
      title: "Poems",
      description: "The biggest secrets are the ones that never come to light.",
      image: { Secret },
    },
  ];
  const result = world.filter((world) => world.title === name);
  console.log(result)

  return (
    <div className="containerList">
      <img src={result.image} alt="background-list" className="backgroundlist" />
      
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
           <div className="contentItem">
              <div className="search">
                <input type="text" placeholder="Search" />
              </div>
              <div className="pizarra">
                <span className="sign">
                  <img src={Cartel} alt="cartel"  className="cartel"/>
                </span>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <div className="pagination">
                <FiChevronsLeft/> 1 ... 30 <FiChevronsRight/>
                </div>
              </div>
           </div>
        </div>
        }
    </div>
  );
};

export default List;
