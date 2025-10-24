import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const companyLinks = [
  { label: "Home" },
  { label: "About Us" },
  { label: "Services" },
  { label: "Blog" },
];

const fraudDetectionLinks = [
  { label: "Identity Verification" },
  { label: "Escrow Services" },
  { label: "Api Documentation" },
];

const supportLinks = [
  { label: "Help" },
  { label: "Privacy Policy" },
  { label: "Term & Condition" },
  { label: "Contact Us" },
];

const socialLinks = [
  { label: "Linkedin" },
  { label: "Facebook" },
  { label: "Instagram" },
  { label: "Twitter" },
];

export const FooterSubsection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-app-primary">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Footer bg svg fill"
        src="/footer-bg-svg-fill.svg"
      />

      <div className="flex flex-col relative max-w-[1300px] mx-auto pt-[100px]">
        <div className="flex flex-row justify-between">
          <div className="pb-[60px]">
            <h2 className="text-[34px] leading-[40.8px] [font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-white mb-[40px]">
              Don't missed subscribed!
            </h2>

            <div className="flex max-w-[500px]">
              <Input
                placeholder="Enter Your Email"
                className="flex-1 h-[59px] rounded-r-none border-[#ffffff33] bg-transparent text-white placeholder:text-white placeholder:opacity-80 [font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-base opacity-80"
              />
              <img className="w-[72px] h-[59px]" alt="Button" src="/button.svg" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 pb-[60px]">
          <nav className="flex flex-col gap-[25px]">
              <h3 className="text-xl leading-6 [font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-white">
                Fraud Detection
              </h3>
              <ul className="flex flex-col gap-[10px]">
                {fraudDetectionLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-base leading-[27.2px] [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-white opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="flex flex-col gap-[25px]">
              <h3 className="text-xl leading-6 [font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-white">
                Company
              </h3>
              <ul className="flex flex-col gap-[10px]">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-base leading-[27.2px] [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-white opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="flex flex-col gap-[25px]">
              <h3 className="text-xl leading-6 [font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-white">
                Support
              </h3>
              <ul className="flex flex-col gap-[10px]">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-base leading-[27.2px] [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-white opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <Card className="bg-[#ffffff1a] border-none rounded-[20px] mb-[60px]">
          <CardContent className="p-[39px] flex items-center gap-[47px]">
            <img className="h-[54px]" alt="Group" src="/footer_logo.png" />

            <div className="flex-1 flex items-center justify-end gap-10">
              <div>
                <p className="text-base leading-[27.2px] [font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-white opacity-80 mb-[10px]">
                  Need help!
                </p>
                <p className="text-xl leading-6 [font-family:'DM_Sans_18pt-SemiBold',Helvetica] font-semibold text-white">
                  +1 809 120 705
                </p>
              </div>
              <div className="w-px h-[61px] bg-[#ffffff1a]" />
              <div>
                <p className="text-base leading-[27.2px] [font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-white opacity-80 mb-[10px]">
                  E-mail now
                </p>
                <p className="text-xl leading-6 [font-family:'DM_Sans_18pt-SemiBold',Helvetica] font-semibold text-white">
                  info@trustverify.com
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between mb-14">
          <p className="text-base leading-[27.2px] [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-white opacity-80">
            Copyright © 2025 All Rights Reserved.
          </p>

          <nav className="flex items-center gap-[27.3px]">
            {socialLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a
                  href="#"
                  className="text-base [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-white opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </a>
                {index < socialLinks.length - 1 && (
                  <div className="w-1.5 h-1.5 bg-[#ffffff1a] rounded-[3px]" />
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
