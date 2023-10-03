import "../Css/page404.scss";
import { Link} from "react-router-dom";
import notpage from "../assets/img/404.jpeg";

const Page404 = () => {
  return (
    <>
      <div className="containerNotPage">
        <img src={notpage} alt="404" />
        <section className="info404">
          <h1>404</h1>
          <h2>uncharted world</h2>
          <Link to="/diaryPersonal/">
          <button>Back</button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Page404;
