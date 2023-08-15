import Head from "../Components/Head";
import Fireflies from "../Components/Fireflies";
import "../Css/home.scss";
import Forest from "../assets/img/main.jpeg";
import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import Mushoku from '../assets/song/mushoku.mp3'

const Home = () => {
  const [colorTitle, setColorTitle] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setColorTitle("titleWhite");
    }, 6000);
  }, []);

  return (
    <>
      <div className="containerHome">
        <ReactAudioPlayer src={Mushoku} 
        autoPlay 
        className="songMushoku"
        volume={0.3}
        />
        <Fireflies />
        <Head />
        <img src={Forest} alt="background-main" className="backgroundMain" />
        <div className="contentHome">
          <div className="title">
            <div className="title-inner">
              <div className="cafe">
                <div className={`cafe-inner ${colorTitle}`}> The forest</div>
              </div>
              <div className="mozart">
                <div className={`mozart-inner ${colorTitle}`}>Serendipia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
