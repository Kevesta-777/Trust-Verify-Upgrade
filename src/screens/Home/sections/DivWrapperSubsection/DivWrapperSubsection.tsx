import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea } from "../../../../components/ui/scroll-area";

const industrySolutions = [
  {
    id: "01",
    icon: "/fi-12311778.svg",
    title: "Ecommerce Protection",
    description:
      "Protect online transaction, prevent chargebacks, and secure customer data with AI-powered fraud detection.",
    badges: [
      { label: "AI-Powered", color: "bg-[#a57eff33] text-[#a57eff]" },
      { label: "Real Time", color: "bg-[#00cc6133] text-[#00cc61]" },
    ],
  },
  {
    id: "02",
    icon: "/fi-8912559.svg",
    title: "Banking & Financial",
    description:
      "Advanced KYC/AML compliance regulatory reporting, and real-time transaction monitoring for financial institutions.",
    badges: [
      { label: "Enterprise Grade", color: "bg-[#3365cd33] text-[#3365cd]" },
      { label: "SOC 2 Ready", color: "bg-[#009cde33] text-[#009cde]" },
    ],
  },
  {
    id: "03",
    icon: "/fi-18137623.svg",
    title: "Marketplace Security",
    description:
      "Secure peer-to-peer transactions with automated escrow, smaller verification, and dispute resolution.",
    badges: [
      { label: "Coming Soon", color: "bg-[#f7c41b33] text-[#f7c31b]" },
      { label: "24/7 Monitoring", color: "bg-[#f29f5c33] text-[#f29f5c]" },
    ],
  },
  {
    id: "04",
    icon: "/fi-2891526.svg",
    title: "Enterprise Solutions",
    description:
      "Custom fraud prevention for large organizations with dedicated support and tailored integrations.",
    features: [
      { icon: "/fi-13648582.svg", label: "Dedicated Account Manager" },
      { icon: "/fi-4272432.svg", label: "Custom integration" },
      { icon: "/fi-4718418.svg", label: "SLA Gurantees" },
    ],
    badges: [
      { label: "Enterprise Ready", color: "bg-[#7648bc33] text-[#7648bc]" },
      { label: "Custom API", color: "bg-[#0013de33] text-[#0012de]" },
    ],
  },
  {
    id: "05",
    icon: "/fi-12453657.svg",
    title: "Digital Assets",
    description:
      "Blockchain transaction monitoring, cryptocurrency fraud detection, and digital wallet security.",
    features: [
      { icon: "/fi-8507044.svg", label: "Blockchain Analysis" },
      { icon: "/fi-3867588.svg", label: "Wallet Monitoring" },
      { icon: "/fi-3502515.svg", label: "Suspicious Pattern Detection" },
    ],
    badges: [
      { label: "Coming Soon", color: "bg-[#28739233] text-[#287392]" },
      { label: "24/7 Monitoring", color: "bg-[#60cdbc33] text-[#60ccbc]" },
    ],
  },
];

export const DivWrapperSubsection = (): JSX.Element => {
  return (
    <section className="flex items-start gap-[86px] w-full max-w-[1326px] mx-auto pt-[265px]">
      <div className="flex flex-col w-[620px] items-start gap-11">
        <header className="flex flex-col items-start gap-[21px] w-full">
          <Badge className="h-[30px] bg-[#003d2b1a] text-[#003d2b] hover:bg-[#003d2b1a] rounded-[800px] px-4">
            <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-sm tracking-[0] leading-[14px]">
              PREVENTION SOLUTIONS
            </span>
          </Badge>

          <h2 className="w-full font-semibold text-[46px] tracking-[-0.92px] leading-[55.2px] [font-family:'Suisse_Intl-SemiBold',Helvetica]">
            <span className="text-[#003d2b] tracking-[-0.42px]">Industry </span>
            <span className="text-[#1e357e] tracking-[-0.42px]">Solutions</span>
          </h2>

          <p className="w-full [font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#808080] text-lg tracking-[0] leading-[27.2px]">
            Tailored fraud prevention solutions designed for every industry,
            combining advanced technology with stunning visual protection to
            safeguard your business at every step.
          </p>
        </header>

        <div className="relative w-[620px] h-[536px]">
          <div className="absolute top-0 left-[15px] w-[calc(100%_-_95px)] h-[436px] rounded-[20px] overflow-hidden">
            <img
              className="w-[525px] h-[435px] object-cover"
              alt="Industry solutions showcase"
              src="/industry-solutions-showcase.png"
            />
          </div>

          <div className="absolute top-[319px] left-80 w-[calc(100%_-_320px)] h-[217px] rounded-[20px] overflow-hidden border-[9px] border-solid border-white">
            <img
              className="w-[300px] h-[217px] object-cover"
              alt="Industry detail"
              src="/industry-details.png"
            />
          </div>

          <Card className="absolute left-0 bottom-[45px] w-[44.35%] h-[90px] bg-white rounded-[5px] border-l-2 border-[#1e357e] shadow-[0px_2px_14px_#00000024]">
            <CardContent className="flex items-center gap-[22.2px] p-0 h-full">
              <div className="ml-[17px] [font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#1e357e] text-[46px] tracking-[-0.92px] leading-[normal] whitespace-nowrap">
                19+
              </div>
              <div className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base tracking-[0] leading-[27.2px]">
                Years of experience
                <br />
                in Industry
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <ScrollArea className="w-[620px] h-[908px]">
        <div className="flex flex-col gap-[17px]">
          {industrySolutions.map((solution, index) => (
            <Card
              key={solution.id}
              className="w-[620px] h-[258px] bg-[#f6f6f6] rounded-[20px] border-0 overflow-hidden relative"
            >
              <CardContent className="p-0 h-full">
                <div className="absolute top-[172px] left-[457px] [-webkit-text-stroke:1px_#808080] opacity-15 [font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-transparent text-[100px] tracking-[3.00px] leading-[120px] whitespace-nowrap">
                  {solution.id}
                </div>

                <div className="flex items-center gap-6 absolute top-[35px] left-10">
                  <img
                    className="w-[43px] h-[43px]"
                    alt={`${solution.title} icon`}
                    src={solution.icon}
                  />
                  <h3 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-xl tracking-[0] leading-6">
                    {solution.title}
                  </h3>
                </div>

                <div className="flex flex-col items-start gap-5 absolute top-[82px] left-[107px] w-[490px]">
                  <p className="h-12 [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base tracking-[0] leading-6">
                    {solution.description}
                  </p>

                  {solution.features && (
                    <div className="flex items-center gap-[15px] w-full">
                      {solution.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="inline-flex items-center gap-[5px]"
                        >
                          <img
                            className="w-5 h-5"
                            alt={feature.label}
                            src={feature.icon}
                          />
                          <span className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-[13px] tracking-[0] leading-[normal]">
                            {feature.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="inline-flex items-center gap-2.5">
                    {solution.badges.map((badge, badgeIndex) => (
                      <Badge
                        key={badgeIndex}
                        className={`h-[30px] ${badge.color} hover:${badge.color} rounded-[800px] px-4`}
                      >
                        <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-sm text-center tracking-[0] leading-[14px]">
                          {badge.label}
                        </span>
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
};
