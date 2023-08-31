import { useState } from "react";
import Banner from "./components/banner";
import Table from "./components/table";
import "./index.css";
import { initialJobs } from "./jobs";

function App() {
  const [jobs, setJobs] = useState(initialJobs);

  return (
    <div className="App-container">
      <Banner />
      <Table jobs={jobs} setJobs={setJobs} />
    </div>
  );
}

export default App;
