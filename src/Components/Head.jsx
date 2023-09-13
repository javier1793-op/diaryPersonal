import "../Css/head.scss";
import Button from "./Button";
import Song from "../assets/img/song.png";
import Songtach from "../assets/img/songtach.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Head = ({ setSong, song }) => {
  const [active, setActive] = useState(false);
  const [songicon, setSongicon] = useState(Song);

  var user = localStorage.getItem("token");
  const history = useNavigate();

  const handleSong = () => {
    setSong(!song);
    setActive(!active);

    if (!active) {
      setSongicon(Songtach);
    } else {
      setSongicon(Song);
    }
  };

  const handleClose = () => {
    localStorage.removeItem("token");
    history("/diaryPersonal/login");
  };

  return (
    <div className="containerHead">
      <div
        className={`contentSong ${active ? "active" : ""}`}
        onClick={handleSong}
      >
        <img src={songicon} alt="Logotiposong" />
      </div>
      {user != null && (
        <div className="menuUser">
          <Link to='/diaryPersonal/admin'>
           <div className={`alert-box1 `}>
          <p className="alert">POST</p>
        </div>
        </Link>
            
           <div className={`alert-box1 `}>
           <Link to='/diaryPersonal/notes'>
          <p className="alert">NOTES</p>
          </Link>
        </div>
        </div>
      )}
      <div className="menu">
        {user != null ? (
          <button onClick={handleClose}>Logout</button>
        ) : (
          <Link to="/diaryPersonal/login">
            <Button name={"Login"} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Head;
