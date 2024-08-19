import React from 'react';
import Link from 'next/link';

interface JobCardProps {
  id: string;
  title: string;
  description: string;
  location: string[];
  orgName: string;
  logoUrl: string;
  categories: string[];
}

const JobCard: React.FC<JobCardProps> = ({ id, title, description, location, orgName, logoUrl, categories }) => {
  return (
    <Link href={`/opportunities/${id}`} className='hover:bg-slate-300'>
      <div className="job w-[919px] h-fit p-6 rounded-[30px] border border-[#D6DDEB] block">
        <div className="mainContent w-[844px] h-fit gap-6 grid grid-cols-9">
          <img src={logoUrl} className="w-[66px] h-[59px]" alt={`${orgName} logo`} />
          <div className="jobDescription w-[755px] grid gap-3">
            <h3 className="jobTitle font-epilogue text-[20px] font-semibold leading-[24px] text-left text-[#25324B]">
              {title}
            </h3>
            <p className="jobOrgName font-epilogue text-[16px] w-fit font-normal leading-[25.6px] text-[#7C8493]">
              <span>{orgName}</span>
              <i className="flex justify-center align-middle mx-2 bg-[#7C8493] rounded-full fas fa-circle text-[4px]"></i>
              <span>{location.join(', ')}</span>
            </p>
            <p className="jobDescription font-epilogue text-base font-normal leading-6 text-[#25324B]">
              {description}
            </p>
            <div className="chips flex flex-wrap gap-3">
              {categories.length > 0 && (
                <div className="chip bg-[#56CDAD1A] text-green-500 w-fit h-min px-2.5 py-1.5 rounded-full gap-2 font-epilogue text-[12px] font-semibold leading-[19.2px]">
                  {categories[0]}
                </div>
              )}
              {categories.length > 1 && (
                <div className="chip text-yellow-500 w-fit h-min px-2.5 py-1.5 rounded-full gap-2 border border-[#FFB836] font-epilogue text-[12px] font-semibold leading-[19.2px]">
                  {categories[1]}
                </div>
              )}
              {categories.length > 2 && (
                <div className="chip border border-[#4640DE] text-purple-500 px-2.5 py-1.5 w-[60px] text-center h-fit font-epilogue text-[12px] font-semibold leading-[19.2px] gap-2" style={{ borderRadius: '80px' }}>
                  {categories[2]}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
