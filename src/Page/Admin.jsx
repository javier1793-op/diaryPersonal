import "../Css/admin.scss";

const Admin = () => {
  return (
    <div className="containerAdmin">
      <div className="contentFormAdmin">
        <h3>upload form</h3>
        <form className="formPost">
          <div className="boxForm">
            <label htmlFor="worldselect">choose a world</label>
            <select name="select">
            <option value="value1">Value 1</option>
          </select>
          </div>
          <div className="boxForm">
          <input type="text" placeholder="title" />
          <input type="text" placeholder="subtitle" />
          </div>
          <div className="boxForm">
          <input type="text" placeholder="content" />
          <input type="text" placeholder="image-link" /> 
          </div>
          <div className="boxForm">
          <input type="text" placeholder="video-link" />
          </div>
          <div className="boxForm">
            <button>Submit</button>
            </div>
        </form>
      </div>
      <div className="contentTableAdmin">table</div>
    </div>
  );
};

export default Admin;
