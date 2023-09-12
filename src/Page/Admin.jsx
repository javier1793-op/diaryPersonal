import { useEffect, useState } from "react";
import * as React from "react";
import { useTable } from "react-table";
import "../Css/admin.scss";

import axios from "axios";

const Admin = () => {

  const [dataPost, setDataPost] = useState([])
  const [error , setError] = useState(false)
  
  const urlApi = "https://serverkoppodiary.onrender.com/api/post";

  useEffect(() => {
    axios.get(urlApi)
    .then(function(response){
      setDataPost(response.data)  

    })
    .catch(function(error){
      setError(true)
    })
  }, [])
  
  const data= React.useMemo(()=> dataPost,[])
  const columns = React.useMemo(()=>[
    {
      Header:'Date',
      accesor:'date'
    },
    {
      Header:'Title',
      accesor:'title'
    },
    {
      Header:'Sub Title',
      accesor:'subtitle'
    },
  ],[])
  console.log(data)
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const handleSubmit=(e)=>{
    e.preventDefault()
  }


  return (
    <div className="containerAdmin">
      <div className="contentFormAdmin">
        <h3>POST FORM</h3>
        <form className="formPost" onSubmit={handleSubmit}>

          <section className="leftForm">
          <div className="boxForm">
          <label htmlFor="worldselect">-Memories-</label>
            <input type="checkbox" className="checkbox" id="memories" value="Memories"  />
            <label htmlFor="worldselect">-Poems-</label>
            <input type="checkbox"className="checkbox" id="poems" value="Poems"/>
          </div>
          <div className="boxForm">
            <label htmlFor="worldselect">-Reflexion-</label>
            <input type="checkbox"className="checkbox" id="reflexion" value="Reflexion" />
            <label htmlFor="worldselect">-Secrets-</label>
            <input type="checkbox" className="checkbox" id="secrets" value="Secrets" />
          </div>
          <div className="boxForm">
            <input type="text" placeholder="title" required />
            <input type="text" placeholder="subtitle" required />
          </div>
            <div className="boxForm">
            <input type="text" placeholder="image-link" />
            <input type="text" placeholder="video-link" />
          </div>
          <div className="boxFormText">
          <textarea name="postContent" className="textarea" required placeholder="contentPost"/>
            
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
         <table {...getTableProps()}>
          <thead>
          {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
          
           
               {data.map(cell =>(
                 <tr>
                 <td>
                  {cell.date}
                 </td>
                 <td>
                  {cell.title}
                 </td>
                 <td>
                  {cell.subtitle}
                 </td>
                 </tr>
                 ))}
          
          
          </tbody>
        </table>
        }
       
      </div>
    </div>
  );
};

export default Admin;
