import Button from "../Components/Button";
import "../Css/list.scss";
import { useState } from "react";
import Item from "../Components/Item";
import Cartel from "../assets/img/texture/cartel.png";
import { FiChevronsRight, FiChevronsLeft, FiX } from "react-icons/fi";

import Secret from "../assets/img/zona/reflexion.jpeg";
import Poems from "../assets/img/zona/poems.jpeg";
import Reflextion from "../assets/img/zona/reflextion.jpeg";
import Memories from "../assets/img/zona/memories.jpeg";
import Present from "../assets/img/zona/recient.jpg";
import { Link } from "react-router-dom";
import Modal from "../Components/Modal";

const List = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  console.log(openModal)

  const valores = window.location.search;
  const urlParams = new URLSearchParams(valores);
  var name = urlParams.get("world");

  const handleopen = () => {
    setOpen(false);
  };

  const world = [
    {
      title: "Secret",
      description: "The biggest secrets are the ones that never come to light.",
      image: Secret,
    },
    {
      title: "Poems",
      description: "The poem is the rhythmic creation of beauty in words.",
      image: Poems,
    },
    {
      title: "Reflexion",
      description:
        "You can spend your life building walls, or you can live it letting them go.",
      image: Reflextion,
    },
    {
      title: "Memories",
      description: "the time that is enjoyed is the true time lived",
      image: Memories,
    },
    {
      title: "Present",
      description: "life is what happens when you are busy making other plans",
      image: Present,
    },
  ];
  const result = world.filter((world) => world.title === name);

  return (
    <div className="containerList">
      <img
        src={result[0].image}
        alt="background-list"
        className="backgroundlist"
      />
      <Link to="/diaryPersonal/">
        <button className={`btnexplore active back`}>
          <FiChevronsLeft />
          Back..
        </button>
      </Link>
      {!open && (
        <div className="contentList">
          <div className="contentIntro">
            <div className="titleSecret">
              <div className="title-inner">
                <div className="mozart titleAventure">
                  <div className={`mozart-innerSecret`}>{result[0].title}</div>
                </div>
              </div>
            </div>
            <span className={`spanDescription  `}>
              <div className="boxspanDescription">{result[0].description}</div>
            </span>
            <div className="btnopenlist">
              <Button name={"Open list"} setOpen={setOpen} />
            </div>
          </div>
        </div>
      )}
      {open && (
        <div className="contentTable">
          <div className="contentItem">
            <FiX className="close" onClick={handleopen} />
            <div className="search">
              <input type="text" placeholder="Search" />
            </div>
            <div className="pizarra">
              <span className="sign">
                <img src={Cartel} alt="cartel" className="cartel" />
              </span>
              <Item setOpenModal={setOpenModal}/>
              <Item setOpenModal={setOpenModal}/>
              <Item setOpenModal={setOpenModal}/>
              <Item setOpenModal={setOpenModal}/>
              <Item setOpenModal={setOpenModal}/>
              <div className="pagination">
                <FiChevronsLeft /> 1 ... 30 <FiChevronsRight />
              </div>
            </div>
          </div>
        </div>
      )}
      {openModal && <Modal setOpenModal={setOpenModal}/>}
    </div>
  );
};

export default List;
