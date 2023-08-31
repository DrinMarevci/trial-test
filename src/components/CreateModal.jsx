import { useState } from "react";

export default function CreateModal({ show, close, setJobs }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  if (!show) return <></>;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-black opacity-50 fixed inset-0"></div>
      <div className="bg-white w-[50rem] h-80 p-6 rounded-lg shadow-lg z-10">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold mb-4">Create Job</h1>
          <button
            onClick={close}
            className="fill-black p-1 bg-no-repeat top-3 right-3"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2217%22 height=%2217%22 viewBox=%220 0 17 17%22 fill=%22none%22%3E%3Cg clip-path=%22url(%23clip0_429_152)%22%3E%3Cpath d=%22M16.623 0.392044C16.5038 0.272491 16.3621 0.17764 16.2061 0.112922C16.0501 0.0482048 15.8829 0.0148926 15.714 0.0148926C15.5452 0.0148926 15.3779 0.0482048 15.222 0.112922C15.066 0.17764 14.9243 0.272491 14.805 0.392044L8.50504 6.68404L2.20504 0.384043C1.96242 0.155747 1.64068 0.0305081 1.30757 0.0347004C0.974461 0.0388927 0.655974 0.172189 0.419182 0.406518C0.18239 0.640848 0.0457711 0.957924 0.0380969 1.29097C0.0304226 1.62402 0.152291 1.94706 0.378039 2.19204L6.67804 8.49204L0.378039 14.792C0.135366 15.0327 -0.00175638 15.36 -0.0031629 15.7017C-0.00456942 16.0435 0.129855 16.3719 0.370539 16.6145C0.611223 16.8572 0.938451 16.9943 1.28024 16.9957C1.62202 16.9972 1.95037 16.8627 2.19304 16.622L8.49304 10.322L14.793 16.622C15.0363 16.8524 15.3598 16.9787 15.6948 16.9741C16.0297 16.9695 16.3497 16.8344 16.5865 16.5975C16.8234 16.3607 16.9585 16.0407 16.9631 15.7058C16.9677 15.3708 16.8414 15.0473 16.611 14.804L10.311 8.50404L16.611 2.20404C16.8503 1.96397 16.9857 1.63946 16.9879 1.3005C16.9902 0.961537 16.8591 0.635269 16.623 0.392044Z%22 fill=%22%23323338%22/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=%22clip0_429_152%22%3E%3Crect width=%2217%22 height=%2217%22 fill=%22white%22/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E')",
              backgroundPosition: "right 1rem center",
              paddingRight: "2rem",
            }}
          ></button>
        </div>
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
            className="ml-2 pr-10 w-[12rem] h-[2rem] bg-green text-white rounded relative bg-right bg-no-repeat"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2214%22 height=%2214%22 viewBox=%220 0 14 14%22 fill=%22none%22%3E%3Cpath d=%22M13 8H8V13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V8H1C0.734784 8 0.48043 7.89464 0.292893 7.70711C0.105357 7.51957 0 7.26522 0 7C0 6.73478 0.105357 6.48043 0.292893 6.29289C0.48043 6.10536 0.734784 6 1 6H6V1C6 0.734784 6.10536 0.48043 6.29289 0.292893C6.48043 0.105357 6.73478 0 7 0C7.26522 0 7.51957 0.105357 7.70711 0.292893C7.89464 0.48043 8 0.734784 8 1V6H13C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7C14 7.26522 13.8946 7.51957 13.7071 7.70711C13.5196 7.89464 13.2652 8 13 8Z%22 fill=%22white%22/%3E%3C/svg%3E')",
              backgroundPosition: "right 1rem center", // Add padding to the right
              paddingRight: "2rem", // Adjust the padding as needed
            }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
