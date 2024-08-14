// 'use client';
import React from 'react';
import JobCard from './JobCard';
import { useGetAllOpportunityQuery } from '../redux/info';
const JobList = () => {
  const { data, isError, isLoading, isFetching } = useGetAllOpportunityQuery({});

  console.log("data is",data);
  if (isLoading || isFetching) {
    return <div className='mt-56'>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  if (!data) {
    return <div>No Jobs.</div>;
  }

  return (

    <div className='w-[1392px] h-fit p-[72px_123px_72px_124px]'>
      <div className='w-[919px] h-fit flex flex-col gap-[40px] pb-[124px]'>
        <div className='w-[919px] h-fit flex justify-between'>
          <div className='w-fit h-fit flex flex-col gap-2'>
            <h1 className='w-[236px] h-[38px] text-[32px] font-extrabold font-serif leading-[38.4px] text-[#25324B]'>
              Opportunities
            </h1>
            <p className='w-[146px] h-[26px] text-[16px] font-normal leading-[25.6px] text-[#7C8493]'>
              Showing {data.data.length} results
            </p>
          </div>
          <div className='w-fit h-fit flex gap-[22px]'>
            <span className='sortBy w-[59px] h-[26px] text-[16px] font-serif leading-[25.6px] text-[#7C8493]'>
              Sort by:
            </span>
            <select className='selectOptions bg-white'>
              <option className='selectOptions w-[111px] h-[26px] text-[16px] font-medium leading-[25.6px] text-[#25324B] p-3'>
                Most relevant
              </option>
              <option>Most recent</option>
              <option>Relevant</option>
            </select>
          </div>
        </div>
        {data.data.map((job:any) => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            description={job.description}
            location={job.location}
            orgName={job.orgName}
            logoUrl={job.logoUrl}
            categories={job.categories}
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;
