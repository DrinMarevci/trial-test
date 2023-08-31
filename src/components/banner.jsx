import { initialJobs, Status } from "../jobs";
import { useEffect, useState } from "react";

function Banner() {
  const [numOfJobsInProgress, setNumOfJobsInProgress] = useState(0);
  const [numOfJobsCompleted, setNumOfJobsCompleted] = useState(0);
  const [numOfJobsOnHold, setNumOfJobsOnHold] = useState(0);

  useEffect(() => {
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;

    initialJobs.forEach((job) => {
      if (job.status === Status.Completed) n1++;
      else if (job.status === Status.InProgress) n2++;
      else if (job.status === Status.OnHold) n3++;
    });

    setNumOfJobsCompleted(n1);
    setNumOfJobsInProgress(n2);
    setNumOfJobsOnHold(n3);
  }, []);

  return (
    <div className="banner w-auto m-2 bg-white drop-shadow-lg p-2 rounded-lg">
      <div className="button-container flex justify-around items-center w-auto max-w-screen-4xl">
        <button className="button rounded-md h-20 flex-1 mx-1 bg-yellow text-white text-lg">
          {numOfJobsInProgress} On Road
        </button>
        <button className="button rounded-md h-20 flex-1 mx-1 bg-green text-white text-lg">
          {numOfJobsCompleted} Completed
        </button>
        <button className="button rounded-md h-20 flex-1 mx-1 bg-red text-white text-lg">
          {numOfJobsOnHold} On Hold
        </button>
      </div>
    </div>
  );
}

export default Banner;
