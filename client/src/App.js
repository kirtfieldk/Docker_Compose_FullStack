import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [retrieve, getInfo] = useState([]);
  useEffect(() => {
    fetchInfo();
  }, []);
  const fetchInfo = async () => {
    const response = await axios.get("http://localhost:5000/");
    getInfo(response.data.response);
  };
  const rederTest = () => {
    if (retrieve.length === 0) {
      return <div>Not Connected To Database</div>;
    } else {
      console.log(retrieve);
      return retrieve.map(doc => <div key={doc._id}>{doc.title}</div>);
    }
  };
  return (
    <div>
      <div className="half white">
        <p className="large center Text">{rederTest()}</p>
        <div className="half-blue"></div>
      </div>
    </div>
  );
}

export default App;
