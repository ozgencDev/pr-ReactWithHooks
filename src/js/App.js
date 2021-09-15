import React from "react";
import ReactDOM from "react-dom";
import CrudOp from "./CrudOp";
import FetchedDataSection from "./FetchedDataSection.js";

const App = (props) => {
  return (
    <div>
      <CrudOp />
      <FetchedDataSection />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
