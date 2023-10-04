import { useEffect, useState } from "react";


import axios from "axios";
import { show_alert } from "../Function/alert";

  
const Notes = () => {
  const [dataNote, setDataNote] = useState([])
  const [error , setError] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const urlApi = "https://serverkoppodiary.onrender.com/api/notes";
  const key= new Date();
  const tableHead=['Date','Title','description','Action']


   const axiosGet= ()=>{
    axios.get(urlApi)
    .then(function(response){
      setDataNote(response.data)  

    })
    .catch(function(error){
      setError(true)
    })
   }


  

  const axiosPost = ()=>{
    let params={
      date: new Date(),
      title:title,
      description:description,
    }
    axios.post(urlApi, params)
    .then(function (response) {
      console.log(response);
      axiosGet()
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  useEffect(() => {
    axiosGet()

  }, [])
  

 

  const handleSubmit=(e)=>{{
    e.preventDefault()
    if (title.trim() === "") return(
      show_alert("Debe completar el campo title", "warning"));
    
    if (description.trim() === "") return(
      show_alert("Debe completar el campo description", "warning"));
    }
    axiosPost()
}
  return (
    <div className="containerAdmin">
    <div className="contentFormAdmin">
      <h3>NOTES FORM</h3>
      <form className="formPost" onSubmit={handleSubmit}>

        <section className="leftForm">
        
        <div className="boxForm">
          <input type="text" placeholder="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        </div>
          
        <div className="boxFormText">
        <textarea name="postContent" className="textarea" value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Description Notes"/>
          
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
               <tr>
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