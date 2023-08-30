import React from "react";

export default function tableRows() {
  <table class="min-w-full divide-y divide-gray-200">
    <thead>
      <tr>
        <th class="px-6 py-3 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
          Jobsite Name
        </th>
        <th class="px-6 py-3 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
          Status
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-50">
      <tr>
        <td class="bg-gray-50 px-6 py-1 whitespace-no-wrap">
          <div class="flex justify-center items-center">
            <div class="ml-4">
              <div class="text-sm leading-5 font-medium text-gray-900">
                Jobsite 1
              </div>
            </div>
          </div>
        </td>
        <td className="bg-gray-50 flex justify-center items-center px-6 py-1 whitespace-no-wrap">
          <button className="bg-green text-white rounded-lg px-4 py-2">
            <div className="px-20">
              <div className="text-sm text-center leading-5 font-medium text-white">
                Active
              </div>
            </div>
          </button>
        </td>
      </tr>
    </tbody>
  </table>;
}
