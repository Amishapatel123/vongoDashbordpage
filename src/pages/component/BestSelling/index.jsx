import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Link from "next/link";


const index = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [activeButton, setActiveButton] = useState(1); // Initialize it with the default active button (Monthly)

  const Monthly = [
    {
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
      TiketLeft: {
        name: " Tiket Left",
        ticketleft: "21,512",
      },
      TiketSold: {
        name: " Tiket Sold",
        ticketsold: "45,612",
      },
      EventHeld: {
        name: " Event Held",
        eventheld: "275",
      },
    },
  ];
  const Weekly = [
    {
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
      TiketLeft: {
        name: " Tiket Left",
        ticketleft: "21,512",
      },
      TiketSold: {
        name: " Tiket Sold",
        ticketsold: "45,612",
      },
      EventHeld: {
        name: " Event Held",
        eventheld: "275",
      },
    },
  ];
  const Daily = [
    {
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
      TiketLeft: {
        name: " Tiket Left",
        ticketleft: "21,512",
      },
      TiketSold: {
        name: " Tiket Sold",
        ticketsold: "45,612",
      },
      EventHeld: {
        name: " Event Held",
        eventheld: "275",
      },
    },
  ];

  const datashow = (id) => {
    if (id === 1) {
      setSelectedData(Monthly);
    } else if (id === 2) {
      setSelectedData(Weekly);
    } else if (id === 3) {
      setSelectedData(Daily);
    }
    setActiveButton(id);
  };
  useEffect(() => {
    datashow(1);
  }, []);


  return (
    <div className="tw-flex-col tw-mx-5 tw-my-5 tw-font-normal">
      <div className=" tw-flex tw-justify-between">
        <div>Best Selling</div>
       <div className="tw-flex-col">
       <div className="tw-flex">
        
        <Button
          className={`${
            activeButton === 1
              ?"tw-text-[#0e8a74]" 
              :"tw-text-[#94cac0]"
               } tw-border-solid ${
            activeButton === 1 ? "tw-border-b-2" : "tw-border-b-1"
          } tw-rounded-none`}
          onClick={() => datashow(1)}
        >
          Monthly
        </Button>
        <Button
          className={` tw-border-solid
          ${
            activeButton === 2
              ?"tw-text-[#0e8a74]" 
              :"tw-text-[#94cac0]"
               } tw-border-solid
          
          ${
            activeButton === 2 ? "tw-border-b-2" : "tw-border-b-1"
          } tw-rounded-none`}
          onClick={() => datashow(2)}
        >
          Weekly
        </Button>
        <Button
          className={` tw-border-solid 
          ${activeButton ===3 ? "tw-text-[#0e8a74]":"tw-text-[#94cac0]"}
          ${
            activeButton === 3 ? "tw-border-b-2" : "tw-border-b-1"
          } tw-rounded-none`}
          onClick={() => datashow(3)}
        >
          Daily
        </Button>
       
      </div>
      <div className="tw-w-[15vw] tw-border-b-2 tw-mt-[-1px] tw-m-auto" ></div>
       </div>
      
      </div>

    
      <div className=" tw-my-2 tw-flex">
        <div className="tw-w-[16vw] "> DonutChart</div>
        <div className="tw-w-[20vw]">
          {selectedData?.map((item, key) => {
            return (
              <div className="tw-flex-col" key={key}>
                <div className="tw-text-xs tw-text-gray-600"> {item.details}</div>
                <div className="tw-flex tw-my-4 ">
                  <div className="tw-flex-col  ">
                  <div className="tw-bg-[#ff4b94] tw-w-[1vw] tw-h-[1vh] tw-rounded-full  tw-my-1"><button></button></div>
                  <div className="tw-my-1 tw-text-base tw-font-bold ">{item.TiketLeft.ticketleft}</div>
                  <div className="tw-text-sm">{item.TiketLeft.name}</div>
                  </div>
                  <div className="tw-flex-col tw-mx-4 tw-my-1">
                  <div className="tw-bg-[#94cac0] tw-w-[1vw] tw-h-[1vh] tw-rounded-full"><Button></Button></div>
      
                  <div className="tw-my-1 tw-text-base tw-font-bold ">{item.TiketSold.ticketsold}</div>
                  <div className="tw-text-sm">{item.TiketSold.name}</div>
                  </div>
                  <div className="tw-flex-col tw-mx-4 tw-my-1">
                  <div className="tw-bg-[#c8c8c8] tw-w-[1vw] tw-h-[1vh] tw-rounded-full"><Button></Button></div>
                  <div className="tw-my-1 tw-text-base tw-font-bold">{item.EventHeld.eventheld}</div>
                  <div className="tw-text-sm">{item.EventHeld.name}</div>
                  </div>
                
                </div>
             
               
              </div>
            );
          })}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default index;
