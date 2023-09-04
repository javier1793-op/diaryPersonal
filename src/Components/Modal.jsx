import { createPortal } from "react-dom";

import "../Css/modal.scss";

const Modal = ({ setOpenModal }) => {
  return createPortal(
    <div className="contentModal">

      <section className="imageModal">
        <img src="" alt="imagen modal" />
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
