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
    <div className="bg-[#f6f6f6] w-full flex flex-col mx-auto min-h-screen">
      {/* <APIHeader navigationItems={navigationItems} /> */}
      <HeaderDemo />
      <section className="flex flex-col items-start gap-4 sm:gap-6 md:gap-[31px] w-full p-4 sm:p-6 md:p-10 lg:p-10 xl:p-14 max-w-full">
        <header className="flex flex-col items-start gap-4 sm:gap-5 md:gap-6 w-full">
          <button className="inline-flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <ArrowLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#808080]" />
            <span className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-sm sm:text-base md:text-lg lg:text-[22px] tracking-[0] leading-[normal]">
              Return to Homepage
            </span>
          </button>

          <div className="flex flex-col items-start gap-3 sm:gap-4 md:gap-4 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3 sm:gap-4 md:gap-4 lg:gap-0">
              <h1 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl tracking-[0] leading-tight sm:leading-tight md:leading-[normal]">
                TrustVerify Live Demo
              </h1>

              <Badge className="inline-flex items-center justify-center gap-2.5 px-3 sm:px-3.5 py-1.5 sm:py-2 bg-[#27ae6033] rounded-[800px] hover:bg-[#27ae6033] h-auto w-fit self-start sm:self-auto">
                <div className="inline-flex items-center gap-[5px]">
                  <div className="w-[7px] h-[7px] bg-app-secondary rounded-[3.5px]" />
                  <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#27ae60] text-xs sm:text-sm md:text-base text-center tracking-[0] leading-[14px] whitespace-nowrap">
                    Live System
                  </span>
                </div>
              </Badge>
            </div>

            <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl tracking-[0] leading-5 sm:leading-6 md:leading-7 lg:leading-7 xl:leading-8 w-full">
              Experience real-time fraud prevention in action
            </p>
          </div>
        </header>

        <div className="flex flex-col items-start gap-4 sm:gap-6 md:gap-[31px] w-full">
          <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6 md:gap-6 lg:gap-6 w-full lg:items-stretch">
            <Card className="w-full lg:w-[538px] lg:flex-shrink-0 lg:max-w-[538px] lg:min-w-0 bg-white rounded-[14px] border-[0.8px] border-neutral-200 shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_1px_3px_#0000001a,0px_1px_2px_-1px_#0000001a]">
              <CardContent className="p-4 sm:p-5 md:p-6 lg:p-[25px]">
                <div className="inline-flex items-center gap-2.5 mb-5 sm:mb-6 md:mb-8 lg:mb-10">
                  <img
                    className="w-[18px] h-[18px] flex-shrink-0"
                    alt="Demo Controls Icon"
                    src="/fi-90731877.svg"
                  />
                  <h2 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-base sm:text-lg md:text-xl leading-5 sm:leading-4 text-[#003d2b] tracking-[0] whitespace-nowrap">
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

                <div className="mt-4 sm:mt-5 md:mt-5">
                  <h3 className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-base leading-6 text-[#003d2b] tracking-[0] mb-4 sm:mb-6 md:mb-9">
                    Demo Steps
                  </h3>

                  <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3">
                    {demoSteps.map((step) => (
                      <div
                        key={step.id}
                        className={`flex items-center min-h-[44px] sm:min-h-[48px] md:min-h-[50px] h-auto md:h-[50px] rounded-[10px] border-[0.8px] px-3 sm:px-4 md:px-[15px] py-2 sm:py-2.5 md:py-0 ${
                          step.active
                            ? "bg-[#eef5fe] border-[#0b3a7824]"
                            : "bg-[#f8f8f8] border-neutral-200"
                        }`}
                      >
                        {step.active ? (
                          <CheckCircle2Icon className="w-5 h-5 sm:w-5 md:w-6 md:h-6 text-app-primary mr-2.5 sm:mr-3 md:mr-[19px] flex-shrink-0" />
                        ) : (
                          <div className="w-5 h-5 sm:w-5 md:w-6 md:h-6 flex items-center justify-center bg-[#ececec] rounded-[100px] mr-2.5 sm:mr-3 md:mr-[19px] flex-shrink-0">
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
                          } text-xs sm:text-xs md:text-sm tracking-[0] leading-4 sm:leading-5 md:leading-5 break-words`}
                        >
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col lg:flex-1 lg:min-w-0 items-start gap-4 sm:gap-6 md:gap-[25px] w-full min-w-0">
              <Card className="w-full bg-white rounded-[14px] border-[0.8px] border-neutral-200 shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_1px_3px_#0000001a,0px_1px_2px_-1px_#0000001a]">
                <CardContent className="p-4 sm:p-5 md:p-6 lg:p-[25px]">
                  <div className="flex flex-col items-start gap-4 sm:gap-6 md:gap-[30px]">
                    <div>
                      <h2 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-base sm:text-lg md:text-xl tracking-[0] leading-5 sm:leading-6 md:leading-7 mb-2 sm:mb-2 md:mb-[9px]">
                        Transaction Initiation
                      </h2>
                      <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-sm sm:text-sm md:text-base tracking-[0] leading-5 sm:leading-5 md:leading-6">
                        A new transaction is created and enters our fraud
                        prevention system
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-4 sm:gap-5 md:gap-6 w-full">
                      <div className="w-full bg-[#f7f7f7] rounded-[14px] p-4 sm:p-5 md:p-6">
                        <h3 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-base sm:text-base md:text-lg tracking-[0] leading-5 sm:leading-5 md:leading-6 mb-3 sm:mb-4 md:mb-4">
                          New Transaction Request
                        </h3>

                        <div className="flex flex-col gap-3 sm:gap-4 md:gap-[10px]">
                          <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-3 sm:gap-4">
                            <div className="flex-1 w-full min-w-0">
                              <div className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-[#003d2b] text-xs sm:text-sm tracking-[0] leading-4 sm:leading-5 mb-[3px]">
                                Amount
                              </div>
                              <div className="[font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-[#808080] text-sm sm:text-base md:text-lg tracking-[0] leading-5 sm:leading-6 md:leading-7 break-words">
                                £2,500.00
                              </div>
                            </div>

                            <div className="flex-1 w-full min-w-0">
                              <div className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-[#003d2b] text-xs sm:text-sm tracking-[0] leading-4 sm:leading-5 mb-[3px]">
                                Type
                              </div>
                              <div className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-xs sm:text-sm md:text-base tracking-[0] leading-4 sm:leading-5 md:leading-6 break-words">
                                E-commerce Purchase
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-3 sm:gap-4">
                            <div className="flex-1 w-full min-w-0">
                              <div className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-[#003d2b] text-xs sm:text-sm tracking-[0] leading-4 sm:leading-5 mb-[3px]">
                                Buyer
                              </div>
                              <div className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-xs sm:text-sm md:text-base tracking-[0] leading-4 sm:leading-5 md:leading-6 break-words">
                                john.buyer@email.com
                              </div>
                            </div>

                            <div className="flex-1 w-full min-w-0">
                              <div className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-[#003d2b] text-xs sm:text-sm tracking-[0] leading-4 sm:leading-5 mb-[3px]">
                                Seller
                              </div>
                              <div className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-xs sm:text-sm md:text-base tracking-[0] leading-4 sm:leading-5 md:leading-6 break-words">
                                secure.store@merchant.com
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 md:gap-[18px] w-full">
                        <div className="flex-1 bg-green-50 rounded-[14px] border-[0.8px] border-[#b8f7cf] p-4 sm:p-5 md:p-6 min-w-0">
                          <div className="inline-flex items-end gap-3 sm:gap-3.5">
                            <div className="w-10 sm:w-[42px] h-9 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <ShoppingCartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0d532b]" />
                            </div>
                            <div className="min-w-0">
                              <div className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#0d532b] text-xs sm:text-sm md:text-base tracking-[0] leading-4 sm:leading-5 md:leading-6">
                                E-commerce
                              </div>
                              <div className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#008235] text-[10px] sm:text-xs md:text-sm tracking-[0] leading-4 sm:leading-4 md:leading-5">
                                Category: Electronics
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex-1 bg-[#eef5fe] rounded-[14px] border-[0.8px] border-[#bddaff] p-4 sm:p-5 md:p-6 min-w-0">
                          <div className="inline-flex items-center gap-3 sm:gap-3.5">
                            <div className="w-10 sm:w-[42px] h-9 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <CreditCardIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#1b388e]" />
                            </div>
                            <div className="min-w-0">
                              <div className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#1b388e] text-xs sm:text-sm md:text-base tracking-[0] leading-4 sm:leading-5 md:leading-6">
                                Payment
                              </div>
                              <div className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#1347e5] text-[10px] sm:text-xs md:text-sm tracking-[0] leading-4 sm:leading-4 md:leading-5">
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

              <Card className="w-full bg-app-primary rounded-[14px] sm:rounded-[16px] md:rounded-[17.63px] shadow-[0px_3.53px_8.81px_#003d2b1a] border-0 relative overflow-hidden">
                <CardContent className="p-5 sm:p-6 md:py-[41px] md:px-[52px] lg:py-6 lg:px-6 xl:py-[41px] xl:px-[52px]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between relative z-10 gap-5 sm:gap-6 md:gap-8 lg:gap-4 xl:gap-8">
                    <div className="flex flex-col items-start gap-3 sm:gap-4 md:gap-[27.32px] lg:gap-4 xl:gap-[27.32px] max-w-full md:max-w-[727px] lg:max-w-[500px] xl:max-w-[727px] flex-1">
                      <div className="flex flex-col items-start gap-2 sm:gap-2 md:gap-[8.81px] lg:gap-2 xl:gap-[8.81px]">
                        <h2 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-white text-xl sm:text-2xl md:text-[30px] lg:text-2xl xl:text-[35.3px] tracking-[-0.44px] leading-6 sm:leading-7 md:leading-[45px] lg:leading-7 xl:leading-[59.1px]">
                          Ready To Protect Your Business?
                        </h2>
                        <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-white text-sm sm:text-base md:text-[17px] lg:text-base xl:text-[19.4px] tracking-[0] leading-5 sm:leading-6 md:leading-[24px] lg:leading-6 xl:leading-[26.4px]">
                          Join thousands of companies trust TrustVerify to
                          secure their transactions and prevent fraud.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3 md:gap-[17.63px] lg:gap-3 xl:gap-[17.63px] w-full">
                        <Button className="w-full sm:w-auto sm:min-w-[180px] md:w-[206.25px] lg:w-[160px] xl:w-[206.25px] h-11 sm:h-12 md:h-[52.88px] lg:h-11 xl:h-[52.88px] bg-white hover:bg-white/90 rounded-[8.81px] text-app-primary">
                          <span className="[font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-xs sm:text-sm md:text-[15.9px] lg:text-sm xl:text-[15.9px] text-center tracking-[-0.18px] leading-[15.9px]">
                            Start Free Trial
                          </span>
                        </Button>

                        <Button
                          variant="outline"
                          className="w-full sm:w-auto sm:min-w-[180px] md:w-[203.23px] lg:w-[160px] xl:w-[203.23px] h-11 sm:h-12 md:h-[52.88px] lg:h-11 xl:h-[52.88px] bg-transparent hover:bg-white/10 rounded-[8.81px] border-[0.88px] border-white text-white"
                        >
                          <span className="[font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-xs sm:text-sm md:text-[15.9px] lg:text-sm xl:text-[15.9px] text-center tracking-[-0.18px] leading-[15.9px]">
                            Contact Sales
                          </span>
                        </Button>
                      </div>
                    </div>

                    <div className="flex-shrink-0 flex items-center justify-center md:justify-end">
                      <img
                        className="w-[180px] h-auto sm:w-[200px] md:w-[230px] lg:w-[180px] lg:h-auto xl:w-[258px] xl:h-[232px] object-contain"
                        alt="Security Shield"
                        src="/frame-1.svg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="w-full bg-[#d3203024] rounded-xl sm:rounded-2xl border-0">
            <CardContent className="px-4 py-4 sm:px-5 sm:py-5 md:px-[31px] md:py-[27px]">
              <div className="flex flex-col items-start gap-2 sm:gap-2.5 md:gap-2.5">
                <h3 className="[font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-[#d32030] text-base sm:text-lg md:text-[22px] tracking-[-0.20px] leading-5 sm:leading-6 md:leading-7 whitespace-normal">
                  Legal Notice:
                </h3>
                <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#d32030] text-sm sm:text-base md:text-lg tracking-[-0.20px] leading-5 sm:leading-6 md:leading-7">
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
