import { APIHeader } from "../../components/APIHeader";
import {
  ArrowLeftIcon,
  CheckCircle2Icon,
  CreditCardIcon,
  PlayIcon,
  RotateCcwIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import { HeaderDemo } from "../../components/HeaderDemo";


const demoSteps = [
  { id: 1, label: "Transaction Initiation", active: true },
  { id: 2, label: "Identity Verification", active: false },
  { id: 3, label: "Real-Time Fraud Detection", active: false },
  { id: 4, label: "Global Risk Intelligence", active: false },
  { id: 5, label: "Escrow Protection", active: false },
  { id: 6, label: "Transaction Approved", active: false },
  { id: 7, label: "Dispute Resolution Process", active: false },
];

export const TrustverifyLive = (): JSX.Element => {
  return (
    <div className="bg-[#f6f6f6] w-full flex flex-col  mx-auto">
      {/* <APIHeader navigationItems={navigationItems} /> */}
      <HeaderDemo />
      <section className="flex flex-col items-end gap-4 md:gap-[31px] w-full p-4 md:p-14">
        <header className="flex flex-col items-start gap-4 md:gap-6 w-full">
          <button className="inline-flex items-center gap-2.5">
            <ArrowLeftIcon className="w-5 h-5 md:w-6 md:h-6 text-[#808080]" />
            <span className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base md:text-[22px] tracking-[0] leading-[normal]">
              Return to Homepage
            </span>
          </button>

          <div className="flex flex-col items-start gap-3 md:gap-4 w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-3 md:gap-0">
              <h1 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-2xl md:text-5xl tracking-[0] leading-[normal]">
                TrustVerify Live Demo
              </h1>

              <Badge className="inline-flex items-center justify-center gap-2.5 px-3.5 py-2 bg-[#27ae6033] rounded-[800px] hover:bg-[#27ae6033] h-auto w-fit">
                <div className="inline-flex items-center gap-[5px]">
                  <div className="w-[7px] h-[7px] bg-app-secondary rounded-[3.5px]" />
                  <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#27ae60] text-sm md:text-base text-center tracking-[0] leading-[14px] whitespace-nowrap">
                    Live System
                  </span>
                </div>
              </Badge>
            </div>

            <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base md:text-xl tracking-[0] leading-6 md:leading-8">
              Experience real-time fraud prevention in action
            </p>
          </div>
        </header>

        <div className="flex flex-col items-start gap-4 md:gap-[31px] w-full">
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 w-full">
            <Card className="w-full md:w-[538px] bg-white rounded-[14px] border-[0.8px] border-neutral-200 shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_1px_3px_#0000001a,0px_1px_2px_-1px_#0000001a]">
              <CardContent className="p-4 md:p-[25px]">
                <div className="inline-flex items-center gap-2.5 mb-6 md:mb-10">
                  <img
                    className="w-[18px] h-[18px]"
                    alt="Demo Controls Icon"
                    src="/fi-90731877.svg"
                  />
                  <h2 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-lg md:text-xl leading-4 text-[#003d2b] tracking-[0] whitespace-nowrap">
                    Demo Controls
                  </h2>
                </div>

                <div className="flex flex-col items-start gap-4 md:gap-6">
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <div className="flex items-center justify-between w-full h-5">
                      <span className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#003d2b] text-sm tracking-[0] leading-5">
                        Progress
                      </span>
                      <div className="flex items-center justify-center gap-2.5 px-1.5 py-0">
                        <span className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#003d2b] text-sm tracking-[0] leading-5 whitespace-nowrap">
                          1 / 7
                        </span>
                      </div>
                    </div>

                    <Progress
                      value={14.29}
                      className="w-full h-2 bg-[#d8d8d8]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full">
                    <Button className="flex-1 h-9 bg-[#003d2b] hover:bg-[#003d2b]/90 rounded-md shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_1px_2px_#0000000d]">
                      <PlayIcon className="w-[15px] h-[15px] mr-2.5" />
                      <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-neutral-50 text-sm tracking-[0] leading-5">
                        PlayIcon
                      </span>
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full sm:w-[122px] h-9 bg-white rounded-md border-[0.8px] border-neutral-200 shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_1px_2px_#0000000d]"
                    >
                      <RotateCcwIcon className="w-4 h-4 mr-2.5" />
                      <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-neutral-950 text-sm tracking-[0] leading-5">
                        Reset
                      </span>
                    </Button>
                  </div>
                </div>

                <div className="mt-4 md:mt-5">
                  <h3 className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-base leading-6 text-[#003d2b] tracking-[0] mb-6 md:mb-9">
                    Demo Steps
                  </h3>

                  <div className="flex flex-col gap-2 md:gap-3">
                    {demoSteps.map((step) => (
                      <div
                        key={step.id}
                        className={`flex items-center min-h-[50px] h-auto md:h-[50px] rounded-[10px] border-[0.8px] px-3 md:px-[15px] py-2 md:py-0 ${
                          step.active
                            ? "bg-[#eef5fe] border-[#0b3a7824]"
                            : "bg-[#f8f8f8] border-neutral-200"
                        }`}
                      >
                        {step.active ? (
                          <CheckCircle2Icon className="w-5 h-5 md:w-6 md:h-6 text-app-primary mr-3 md:mr-[19px] flex-shrink-0" />
                        ) : (
                          <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center bg-[#ececec] rounded-[100px] mr-3 md:mr-[19px] flex-shrink-0">
                            <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#808080] text-xs tracking-[0] leading-4">
                              {step.id}
                            </span>
                          </div>
                        )}
                        <span
                          className={`[font-family:'${
                            step.active
                              ? "DM_Sans_18pt-SemiBold"
                              : "DM_Sans_18pt-Regular"
                          }',Helvetica] ${
                            step.active
                              ? "font-semibold text-app-primary"
                              : "font-normal text-[#808080]"
                          } text-xs md:text-sm tracking-[0] leading-4 md:leading-5 break-words`}
                        >
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col flex-1 items-start gap-4 md:gap-[25px] w-full">
              <Card className="w-full bg-white rounded-[14px] border-[0.8px] border-neutral-200 shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_1px_3px_#0000001a,0px_1px_2px_-1px_#0000001a]">
                <CardContent className="p-4 md:p-[25px]">
                  <div className="flex flex-col items-start gap-4 md:gap-[30px]">
                    <div>
                      <h2 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-lg md:text-xl tracking-[0] leading-6 md:leading-7 mb-2 md:mb-[9px]">
                        Transaction Initiation
                      </h2>
                      <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-sm tracking-[0] leading-5">
                        A new transaction is created and enters our fraud
                        prevention system
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-4 md:gap-6 w-full">
                      <div className="w-full bg-[#f7f7f7] rounded-[14px] p-4 md:p-6">
                        <h3 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-base md:text-lg tracking-[0] leading-5 md:leading-6 mb-3 md:mb-4">
                          New Transaction Request
                        </h3>

                        <div className="flex flex-col gap-3 md:gap-[10px]">
                          <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-3 sm:gap-4">
                            <div className="flex-1 w-full">
                              <div className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-[#003d2b] text-sm tracking-[0] leading-5 mb-[3px]">
                                Amount
                              </div>
                              <div className="[font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-[#808080] text-base md:text-lg tracking-[0] leading-6 md:leading-7">
                                £2,500.00
                              </div>
                            </div>

                            <div className="flex-1 w-full">
                              <div className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-[#003d2b] text-sm tracking-[0] leading-5 mb-[3px]">
                                Type
                              </div>
                              <div className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                                E-commerce Purchase
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-3 sm:gap-4">
                            <div className="flex-1 w-full">
                              <div className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-[#003d2b] text-sm tracking-[0] leading-5 mb-[3px]">
                                Buyer
                              </div>
                              <div className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-sm md:text-base tracking-[0] leading-5 md:leading-6 break-words">
                                john.buyer@email.com
                              </div>
                            </div>

                            <div className="flex-1 w-full">
                              <div className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-[#003d2b] text-sm tracking-[0] leading-5 mb-[3px]">
                                Seller
                              </div>
                              <div className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-sm md:text-base tracking-[0] leading-5 md:leading-6 break-words">
                                secure.store@merchant.com
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 md:gap-[18px] w-full">
                        <div className="flex-1 bg-green-50 rounded-[14px] border-[0.8px] border-[#b8f7cf] p-4 md:p-6">
                          <div className="inline-flex items-end gap-3.5">
                            <div className="w-[42px] h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <ShoppingCartIcon className="w-5 h-5 text-[#0d532b]" />
                            </div>
                            <div>
                              <div className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#0d532b] text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                                E-commerce
                              </div>
                              <div className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#008235] text-xs md:text-sm tracking-[0] leading-4 md:leading-5">
                                Category: Electronics
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex-1 bg-[#eef5fe] rounded-[14px] border-[0.8px] border-[#bddaff] p-4 md:p-6">
                          <div className="inline-flex items-center gap-3.5">
                            <div className="w-[42px] h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <CreditCardIcon className="w-5 h-5 text-[#1b388e]" />
                            </div>
                            <div>
                              <div className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#1b388e] text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                                Payment
                              </div>
                              <div className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#1347e5] text-xs md:text-sm tracking-[0] leading-4 md:leading-5">
                                Method: Credit Card
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full bg-app-primary rounded-[17.63px] shadow-[0px_3.53px_8.81px_#003d2b1a] border-0 relative overflow-hidden">
                <CardContent className="p-6 md:p-[41px_52px]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between relative z-10 gap-6 md:gap-0">
                    <div className="flex flex-col items-start gap-4 md:gap-[27.32px] max-w-full md:max-w-[727px]">
                      <div className="flex flex-col items-start gap-2 md:gap-[8.81px]">
                        <h2 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-white text-2xl md:text-[35.3px] tracking-[-0.44px] leading-7 md:leading-[59.1px]">
                          Ready To Protect Your Business?
                        </h2>
                        <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-white text-base md:text-[19.4px] tracking-[0] leading-6 md:leading-[26.4px]">
                          Join thousands of companies trust TrustVerify to
                          secure their transactions and prevent fraud.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-[17.63px] w-full">
                        <Button className="w-full sm:w-[206.25px] h-[52.88px] bg-white hover:bg-white/90 rounded-[8.81px] text-app-primary">
                          <span className="[font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-sm md:text-[15.9px] text-center tracking-[-0.18px] leading-[15.9px]">
                            Start Free Trial
                          </span>
                        </Button>

                        <Button
                          variant="outline"
                          className="w-full sm:w-[203.23px] h-[52.88px] bg-transparent hover:bg-white/10 rounded-[8.81px] border-[0.88px] border-white text-white"
                        >
                          <span className="[font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-sm md:text-[15.9px] text-center tracking-[-0.18px] leading-[15.9px]">
                            Contact Sales
                          </span>
                        </Button>
                      </div>
                    </div>

                    <img
                      className="w-full max-w-[200px] md:max-w-[258px] h-auto md:w-[258px] md:h-[232px] mx-auto md:mx-0"
                      alt="Security Shield"
                      src="/frame-1.svg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="w-full bg-[#d3203024] rounded-2xl border-0">
            <CardContent className="px-4 py-4 md:px-[31px] md:py-[27px]">
              <div className="flex flex-col items-start gap-2 md:gap-2.5">
                <h3 className="[font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-[#d32030] text-lg md:text-[22px] tracking-[-0.20px] leading-6 md:leading-7 whitespace-normal md:whitespace-nowrap">
                  Legal Notice:
                </h3>
                <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#d32030] text-base md:text-lg tracking-[-0.20px] leading-6 md:leading-7">
                  TrustVerify provides technology services only. We do not
                  guarantee results or assume liability for user decisions. All
                  users must conduct independent due diligence. Use of our
                  platform constitutes acceptance of our Terms of Service and
                  Privacy Policy.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
