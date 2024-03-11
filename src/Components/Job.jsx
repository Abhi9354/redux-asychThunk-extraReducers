import React, { useEffect } from 'react'
// import { getAllJobs } from '../api-call/api-client';

export const Job = ({currentjob}) => {
   
  return (
    <div>
      <p>{currentjob.title}</p>
      <p>Job desc :{currentjob.description}</p>
      <p>Position : {currentjob.position}</p>
      <p>{currentjob.perks}</p>
      <p>SalaryRange-{currentjob.salaryRange.from}-{currentjob.salaryRange.to}</p>
      <hr />
    </div>
  )
}
