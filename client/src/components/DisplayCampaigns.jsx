import React from 'react';
import { useNavigate } from 'react-router-dom';

import FundCard from './FundCard';
import { loader } from '../assets';

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign })
  }
  
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({campaigns.length})</h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )}

        {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => <FundCard 
          key={campaign.id}
          {...campaign}
          handleClick={() => handleNavigate(campaign)}
        />)}
      </div>
      <div>
      <footer class="p-2 fixed bottom-8 max-w-sm md:max-w-lg bg-blend-multiply bg-white rounded-lg shadow md:flex dark:bg-[#1c1c24]">
    <span class="font-semibold  dark:text-white decoration-green-500"> Developed By <a href="https://hmahd.github.io" target = '_blank' class="hover:underline">Akash Hasendra™</a>❤️.
    </span>
      </footer>
      </div>
    </div>
    
  )
}

export default DisplayCampaigns