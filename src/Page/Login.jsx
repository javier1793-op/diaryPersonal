import '../Css/login.scss'

const Login = () => {
  return (
    <>
    <div className="containerLogin">
       <div className="alert-box">
        <p className="alert"></p>
    </div>

    <div className="form">
        <h1 className="heading">login</h1>
        <input type="email" placeholder="email"  className="email" required/>
        <input type="password" placeholder="password"  className="password" required/>
        <button className="submit-btn">log in</button>
    </div>  
    </div>
    
    </>
  )
}

export default Login