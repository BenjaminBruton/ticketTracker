import React from "react";
import team from "./data/data";
import Ticket from "./components/Ticket";
import "./style/App.css";

const App = () => {
  return (
    <div>
      <Ticket teamData={team} />
    </div>
  );
};

export default App;
