import { useState } from "react";

export default function CreateModal({ show, close, setJobs }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  if (!show) return <></>;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-black opacity-50 fixed inset-0"></div>
      <div className="bg-white w-96 h-80 p-6 rounded-lg shadow-lg z-10">
        <h1 className="text-xl font-semibold mb-4">Create Job</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter job name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select status</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="On Hold">On Hold</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {
              setJobs((prevJobs) => [{ name, status }, ...prevJobs]);
              close();
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
          >
            Create
          </button>
          <button
            onClick={close}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
