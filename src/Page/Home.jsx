import { Link  } from "react-scroll";
import { useEffect, useState, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";

import "../Css/home.scss";
import Forest from "../assets/img/main.jpeg";
import Mushoku from "../assets/song/mushoku.mp3";

import Head from "../Components/Head";
import Fireflies from "../Components/Fireflies";
import Post from "../Components/Post";

const Home = () => {
  const [colorTitle, setColorTitle] = useState("");
  const [explore, setExplore] = useState("");

  const start = useRef();
  

  useEffect(() => {
    setTimeout(() => {
      setColorTitle("titleWhite");
      setExplore("active");
    }, 6000);

  
  }, []);



  return (
    <>
      <main>
        <div className="containerHome">
        <ReactAudioPlayer
            src={Mushoku}
            autoPlay
            className="songMushoku"
            volume={0.3}
          />
          
          <Fireflies />
          <Head />
          <img
            src={Forest}
            alt="background-main"
            className="backgroundMain"
            ref={start}
          />
          <div className="contentHome">
            <div className="title">
              <div className="title-inner">
                <div className="cafe">
                  <div className={`cafe-inner ${colorTitle}`}> The forest</div>
                </div>
                <div className="mozart">
                  <div className={`mozart-inner ${colorTitle}`}>Serendipia</div>
                </div>
                <br />
                <Link
                  to="selector"
                  spy={true}
                  smooth={true}
                  offset={120}
                  duration={3000}
                >
                  <button className={`btnexplore ${explore}`}>Explore</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className="postSection" id="selector">
          <Post />
        </section>
      </main>
    </>
  );
};

export default Home;
