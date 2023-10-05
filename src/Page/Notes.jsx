import { useEffect, useState } from "react";
import { BiSolidEdit, BiTrash, BiShowAlt } from "react-icons/bi";

import axios from "axios";
import { show_alert } from "../Function/alert";

const Notes = () => {
  const [dataNote, setDataNote] = useState([]);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [operation, setOperation] = useState(1)
  const [idPut, setIdPut] = useState("")

  const urlApi = "https://serverkoppodiary.onrender.com/api/notes";
  const key = new Date();
  const tableHead = ["Date", "Title", "description", "Action"];

  const typeSend = (
    op,
    id,
    title,
    description,
  ) => {
    if (op === 2) {
      setTitle(title);
      setDescription(description)
      setOperation(2)
      setIdPut(id);
    }
  };

  const axiosGet = () => {
    axios
      .get(urlApi)
      .then(function (response) {
        setDataNote(response.data);
      })
      .catch(function (error) {
        setError(true);
      });
  };

  const axiosPost = () => {
    let params = {
      date: new Date(),
      title: title,
      description: description,
    };
    axios
      .post(urlApi, params)
      .then(function (response) {
        console.log(response);
        axiosGet();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  

  useEffect(() => {
    axiosGet();
  }, []);

  const deleteNote = (id) => {
    axios
      .delete(`https://serverkoppodiary.onrender.com/api/notes/${id}`)
      .then((response) => {
        console.log(response);
        axiosGet();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (e) => {
    {
      e.preventDefault();
      if (title.trim() === "")
        return show_alert("Debe completar el campo title", "warning");

      if (description.trim() === "")
        return show_alert("Debe completar el campo description", "warning");
    }
    validator();
    axiosPost();
    
  };

  const validator = () => {
    var method;
    var params;
    var datePost = new Date();

    if (operation === 1) {
      method = "POST";
      params = {
        date: datePost,
        title: title,
        description: description,
      };
    } else {
      method = "PUT";
      params = {
        title: title,
        description: description,
      };
    }
    send(method, params);
  };
  const send = (metodo, params) => {
    if (metodo === "POST") {
      axios
        .post(urlApi, params)
        .then(function (response) {
          console.log(response);
          setBandera(!bandera);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .put(`https://serverkoppodiary.onrender.com/api/notes/${idPut}`, params)
        .then(function (response) {
          console.log(response);
          setBandera(!bandera);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };


  return (
    <div className="containerAdmin">
      <div className="contentFormAdmin">
        <h3>NOTES FORM</h3>
        <form className="formPost" onSubmit={handleSubmit}>
          <section className="leftForm">
            <div className="boxForm">
              <input
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>

            <div className="boxFormText">
              <textarea
                name="postContent"
                className="textarea"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="Description Notes"
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
              {dataNote?.map((cell) => (
                <tr>
                  <td>{cell.date}</td>
                  <td>{cell.title}</td>
                  <td>{cell.description}</td>
                  <td>
                  <span
                      className="btn-icon"
                      onClick={() => {
                        typeSend(
                          2,
                          cell._id,
                          cell.title,
                          cell.description,
                        );
                      }}
                    >
                      <BiSolidEdit className="icon" />
                    </span>
                    <span
                      className="btn-icon"
                      onClick={() => {
                        deleteNote(cell._id);
                      }}
                    >
                      <BiTrash className="icon" />
                    </span>
                    <span className="btn-icon" onClick={""}>
                      <BiShowAlt className="icon" />
                    </span>
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

export default Notes;
