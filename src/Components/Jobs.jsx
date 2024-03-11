import React, { useEffect, useState } from "react";
import { Job } from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../Slice/Jobs-slice";

export const Jobs = () => {
  // const [jobs,setJobs] = useState([]);
  const dispatch = useDispatch();
  const allJobs = useSelector((state) => state.jobReducers);

  console.log("selector", allJobs);
  useEffect(() => {
    dispatch(getAllJobs());
  // setJobs(allJobs.jobs)

  }, []);

  return( <div>
       {allJobs.loading && <p>...loading</p> }
       {allJobs.jobs.jobs && (allJobs.jobs.jobs.map((item,idx)=><Job key={idx} currentjob = {item}/>))}
  </div>);
};
