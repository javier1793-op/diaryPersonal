import { useEffect, useState } from "react";
import {BiSolidEdit,BiTrash } from "react-icons/bi";
import { show_alert } from "../Function/alert";

import "../Css/admin.scss";

import axios from "axios";

const Admin = () => {

  const [memories, setMemories] = useState(false);
  const [poems, setPoems] = useState(false);
  const [reflextion, setReflextion] = useState(false);
  const [secret, setSecret] = useState(false);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [content, setContent] = useState('');
  const [operation, setOperation] = useState(1);
  const [idPut, setIdPut] = useState('');
  const [dataPost, setDataPost] = useState([]);
  const [error, setError] = useState(false);
  const [bandera, setBandera] = useState(false);

  const urlApi = "https://serverkoppodiary.onrender.com/api/post";
  const tableHead = ["Date", "Title", "Subtitle", "Action"];

  useEffect(() => {
   getPost();
  }, [bandera]);

  const getPost = async ()=>{
   const resp= await axios
    .get(urlApi)
    .catch((error)=>{
      setError(true)
  })
    setDataPost(resp.data)

  }
  
  const typeSend=(op, id, title, subtitle, image, video, content, category)=>{

    if(op === 2){
      setTitle(title);
      setSubtitle(subtitle);
      setImage(image);
      setVideo(video);
      setContent(content);
      setOperation(2);
      setIdPut(id)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let dataCheck=[]
    if(memories) { dataCheck.push('memories')}
    if(poems){ dataCheck.push('poems')}
    if(reflextion) { dataCheck.push('reflextions')}
    if(secret){ dataCheck.push('secrets')}

    validator(dataCheck)
 
    
  };

  const validator = (dataCheck)=>{
    var method
    var params
    var datePost =  new Date();

    if (title.trim() === ""){
      show_alert('Debe completar el campo title','warning')
    }
    if (subtitle.trim() === ""){
      show_alert('Debe completar el campo subtitle','warning')
    }
    if (content.trim() === ""){
      show_alert('Debe completar el campo content','warning')
    }

    if(operation === 1){
      method = 'POST';
      params= {date:datePost,title:title, subtitle:subtitle, image:image, video:video, content:content, category:dataCheck}
    }else{
      method = 'PUT';
      params= {title:title, subtitle:subtitle,image:image, video:video , category:dataCheck}
    }
    send(method, params)

  }
  const send = (metodo, params)=>{
   
   if(metodo === 'POST'){
    
  axios.post(urlApi, 
    params
  )
  .then(function (response) {
    console.log(response);
     setBandera(!bandera)
  })
  .catch(function (error) {
    console.log(error);
  });
 
   }else{
    axios.put(`https://serverkoppodiary.onrender.com/api/post/${idPut}`, 
      params
    )
    .then(function (response) {
      console.log(response);
       setBandera(!bandera)
    })
    .catch(function (error) {
      console.log(error);
    });
   }
   
   
   
  }

  const deletePost=(id)=>{
    axios.delete(`https://serverkoppodiary.onrender.com/api/post/${id}`)
  .then(response => {
    console.log(response);
    getPost();
  })
  .catch(error => {
    console.error(error);
  })
  }


  return (
    <div className="containerAdmin">
      <div className="contentFormAdmin">
        <h3>POST FORM</h3>
        <form className="formPost" onSubmit={handleSubmit}>
          <section className="leftForm">
            <div className="boxForm">
              <label htmlFor="worldselect">-Memories-</label>
              <input
                type="checkbox"
                className="checkbox"
                id="memories"
                name="memories"
                value='memories'
                onChange={()=>{setMemories(!memories)}}
              />
              <label htmlFor="worldselect">-Poems-</label>
              <input
                type="checkbox"
                className="checkbox"
                id="poems"
                name="poems"
                value="Poems"
                onChange={()=>{setPoems(!poems)}}
              />
            </div>
            <div className="boxForm">
              <label htmlFor="worldselect">-Reflexion-</label>
              <input
                type="checkbox"
                className="checkbox"
                id="reflexion"
                name="reflexion"
                value="Reflexion"
                onChange={()=>{setReflextion(!reflextion)}}
              />
              <label htmlFor="worldselect">-Secrets-</label>
              <input
                type="checkbox"
                className="checkbox"
                id="secrets"
                name="secrets"
                value="Secrets"
                onChange={()=>{setSecret(!secret)}}
              />
            </div>
            <div className="boxForm">
              <input
                type="text"
                placeholder="title"
                name="title"
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
              />
              <input
                type="text"
                placeholder="subtitle"
                name="subtitle"
                value={subtitle}
                onChange={(e)=>{setSubtitle(e.target.value)}}
              />
            </div>
            <div className="boxForm">
              <input
                type="text"
                name="image"
                value={image}
                placeholder="image-link"
                onChange={(e)=>{setImage(e.target.value)}}
              />
              <input
                type="text"
                name="video"
                value={video}
                placeholder="video-link"
                onChange={(e)=>{setVideo(e.target.value)}}
              />
            </div>
            <div className="boxFormText">
              <textarea
                className="textarea"
                name="content"
                value={content}
                placeholder="contentPost"
                onChange={(e)=>{setContent(e.target.value)}}
              />
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
        {error ? (
          "Connection error with server"
        ) : (
          <table>
            <thead>
              <tr>
                {tableHead.map((head) => (
                  <th>{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataPost.map((cell) => (
                <tr>
                  <td>{cell.date}</td>
                  <td>{cell.title}</td>
                  <td>{cell.subtitle}</td>
                  <td className="action-btn">
                    <span className="btn-icon"
                    onClick={()=>{typeSend(2,cell._id, cell.title,cell.subtitle,cell.image, cell.video, cell.content, cell.category)}}
                    ><BiSolidEdit className="icon"/></span>
                    <span className="btn-icon"
                     onClick={()=>{deletePost(cell._id)}}
                    > 
                   
                    <BiTrash className="icon"/></span> 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Admin;
