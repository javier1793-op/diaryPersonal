import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Page/Home'
import Page404 from './Page/Page404'
import List from './Page/List'
import Login from './Page/Login'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='diaryPersonal/' element={<Home/>}/>
      <Route path='diaryPersonal/list' element={<List/>}/>
      <Route path='diaryPersonal/login' element={<Login/>}/>
      <Route path='diaryPersonal/*' element={<Page404/>}/>
     </Routes>
    </>
  )
}

export default App
