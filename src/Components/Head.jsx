import '../Css/head.scss'
import Button from './Button'

const Head = () => {
  return (
    <div className="containerHead">
       <img src="#" alt="Logotipo" />
       <div className="menu">
        <Button name={'Login'}/>
       </div>
    </div>
  )
}

export default Head