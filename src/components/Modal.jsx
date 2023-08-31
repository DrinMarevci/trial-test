import { Status } from "../jobs";
import { useState } from "react";

export default function Modal({ show, close, Status }) {
  const [currenStatus, setCurrentStatus] = useState();

  if (!show) return <></>;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-black opacity-50 fixed inset-0"></div>
      <div className="bg-white w-160 p-6 rounded-lg shadow-lg z-10">
        <h1 className="text-xl font-bold mb-4">Modal Title</h1>

        {/* Input Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Input Field
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Enter something"
          />
        </div>

        {/* Row of Two Dropdowns */}
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dropdown 1
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option value="">{Status.Completed}</option>
              <option value="">{Status.InProgress}</option>
              <option value="">{Status.OnHold}</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dropdown 2
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option value="">Option A</option>
              <option value="">Option B</option>
              <option value="">Option C</option>
            </select>
          </div>
        </div>

        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={close}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
