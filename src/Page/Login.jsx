import { Link } from "react-router-dom";
import "../Css/login.scss";

const Login = () => {
  return (
    <>
      <div className="containerLogin">
        <div className="alert-box">
          <p className="alert"></p>
        </div>

        <div className="form">
          <h1 className="heading">login</h1>
          <input type="email" placeholder="email" className="email" required />
          <input
            type="password"
            placeholder="password"
            className="password"
            required
          />
           <Link to="/diaryPersonal/admin">
          <button className="submit-btn">log in</button>
          </Link>
        </div>
        <Link to="/diaryPersonal/">
          <button className="backLogin">Back</button>
        </Link>
      </div>
    </>
  );
};

export default Login;
