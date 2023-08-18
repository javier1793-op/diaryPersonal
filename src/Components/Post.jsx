import "../Css/post.scss";
import Postmain from "../assets/img/main2.jpeg";
import Runa from '../assets/img/runes/rune.png'

const Post = () => {
  return (
    <>
      <div className="containerPost" id="selector">
        <img src={Postmain} alt="mainPost" className="mainPost" />
        <div className="contentPost">
          <div className="box">
            <div className="boxcontent"></div>
          </div>

          {/**secrets */}
          <div className="box">
            <div className="boxcontent">
              <span className="chatBtn">
                <img src={Runa} alt="runa" className="runeImg" />
                <span className="tooltip">Secrets</span>
              </span>
            </div>
          </div>

          {/**Memories */}
          <div className="box">
            <div className="boxcontent">
              <span className="chatBtn">
                <img src={Runa} alt="runa" className="runeImg" />
                <span className="tooltip">Memories</span>
              </span>
            </div>
          </div>

          {/**Reflexion */}
          <div className="box">
            <div className="boxcontent">
              <span className="chatBtn">
                <img src={Runa} alt="runa" className="runeImg" />
                <span className="tooltip">Reflexion</span>
              </span>
            </div>
          </div>

          <div className="box">
            <div className="boxcontent"></div>
          </div>

          <div className="box">
            <div className="boxcontent"></div>
          </div>

          <div className="box">
            <div className="boxcontent"></div>
          </div>

          {/**recent */}
          <div className="box">
            <div className="boxcontent">
              <span className="chatBtn">
                <img src={Runa} alt="runa" className="runeImg" />
                <span className="tooltip">Recent</span>
              </span>
            </div>
          </div>

          <div className="box">
            <div className="boxcontent"></div>
          </div>

          {/**poems */}
          <div className="box">
            <div className="boxcontent">
              <span className="chatBtn">
                <img src={Runa} alt="runa" className="runeImg" />
                <span className="tooltip">Poems</span>
              </span>
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
