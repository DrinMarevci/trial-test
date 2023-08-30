import React from "react";
import Banner from "./components/banner";
import Table from "./components/table";
import TableRows from "./components/tableRows";
import "./index.css";

function App() {
  return (
    <div className="App-container ">
      <Banner />
      <Table />
      <TableRows />
    </div>
  );
}

export default App;
