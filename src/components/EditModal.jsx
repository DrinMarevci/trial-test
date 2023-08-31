import { Status } from "../jobs";
import { useRef, useState, useEffect } from "react";

export default function EditModal({
  show,
  close,
  editingJob,
  setJobs,
  jobs,
  setEditingJob,
}) {
  const selectRef = useRef();

  useEffect(() => {
    if (jobs.status === Status.Completed) {
      selectRef.current.classList.add("bg-green");
    } else if (jobs.status === Status.InProgress) {
      selectRef.current.classList.add("bg-yellow");
    } else if (jobs.status === Status.OnHold) {
      selectRef.current.classList.add("bg-red");
    }

    // if (index % 2 === 0) {
    //   divRef.current.classList.add("bg-white");
    // } else {
    //   divRef.current.classList.add("bg-gray-100");
    // }
  }, []);

  const [name, setName] = useState(editingJob?.name);
  const [status, setStatus] = useState(editingJob?.status);

  if (!show) return <></>;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="z-10 p-6 bg-white rounded-lg shadow-lg w-[50rem]">
        <div className="flex my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pt-1"
            width="22"
            height="22"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_402_466)">
              <path
                d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 15C9.73479 15 9.48043 14.8946 9.2929 14.7071C9.10536 14.5196 9 14.2652 9 14V10C9 9.73478 9.10536 9.48043 9.2929 9.29289C9.48043 9.10536 9.73479 9 10 9C10.2652 9 10.5196 9.10536 10.7071 9.29289C10.8946 9.48043 11 9.73478 11 10V14C11 14.2652 10.8946 14.5196 10.7071 14.7071C10.5196 14.8946 10.2652 15 10 15ZM11 7H9V5H11V7Z"
                fill="#1264A3"
              />
            </g>
            <defs>
              <clipPath id="clip0_402_466">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="flex justify-start px-2 text-md">
            Informative piece of text that can be used regarding this modal.
          </div>
        </div>

        {/* Input Field */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Job Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter job name"
          />
        </div>

        {/* Dropdown */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            ref={selectRef}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value={Status.Completed}>{Status.Completed}</option>
            <option value={Status.InProgress}>{Status.InProgress}</option>
            <option value={Status.OnHold}>{Status.OnHold}</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => {
              setEditingJob(null);
              close();
            }}
            className="ml-2 pr-10 w-[12rem] h-[2rem] bg-red text-white rounded relative bg-right bg-no-repeat"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2215%22 viewBox=%220 0 16 15%22 fill=%22none%22%3E%3Cpath d=%22M14.6932 0.32166C14.595 0.222731 14.4781 0.144216 14.3494 0.0906372C14.2207 0.0370585 14.0826 0.00947475 13.9432 0.00947475C13.8038 0.00947475 13.6657 0.0370585 13.537 0.0906372C13.4083 0.144216 13.2915 0.222731 13.1932 0.32166L8.00022 5.50266L2.80822 0.31066C2.60931 0.111748 2.33952 -2.09588e-09 2.05822 0C1.77691 -2.09588e-09 1.50713 0.111748 1.30822 0.31066C1.10931 0.509572 0.997559 0.779355 0.997559 1.06066C0.997559 1.34196 1.10931 1.61175 1.30822 1.81066L6.50022 7.00266L1.31122 12.1927C1.11231 12.3916 1.00056 12.6614 1.00056 12.9427C1.00056 13.224 1.11231 13.4937 1.31122 13.6927C1.51013 13.8916 1.77991 14.0033 2.06122 14.0033C2.34252 14.0033 2.61231 13.8916 2.81122 13.6927L8.00022 8.49266L13.1932 13.6927C13.3921 13.8916 13.6619 14.0033 13.9432 14.0033C14.2245 14.0033 14.4943 13.8916 14.6932 13.6927C14.8921 13.4937 15.0039 13.224 15.0039 12.9427C15.0039 12.6614 14.8921 12.3916 14.6932 12.1927L9.49322 6.99966L14.6932 1.80766C14.8871 1.60893 14.9956 1.34229 14.9956 1.06466C14.9956 0.787027 14.8871 0.520389 14.6932 0.32166Z%22 fill=%22white%22/%3E%3C/svg%3E')",
              backgroundPosition: "right 1rem center", // Add padding to the right
              paddingRight: "2rem", // Adjust the padding as needed
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              const updatedJobs = jobs.map((job) =>
                job.name === editingJob.name ? { ...job, name, status } : job
              );

              setJobs(updatedJobs);
              setEditingJob(null);
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
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
