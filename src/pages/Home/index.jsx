import React from "react";
import TickeSold from "../component/TickeSold";
import BestSelling from "../component/BestSelling";
import MyDatePicker from "../component/UpcomingEvent";

const Home = () => {
  return (
    <>
      <div className="tw-flex">
        <div className=" tw-w-[20vw]"></div>
        <div className=" tw-flex tw-gap-2 tw-w-[75vw] tw-m-auto ">
         
          <div className="tw-mx-4 tw-my-4  tw-rounded-3xl tw-w-[42vw] tw-bg-white">
        
            <BestSelling />
          </div>
          <div className="tw-mx-4 tw-my-4 tw-h-[30vh] tw-text    tw-rounded-3xl  tw-w-[42vw] tw-bg-[#0e8a74]">
         
         <TickeSold />
       </div>
        </div>

      </div>
      <div className="tw-flex">
      <div className=" tw-w-[20vw]"></div>
      <div className="tw-flex tw-w-[75w] tw-gap-5 tw-m-auto">
          <div className="tw-w-[50vw] tw-bg-red-200">bbb</div>
          <div className="tw-w-[21vw] tw-bg-white tw-rounded-3xl"><MyDatePicker/></div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
