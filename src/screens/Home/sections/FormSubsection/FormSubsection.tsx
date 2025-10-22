import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FormSubsection = (): JSX.Element => {
  return (
    <Card className="w-full bg-app-primary rounded-[20px] shadow-[0px_4px_10px_#003d2b1a] border-0 max-w-[1290px] mx-auto mt-24">
      <CardContent className="flex gap-[54px] p-0">
        <div className="flex mt-[46.5px] w-full max-w-[825px] h-[228px] ml-[59px] flex-col items-start gap-[31px]">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <h2 className="mt-[-1.00px] text-white text-[40px] tracking-[-0.50px] leading-[67px] flex items-center justify-center [font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold">
              Ready To Protect Your Business?
            </h2>

            <p className="flex items-center justify-center [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[30px]">
              Join thousands of companies trust TrustVerify to secure their
              transactions and prevent fraud.
            </p>
          </div>

          <div className="inline-flex items-center gap-5">
            <Button className="w-[234px] h-[60px] bg-white rounded-[10px] hover:bg-white/90 h-auto">
              <span className="[font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-app-primary text-lg text-center tracking-[-0.20px] leading-[18px]">
                Start Free Trial
              </span>
            </Button>

            <Button
              variant="outline"
              className="w-[251px] h-[60px] rounded-[10px] border border-solid border-white bg-transparent hover:bg-white/10 text-white hover:text-white h-auto"
            >
              <span className="[font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-lg text-center tracking-[-0.20px] leading-[18px]">
                View Documentation
              </span>
            </Button>
          </div>
        </div>

        <img
          className="mt-[29px] w-[293px] h-[263px]"
          alt="Frame"
          src="/frame.svg"
        />
      </CardContent>
    </Card>
  );
};
