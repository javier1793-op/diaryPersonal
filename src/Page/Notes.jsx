import { useEffect, useState } from "react";


import axios from "axios";

  
const Notes = () => {
    const [dataNote, setDataNote] = useState([])
  const [error , setError] = useState(false)
  
  const urlApi = "https://serverkoppodiary.onrender.com/api/notes";
  const key= new Date();
  const tableHead=['Date','Title','description','Action']

  useEffect(() => {
    axios.get(urlApi)
    .then(function(response){
      setDataNote(response.data)  

    })
    .catch(function(error){
      setError(true)
    })
  }, [])
  
 

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <div className="containerAdmin">
    <div className="contentFormAdmin">
      <h3>NOTES FORM</h3>
      <form className="formPost" onSubmit={handleSubmit}>

        <section className="leftForm">
        
        <div className="boxForm">
          <input type="text" placeholder="title" required />
        </div>
          
        <div className="boxFormText">
        <textarea name="postContent" className="textarea" required placeholder="Description Notes"/>
          
        </div>
        </section>
        <section className="rightForm">
        <div className="boxFormbtn">
          <button>Submit</button>
        </div>
        </section>
       
          
      </form>
    </div>
    <div className="contentTableAdmin">
      {error ?
      'Connection error with server'
     :
       <table>
        <thead>
              <tr>
                {tableHead.map(head=>(
                  <th >
                    {head}
                  </th>
                ))}
              </tr>
        </thead>
        <tbody>
        
         
             {dataNote?.map(cell =>(
               <tr key={key}>
               <td>
                {cell.date}
               </td>
               <td>
                {cell.title}
               </td>
               <td>
                {cell.description}
               </td>
               <td>
                botones
               </td>
               </tr>
               ))}
        
        
        </tbody>
      </table>
      }
     
    </div>
  </div>
  )
}

export default Notes