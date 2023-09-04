import { createPortal } from "react-dom";
import { useState } from "react";

import Modal1 from "../assets/img/modal/modal1.jpg";

import "../Css/modal.scss";
import Fireflies from "./Fireflies";

import TextModal from "./TextModal";
import ImageModal from "./ImageModal";
import VideoModal from "./VideoModal";

const Modal = ({ setOpenModal }) => {

  const [menu, setMenu] = useState('text')
  

  return createPortal(
    <div className="contentModal">
      <section className="imageModal">
        <Fireflies />
        <img src={Modal1} alt="imagen modal" className="imgModal" />
      </section>

      <section className="textModal">
        <section className="headModal">
          <span className="titleModal">
            <h1>Titulo principal</h1>
            <h3>sub titulo</h3>
          </span>
          <span className="dateModal">
            fecha
          </span>
          </section>
        <section className="bodyModal">
          <div className="submenuModal">
            <span
            onClick={()=>{setMenu('text')}}
            >Text</span>
            <span
             onClick={()=>{setMenu('image')}}
            >Images</span>
            <span
             onClick={()=>{setMenu('video')}}
            >Video</span>
          </div>
          <div className="optinModel">
            {menu === 'text' && <TextModal/>}
            {menu === 'image' && <ImageModal/>}
            {menu === 'video' && <VideoModal/>}
          </div>
          <div className="footerModal">
             <button
            className="btnModal"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            cerrar
          </button>
          </div>
         
        </section>
      </section>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
