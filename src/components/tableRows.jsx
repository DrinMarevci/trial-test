import TableRow from "./tableRow";

export default function TableRows({
  jobResults,
  openEditModal,
  setEditingJob,
}) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase bg-white">
            Jobsite Name
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase bg-white">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-50">
        {jobResults?.length > 0 ? (
          jobResults.map((job, number) => {
            return (
              <TableRow
                key={job.name}
                job={job}
                index={number}
                openEditModal={() => {
                  console.log({ job });
                  setEditingJob(job);
                  openEditModal();
                }}
              />
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    </table>
  );
}
