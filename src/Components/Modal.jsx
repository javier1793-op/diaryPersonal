import { createPortal } from "react-dom";

import Modal1 from '../assets/img/modal/modal1.jpg'

import "../Css/modal.scss";
import Fireflies from "./Fireflies";

const Modal = ({ setOpenModal }) => {
  return createPortal(
    <div className="contentModal">

      <section className="imageModal">
         <Fireflies />
        <img src={Modal1} alt="imagen modal" className="imgModal" />
      </section>

      <section className="textModal">
        <p>contenido modal</p>
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          cerrar
        </button>
      </section>

    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
