import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Platform", hasDropdown: false, isActive: true },
  { label: "Solutions", hasDropdown: true, isActive: false },
  { label: "Enterprises", hasDropdown: true, isActive: false },
  { label: "Developers", hasDropdown: false, isActive: false },
  { label: "Pricing", hasDropdown: false, isActive: false },
];

export const HeaderWrapperSubsection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-2.5 px-[110px] py-[17px] border-b-2 [border-bottom-style:solid] border-[#ffffff1a] bg-[linear-gradient(169deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)]">
      <header className="relative w-full h-20 bg-transparent">
        <img
          className="absolute top-[calc(50.00%_-_19px)] left-0 w-[184px] h-[38px]"
          alt="Group"
          src="/logo.png"
        />

        <nav className="inline-flex items-center gap-16 absolute top-[29px] left-1/2 -translate-x-1/2">
          {navigationItems.map((item, index) => (
            <div key={index} className="relative">
              {item.hasDropdown ? (
                <button className="inline-flex items-end justify-center gap-[5px] relative flex-[0_0_auto] bg-transparent border-none cursor-pointer">
                  <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#d8d8d8] text-[17.7px] tracking-[0] leading-[18px] whitespace-nowrap">
                    {item.label}
                  </span>
                  <ChevronDownIcon className="w-[12.59px] h-3.5 text-[#d8d8d8]" />
                </button>
              ) : (
                <button className="relative flex items-center justify-center w-fit [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#d8d8d8] text-[17.7px] tracking-[0] leading-[18px] whitespace-nowrap bg-transparent border-none cursor-pointer">
                  {item.label}
                </button>
              )}
              {item.isActive && item.label === "Platform" && (
                <div className="absolute top-[30px] left-[-5px] w-[85px] h-1 bg-white rounded-[30px]" />
              )}
            </div>
          ))}
        </nav>

        <div className="inline-flex items-center gap-2.5 absolute top-[13px] right-0">
          <Button
            variant="outline"
            className="h-auto inline-flex items-center justify-center gap-2.5 px-[50px] py-[18px] relative flex-[0_0_auto] rounded-[10px] border border-solid border-white bg-transparent hover:bg-white/10"
          >
            <span className="relative w-fit mt-[-1.00px] [font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-white text-lg text-center leading-[18px] whitespace-nowrap flex items-center justify-center tracking-[0]">
              Register
            </span>
          </Button>

          <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-[60px] py-[18px] relative flex-[0_0_auto] bg-app-secondary hover:bg-app-secondary/90 rounded-[10px]">
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-white text-lg text-center tracking-[0] leading-[18px] whitespace-nowrap">
              Login
            </span>
          </Button>
        </div>
      </header>
    </div>
  );
};
