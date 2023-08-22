import "../Css/post.scss";
import Postmain from "../assets/img/main2.jpeg";
import ciervo from "../assets/img/runes/ciervo.png";
import conejo from "../assets/img/runes/conejo.png";
import drabonarbol from "../assets/img/runes/dragonarbol.png";
import drabonlagarto from "../assets/img/runes/dragonlagarto.png";
import lobo from "../assets/img/runes/lobo.png";

const Post = () => {
  return (
    <>
      <div className="containerPost" id="selector">
        <img src={Postmain} alt="mainPost" className="mainPost" />
        <div className="contentPost">
          <div className="box">
            <div className="boxcontent">
              <h3>titulo</h3>
            </div>
          </div>

          {/**secrets */}
          <div className="box">
            <div className="boxcontent"></div>
          </div>

          {/**Memories */}
          <div className="box">
            <div className="boxcontent">
              <div className="portal-frame">
                <div className="portal">
                </div>
                   <span className="chatBtn">
                <img src={drabonlagarto} alt="runa" className="runeImg" />
                <span className="tooltip">Memories</span>
              </span>
              </div>
             
            </div>
          </div>

          {/**Reflexion */}
          <div className="box">
            <div className="boxcontent">
              <div className="portal-frame">
                <div className="portal">
                </div>
              <span className="chatBtn">
                <img src={ciervo} alt="runa" className="runeImg" />
                <span className="tooltip">Reflexion</span>
              </span>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="boxcontent"></div>
          </div>

          <div className="box">
            <div className="boxcontent">
              <div className="portal-frame">
                <div className="portal">
                </div>
              <span className="chatBtn">
                <img src={drabonarbol} alt="runa" className="runeImg" />
                <span className="tooltip">Secrets</span>
              </span>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="boxcontent"></div>
          </div>

          {/**recent */}
          <div className="box">
            <div className="boxcontent">
            <div className="portal-frame">
                <div className="portal">
                </div>
              <span className="chatBtn">
                <img src={lobo} alt="runa" className="runeImg" />
                <span className="tooltip">Recent</span>
              </span>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="boxcontent"></div>
          </div>

          {/**poems */}
          <div className="box">
            <div className="boxcontent">
              <div className="portal-frame">
                <div className="portal">
                </div>
              <span className="chatBtn">
                <img src={conejo} alt="runa" className="runeImg" />
                <span className="tooltip">Poems</span>
              </span>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="boxcontent"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
