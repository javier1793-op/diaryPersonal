import { useEffect, useState } from "react";
import "../Css/admin.scss";
import axios from "axios";


const Notes = () => {
    const [dataNotes, setDataNotes] = useState([]);
  const [error, setError] = useState(false);

  const urlApi = "https://serverkoppodiary.onrender.com/api/notes";
  const key = new Date();
  const tableHead = ["date", "title", "description", "action"];

  useEffect(() => {
    axios
      .get(urlApi)
      .then(function (response) {
        setDataNotes(response.data);
      })
      .catch(function (error) {
        setError(true);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="containerAdmin">
      <div className="contentFormAdmin">
        <h3>NOTES FORM</h3>
        <form className="formPost" onSubmit={handleSubmit}>
          <section className="leftForm">
            <div className="boxForm">
              <label htmlFor="worldselect">-Memories-</label>
              <input
                type="checkbox"
                className="checkbox"
                id="memories"
                value="Memories"
              />
              <label htmlFor="worldselect">-Poems-</label>
              <input
                type="checkbox"
                className="checkbox"
                id="poems"
                value="Poems"
              />
            </div>
            <div className="boxForm">
              <label htmlFor="worldselect">-Reflexion-</label>
              <input
                type="checkbox"
                className="checkbox"
                id="reflexion"
                value="Reflexion"
              />
              <label htmlFor="worldselect">-Secrets-</label>
              <input
                type="checkbox"
                className="checkbox"
                id="secrets"
                value="Secrets"
              />
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
              <textarea
                name="postContent"
                className="textarea"
                required
                placeholder="contentPost"
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
                {tableHead.map((cell) => (
                  <th>{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataNotes.map((cell) => (
                <tr key={key}>
                  <td>{cell.date}</td>
                  <td>{cell.title}</td>
                  <td>{cell.description}</td>
                  <td>botones</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Notes