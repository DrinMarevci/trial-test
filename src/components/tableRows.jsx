import TableRow from "./tableRow";

export default function TableRows({ jobResults }) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Jobsite Name
          </th>
          <th className="px-6 py-3 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-50">
        {jobResults.length > 0 ? (
          jobResults.map((job, number) => {
            return <TableRow key={job.name} job={job} index={number} />;
          })
        ) : (
          <></>
        )}
      </tbody>
    </table>
  );
}
