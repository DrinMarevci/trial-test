import { useState } from "react";

export default function CreateModal({ show, close, setJobs }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  if (!show) return <></>;

  return (
    <div className="absolute w-screen h-screen bg-black opacity-50 z-20 top-0">
      <div className="absolute z-50 top-1/2 left-1/2 w-96 h-96 bg-white">
        <h1>slkdfjoskdfj</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={status} onChange={(e) => setStatus(e.target.value)} />
        <button
          onClick={() => {
            setJobs((prevJobs) => [{ name, status }, ...prevJobs]);
            close();
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}
