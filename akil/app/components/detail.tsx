
import React from 'react';
import { useGetOpportunityByIdQuery } from '../redux/info';

interface IdProps{
  id: string | string[];
}

const Detail:React.FC<IdProps> = ({id}) => {
  
  const {data, isError, isLoading, isFetching, isSuccess} = useGetOpportunityByIdQuery(id);
  if (isLoading || isFetching) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  if (!data.data) return <div>No Jobs.</div>;
  const job = data.data;
  console.log(job);

  return (
    <div className='flex justify-center'>
    <div className='w-[1229px] h-fit top-[502px] left-[-784.5px] pt-[32px] flex gap-[62px]'>
 
<div className="jobDescription w-[815px] h-fit py-[46px] flex flex-col gap-[55px]">
  <div className="description w-full max-w-[815px] h-fit flex flex-col gap-[16px]">
    <h3 className='w-[147px] h-[29px] font-serif text-[24px] font-black leading-[28.8px] text-[#25324B]'>
      Description
    </h3>
    <p className='w-[815px] h-[130px] font-epilogue text-[16px] font-normal leading-[25.6px] text-[#25324B]'>
      {job.description}
    </p>
  </div>
  <div className="requirements w-full max-w-[815px] h-fit flex flex-col gap-[16px]">
    <h1 className='w-[202px] h-[29px] font-serif text-[24px] font-black leading-[28.8px] text-[#25324B]'>
      Requirements
    </h1>
    <ul className='w-full max-w-[815px] flex flex-col gap-4'>
      {job.responsibilities.split('\n').map((item:string, index:number) => (
        <li key={index} className='w-fit h-fit flex gap-[8px]'>
          <svg className='w-[20px] h-[20px] text-[#56CDAD]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <p className='w-[682px] h-[26px] text-[#25324B]'>
            {item}
          </p>
        </li>
      ))}
    </ul>
  </div>

  <div className="idealCandidate w-full max-w-[815px] h-fit flex flex-col gap-4">
    <h3 className='w-[310px] h-[29px] font-serif text-[24px] font-black leading-[28.8px] text-[#25324B]'>
      Ideal Candidate we want
    </h3>
    <ul className='w-full max-w-[815px] h-fit flex flex-col gap-[8px] list-disc pl-5'>
  {job.idealCandidate.split('\n').map((trait:string, index:number) => {
    return (
      <li key={index} className='font-epilogue text-base font-normal leading-6 text-[#25324B]'>
        <span className='font-epilogue text-base font-bold leading-6'></span> {trait}
      </li>
    );
  })}
</ul>
  </div>
  <div className="whenAndWhere w-[724px] h-fit flex flex-col gap-[23px]">
    <h4 className='w-[187px] h-[29px] font-serif text-[24px] font-bold leading-[28.8px] text-[#25324B]'>
      When & Where
    </h4>
    <div className='w-fit h-fit flex gap-[30px]'>
      <div className='w-fit h-fit p-[10px] gap-[10px] rounded-full border border-[#D6DDEB]'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-[24px] h-[24px] text-[#26A4FF]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      </div>
      <p className='w-[815px] h-[44px] font-epilogue text-[16px] font-normal leading-[25.6px] text-[#25324B]'>
        {job.whenAndWhere}
      </p>
    </div>
  </div>
</div>

      <div className="moreInformation w- h-fit flex flex-col gap-[20px]">
        <h3 className='w-[78px] h-[29px] font-serif text-[24px] font-extrabold leading-[28.8px] text-[#25324B]'>
          About
        </h3>
        <div className="eventTime w-fit h-fit flex gap-4">
          <div className='w-fit h-fit p-[10px] gap-[10px] rounded-full border border-[#D6DDEB]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-[24px] h-[24px] text-[#26A4FF]'>
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div className='w-ft h-fit'>
            <p className='w-[81px] h-[26px] font-epilogue text-[16px] font-normal leading-[25.6px] text-[#515B6F]'>
              posted on
            </p>
            <p className='w-fit h-[26px] font-epilogue text-[16px] font-semibold leading-[25.6px] text-[#25324B]'>
              {(job.datePosted)}
            </p>
          </div>
        </div>
        <div className="eventTime w-fit h-fit flex gap-4">
          <div className='w-fit h-fit p-[10px] gap-[10px] rounded-full border border-[#D6DDEB]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-[24px] h-[24px] text-[#26A4FF]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
</svg>

          </div>
          <div className='w-ft h-fit'>
            <p className='w-[82px] h-[26px] font-epilogue text-[16px] font-normal leading-[25.6px] text-[#515B6F]'>
              Deadline
            </p>
            <p className='w-fit h-[26px] font-epilogue text-[16px] font-semibold leading-[25.6px] text-[#25324B]'>
              {(job.deadline)}
            </p>
          </div>
        </div>
        <div className="eventTime w-fit h-fit flex gap-4">
          <div className='w-fit h-fit p-[10px] gap-[10px] rounded-full border border-[#D6DDEB]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-[24px] h-[24px] text-[#26A4FF]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

          </div>
          <div className='w-ft h-fit'>
            <p className='w-[81px] h-[26px] font-epilogue text-[16px] font-normal leading-[25.6px] text-[#515B6F]'>
              Location
            </p>
            <p className='w-fit h-[26px] font-epilogue text-[16px] font-semibold leading-[25.6px] text-[#25324B]'>
              {(job.location)}
            </p>
          </div>
        </div>
        <div className="eventTime w-fit h-fit flex gap-4">
          <div className='w-fit h-fit p-[10px] gap-[10px] rounded-full border border-[#D6DDEB]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-[24px] h-[24px] text-[#26A4FF]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>


          </div>
          <div>
          <div className='w-ft h-fit'>
            <p className='w-[81px] h-[26px] font-epilogue text-[16px] font-normal leading-[25.6px] text-[#515B6F]'>
              Start Date
            </p>
            <p className='w-fit h-[26px] font-epilogue text-[16px] font-semibold leading-[25.6px] text-[#25324B]'>
              {(job.startDate)}
            </p>
          </div>
          </div>
        </div>

        <div className="eventTime w-fit h-fit flex gap-4">
          <div className='w-fit h-fit p-[10px] gap-[10px] rounded-full border border-[#D6DDEB]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-[24px] h-[24px] text-[#26A4FF]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>



          </div>
          <div>
          <div className='w-ft h-fit'>
            <p className='w-[81px] h-[26px] font-epilogue text-[16px] font-normal leading-[25.6px] text-[#515B6F]'>
              End Date
            </p>
            <p className='w-fit h-[26px] font-epilogue text-[16px] font-semibold leading-[25.6px] text-[#25324B]'>
              {(job.endDate)}
            </p>
          </div>
          </div>
        </div>
        <div className='w-[293.5px] border border-[#D6DDEB]'></div>
        
        <div className="categories w-fit h-fit flex flex-col gap-6">
          <h3 className='w-[139px] h-[29px] font-serif text-[24px] font-extrabold leading-[28.8px] text-[#25324B]

'>Categories</h3>
          <div className="categoryChips w-fit h-fit flex gap-3">
          <div className="chip text-yellow-500 w-fit h-min px-2.5 py-1.5 rounded-full gap-2 border border-[#FFB836] font-epilogue text-[12px] font-semibold leading-[19.2px]">
              {job.categories[0]}
            </div>
            <div className="chip bg-[#56CDAD1A] text-green-500 w-fit h-min px-2.5 py-1.5 rounded-full gap-2 font-epilogue text-[12px] font-semibold leading-[19.2px]">
              {job.categories[1]}
            </div>
            
          </div>
        </div>
        <div className='w-[293.5px] border border-[#D6DDEB]'></div>
        <div className="skills w -[293.5px] h-[121px] flex flex-col gap-5">
          <h3 className='w-[191px] h-[31.61px] top-[553px] left-[2.5px] font-serif text-[24px] font-extrabold leading-[28.8px] text-[#25324B]

'>Required Skills</h3>
          <div className="skillChips flex flex-wrap gap-3">
            <div className="chip w-[205px] h-[37.06px] top-[592.24px] p-[4px] px-[12px] bg-[#F8F8FD]

 "><p className='w-[181px] h-[26px] font-epilogue text-[16px] font-normal leading-[25.6px] text-[#4640DE]
'>{job.requiredSkills[0]}</p></div>
            <div className="chip w-[79px] h-[37.06px] p-[4px_12px]   top-[592.24px] left-[214.5px] bg-[#F8F8FD]
"><p className='w-[181px] h-[26px] font-epilogue text-[16px] font-normal leading-[25.6px] text-[#4640DE]'>{job.requiredSkills[1]}</p></div>
            <div className="chip w-[117px] h-[37.06px] p-[4px_12px] bg-[#F8F8FD]  top-[636.94px] left-[0.5px]
"><p className='w-[181px] h-[26px] font-epilogue text-[16px] font-normal leading-[25.6px] text-[#4640DE]'>{job.requiredSkills[2]}</p></div>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Detail;
