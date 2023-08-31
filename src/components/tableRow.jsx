import { useRef, useEffect } from "react";
import { jobs, Status } from "../jobs";

export default function TableRow({ job, index, openEditModal }) {
  const buttonRef = useRef();
  const divRef = useRef();

  useEffect(() => {
    if (job.status === Status.Completed) {
      buttonRef.current.classList.add("bg-green");
    } else if (job.status === Status.InProgress) {
      buttonRef.current.classList.add("bg-yellow");
    } else if (job.status === Status.OnHold) {
      buttonRef.current.classList.add("bg-red");
    }

    if (index % 2 === 0) {
      divRef.current.classList.add("bg-white");
    } else {
      divRef.current.classList.add("bg-gray-100");
    }
  }, []);

  return (
    <tr ref={divRef} onClick={openEditModal} className="cursor-pointer">
      <td className="px-6 py-1 whitespace-no-wrap ">
        <div className="flex items-center justify-center">
          <div className="ml-4">
            <div className="text-sm font-medium leading-5 text-gray-900">
              {job.name}
            </div>
          </div>
        </div>
      </td>
      <td className="flex items-center justify-center px-6 py-1 whitespace-no-wrap">
        <button
          ref={buttonRef}
          className="py-2 w-[15rem] text-white rounded-lg "
        >
          <div className="px-20">
            <div className="text-sm font-medium leading-5 text-center text-white">
              {job.status}
            </div>
          </div>
        </button>
      </td>
    </tr>
  );
}
