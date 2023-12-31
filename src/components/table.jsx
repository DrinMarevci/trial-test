import { useEffect, useState } from "react";
import TableRows from "./tableRows";
import EditModal from "./EditModal";
import CreateModal from "../components/CreateModal";
import { initialJobs } from "../jobs";

export default function Table({ jobs, setJobs }) {
  const [searchInput, setSearchInput] = useState("");
  const [jobResults, setJobResults] = useState([...initialJobs]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  useEffect(() => {
    setJobResults(jobs);
  }, [jobs]);

  const closeEditModal = () => setShowEditModal(false);
  const openEditModal = () => setShowEditModal(true);

  const closeCreateModal = () => setShowCreateModal(false);
  const openCreateModal = () => setShowCreateModal(true);

  useEffect(() => {
    if (searchInput === "") {
      setJobResults([...jobs]);
      return;
    }

    const jobResultsCopy = jobs.filter((job) => {
      return job.name.toLocaleLowerCase() === searchInput.toLocaleLowerCase();
    });

    setJobResults([...jobResultsCopy]);
  }, [searchInput]);

  return (
    <div className="flex flex-col py-2 mx-2 my-5 border-black rounded-lg bg-slate-50">
      {editingJob !== null && (
        <EditModal
          show={showEditModal}
          close={closeEditModal}
          editingJob={editingJob}
          setEditingJob={setEditingJob}
          setJobs={setJobs}
          jobs={jobs}
        />
      )}
      <CreateModal
        show={showCreateModal}
        close={closeCreateModal}
        setJobs={setJobs}
      />
      <div className="flex justify-start title">Title</div>
      <div className="flex justify-between bg-white">
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
        <div className="flex justify-end my-3">
          <label className="relative bg-white w-[30rem] h-[2.5rem]">
            <input
              className="py-2 pr-5 pl-10 border bg-left rounded-lg bg-no-repeat bg-contain w-[80%] h-[80%]"
              placeholder="Search a driver"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2217%22 height=%2216%22 viewBox=%220 0 17 16%22 fill=%22none%22%3E%3Cpath d=%22M12.671 10.302H11.933L11.672 10.05C12.6973 8.85564 13.2199 7.3105 13.1301 5.73902C13.0404 4.16754 12.3453 2.69194 11.1907 1.62204C10.0362 0.552147 8.51206 -0.0288267 6.9383 0.00110144C5.36454 0.0310296 3.86358 0.669532 2.75057 1.78255C1.63755 2.89557 0.999047 4.39652 0.969119 5.97028C0.939191 7.54404 1.52016 9.06819 2.59006 10.2227C3.65996 11.3773 5.13555 12.0724 6.70704 12.1621C8.27852 12.2518 9.82366 11.7292 11.018 10.704L11.27 10.965V11.703L15.238 15.671C15.3284 15.7667 15.437 15.8434 15.5575 15.8964C15.6779 15.9494 15.8078 15.9777 15.9394 15.9796C16.0711 15.9815 16.2017 15.957 16.3237 15.9075C16.4456 15.858 16.5564 15.7846 16.6495 15.6915C16.7426 15.5984 16.816 15.4876 16.8655 15.3657C16.915 15.2437 16.9395 15.113 16.9376 14.9814C16.9357 14.8498 16.9074 14.7199 16.8544 14.5994C16.8014 14.479 16.7248 14.3703 16.629 14.28L12.671 10.302ZM7.07103 10.302C6.24035 10.302 5.42832 10.0557 4.73763 9.59418C4.04695 9.13268 3.50862 8.47673 3.19073 7.70928C2.87285 6.94183 2.78967 6.09735 2.95173 5.28263C3.11379 4.46791 3.5138 3.71954 4.10118 3.13216C4.68856 2.54478 5.43693 2.14477 6.25165 1.98271C7.06637 1.82066 7.91085 1.90383 8.6783 2.22172C9.44575 2.53961 10.1017 3.07793 10.5632 3.76862C11.0247 4.4593 11.271 5.27133 11.271 6.10201C11.271 6.65373 11.1623 7.20005 10.9511 7.70974C10.7399 8.21944 10.4304 8.68254 10.0402 9.07257C9.64995 9.4626 9.18671 9.77193 8.67691 9.98288C8.16712 10.1938 7.62075 10.3023 7.06903 10.302H7.07103Z%22 fill=%22%23EAEAEA%22/%3E%3C/svg%3E')",
              }}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </label>
          <label>
            <button
              onClick={openCreateModal}
              className="ml-2 pr-10 w-[15rem] h-[2rem] bg-green text-white rounded relative bg-right bg-no-repeat"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2214%22 height=%2214%22 viewBox=%220 0 14 14%22 fill=%22none%22%3E%3Cpath d=%22M13 8H8V13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V8H1C0.734784 8 0.48043 7.89464 0.292893 7.70711C0.105357 7.51957 0 7.26522 0 7C0 6.73478 0.105357 6.48043 0.292893 6.29289C0.48043 6.10536 0.734784 6 1 6H6V1C6 0.734784 6.10536 0.48043 6.29289 0.292893C6.48043 0.105357 6.73478 0 7 0C7.26522 0 7.51957 0.105357 7.70711 0.292893C7.89464 0.48043 8 0.734784 8 1V6H13C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7C14 7.26522 13.8946 7.51957 13.7071 7.70711C13.5196 7.89464 13.2652 8 13 8Z%22 fill=%22white%22/%3E%3C/svg%3E')",
                backgroundPosition: "right 1rem center", // Add padding to the right
                paddingRight: "2rem", // Adjust the padding as needed
              }}
            >
              Create
            </button>
          </label>
        </div>
      </div>
      <div>
        <TableRows
          jobResults={jobResults}
          openEditModal={openEditModal}
          setEditingJob={setEditingJob}
        />
      </div>
    </div>
  );
}
