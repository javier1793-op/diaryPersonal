import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Page/Home'
import Page404 from './Page/Page404'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/*' element={<Page404/>}/>
     </Routes>
    </>
  )
}

export default App
