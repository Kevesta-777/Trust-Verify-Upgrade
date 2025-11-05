import React from "react";
import { Button } from "../../components/ui/button";
import { ChevronRightIcon, CopyIcon } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

const navigationItems = [
    { label: "Demo", isActive: true },
    { label: "Business", isActive: false },
    { label: "Developers", isActive: false },
    { label: "Pricing", isActive: false },
    { label: "Support", isActive: false },
  ];

  const apiEndpoints = [
    {
      id: "authentication",
      label: "Authentication",
      icon: "/fi-263069.svg",
      active: true,
    },
    {
      id: "transactions",
      label: "Transactions",
      icon: "/fi-4475436.svg",
      active: false,
    },
    {
      id: "kyc",
      label: "KYC Verification",
      icon: "/fi-7355471.svg",
      active: false,
    },
    {
      id: "fraud",
      label: "Fraud Detection",
      icon: "/fi-11083384.svg",
      active: false,
    },
    {
      id: "webhooks",
      label: "Webhooks",
      icon: "/fi-2449158.svg",
      active: false,
    },
  ];
  
  const errorCodes = [
    {
      code: "400",
      title: "Bad Request",
      description: "Invalid request parameters or missing required fields",
    },
    {
      code: "401",
      title: "Unauthorized",
      description: "Invalid or missing API key",
    },
    {
      code: "403",
      title: "Forbidden",
      description: "Insufficient permissions for the requested operation",
    },
    {
      code: "429",
      title: "Rate Limited",
      description: "Too many requests, please slow down",
    },
  ];

export const ApiReferences = (): JSX.Element => {
  return (
    <div className="bg-[#f6f6f6] w-full flex flex-col">
        <header className="flex w-full relative flex-col items-start gap-2.5 px-[110px] py-[17px] bg-[linear-gradient(169deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)]">
            <div className="relative w-full flex items-center justify-between">
                <img
                className="w-[184px] h-[38px]"
                alt="TrustVerify Logo"
                src="/group.png"
                />

                <nav className="flex items-center gap-16">
                {navigationItems.map((item, index) => (
                    <Button
                    key={index}
                    variant="ghost"
                    className={`h-auto p-0 hover:bg-transparent ${
                        item.isActive
                        ? "[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#d8d8d8] text-lg"
                        : "[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#d8d8d8] text-[17.7px]"
                    } tracking-[0] leading-[18px]`}
                    >
                    {item.label}
                    </Button>
                ))}
                </nav>
            </div>
        </header>

        <div className="flex flex-col items-start gap-[30px] w-full">
      <div className="flex flex-col items-start gap-6 w-full">
        <button className="inline-flex items-center gap-2.5">
          <img
            className="w-6 h-6"
            alt="Back"
            src="/flat-color-icons-next.svg"
          />
          <div className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-[22px] tracking-[0] leading-[normal]">
            Back
          </div>
        </button>

        <div className="flex flex-col items-start gap-2.5 w-full">
          <h1 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-5xl tracking-[0] leading-[normal]">
            API References
          </h1>
          <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-xl tracking-[0] leading-8">
            Complete reference for TrustVault REST API endpoints
          </p>
        </div>
      </div>

      <div className="flex items-start gap-[21px] w-full">
        <Card className="w-[389px] bg-white rounded-[14px] border-[0.8px] border-neutral-200 shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_1px_3px_#0000001a,0px_1px_2px_-1px_#0000001a]">
          <CardContent className="flex flex-col items-start gap-[50px] p-6">
            <h2 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-xl tracking-[0] leading-4">
              API Endpoints
            </h2>

            <div className="flex flex-col items-start gap-[21px] w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                {apiEndpoints.map((endpoint) => (
                  <button
                    key={endpoint.id}
                    className={`flex items-center justify-between w-full h-[50px] rounded-[10px] px-[15px] ${
                      endpoint.active ? "bg-app-secondary" : "bg-[#f8f8f8]"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2.5">
                      <img
                        className="w-6 h-6"
                        alt={endpoint.label}
                        src={endpoint.icon}
                      />
                      <span
                        className={`[font-family:'DM_Sans_18pt-${
                          endpoint.active ? "SemiBold" : "Regular"
                        }',Helvetica] ${
                          endpoint.active ? "font-semibold" : "font-normal"
                        } ${
                          endpoint.active ? "text-white" : "text-[#b4b4b4]"
                        } text-sm tracking-[0] leading-5 whitespace-nowrap`}
                      >
                        {endpoint.label}
                      </span>
                    </div>
                    <ChevronRightIcon
                      className={`w-3 h-3 ${
                        endpoint.active ? "text-white" : "text-[#b4b4b4]"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <Card className="w-full bg-[#eef5fe] rounded-[14px] border-[0.8px] border-[#bddaff]">
                <CardContent className="flex items-start gap-4 p-[19px]">
                  <img
                    className="w-[42px] h-10"
                    alt="Base URL"
                    src="/p-2-bg-blue-100-rounded-lg.svg"
                  />
                  <div className="flex flex-col items-start gap-1">
                    <div className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#1b388e] text-base tracking-[0] leading-6">
                      Base URL
                    </div>
                    <div className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#1347e5] text-sm tracking-[0] leading-5">
                      https://api.trustvault.com/v1
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col flex-1 items-start gap-6">
          <Card className="w-full bg-[#fcfcfc] rounded-[20px] border-[0.8px] border-[#e4e4e4]">
            <CardContent className="flex flex-col items-start gap-[39px] p-6">
              <div className="inline-flex items-start gap-2.5">
                <img
                  className="w-[46px] h-[46px]"
                  alt="Quick Start"
                  src="/p-2-rounded-lg-bg-accent-10-1.svg"
                />
                <div className="flex flex-col items-start gap-0.5">
                  <h3 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-xl tracking-[0] leading-6">
                    Quick Start
                  </h3>
                  <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-sm tracking-[0] leading-6">
                    Get Started With The Trustvault Api In Seconds
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-[30px] w-full">
                <Card className="w-full bg-[#f7f7f7] rounded-[14px] border-0">
                  <CardContent className="flex flex-col items-start gap-6 p-6">
                    <h4 className="text-lg [font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] tracking-[0] leading-6">
                      Authentication
                    </h4>

                    <div className="flex flex-col items-start gap-2.5 w-full">
                      <p className="text-[#0052cc] [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[15px] tracking-[0] leading-6 whitespace-nowrap">
                        Include Your Api Key In Authorization Header For All
                        Request
                      </p>

                      <div className="flex items-center gap-2.5 px-[23px] py-6 w-full bg-[#121728] rounded-[10px] h-[55px]">
                        <code className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#27ae60] text-base tracking-[0] leading-6">
                          Authorization: Bearer YOUR_API_KEY
                        </code>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex items-center justify-between w-full max-w-[596px]">
                  <div className="flex flex-col items-start gap-2">
                    <div className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-[#003d2b] text-base tracking-[0] leading-5">
                      Content Type
                    </div>
                    <div className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base tracking-[0] leading-6">
                      application/json
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <div className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-[#003d2b] text-base tracking-[0] leading-5">
                      Rate Limit
                    </div>
                    <div className="[font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-[#a308f7] text-base tracking-[0] leading-6">
                      1000 Requests/hour
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full bg-[#fcfcfc] rounded-[20px] border-[0.8px] border-[#e4e4e4]">
            <CardContent className="flex flex-col items-start gap-6 p-6">
              <div className="inline-flex items-start gap-2.5">
                <img
                  className="w-[46px] h-[46px]"
                  alt="Authentication"
                  src="/p-2-rounded-lg-bg-accent-10.svg"
                />
                <div className="flex flex-col items-start gap-0.5">
                  <h3 className="text-xl [font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] tracking-[0] leading-6">
                    Authentication
                  </h3>
                  <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-sm tracking-[0] leading-6">
                    Api Key Management And Authentication
                  </p>
                </div>
              </div>

              <Card className="w-full bg-[#f7f7f7] rounded-[14px] border-0">
                <CardContent className="flex flex-col items-start gap-6 p-6">
                  <div className="inline-flex items-center gap-2.5">
                    <Badge className="bg-[#3f4ef833] text-[#3f4ef8] hover:bg-[#3f4ef833] rounded-[50px] px-2.5 py-[7px] h-auto">
                      <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-xs tracking-[0] leading-[9.2px]">
                        POST
                      </span>
                    </Badge>
                    <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#003d2b] text-base tracking-[0.48px] leading-5 whitespace-nowrap">
                      /api/auth/validate
                    </span>
                  </div>

                  <p className="text-[#808080] [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[15px] tracking-[0] leading-6 whitespace-nowrap">
                    Validate API Key and get permissions
                  </p>

                  <div className="flex items-start justify-between w-full px-[23px] py-6 bg-[#121728] rounded-[10px]">
                    <div className="inline-flex flex-col items-start justify-center gap-2.5">
                      <Badge className="bg-white text-[#003d2b] hover:bg-white rounded-[50px] px-2.5 py-[7px] h-auto">
                        <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-xs tracking-[0] leading-[9.2px]">
                          cURL Example
                        </span>
                      </Badge>
                      <pre className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                        {`curl -X GET "https://api.trustvault.com/v1/auth/verify" \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json"`}
                      </pre>
                    </div>
                    <CopyIcon className="w-[22px] h-[22px] text-white cursor-pointer" />
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <Card className="w-full bg-[#fcfcfc] rounded-[20px] border-[0.8px] border-[#e4e4e4]">
            <CardContent className="flex flex-col items-start gap-[30px] p-6">
              <div className="flex flex-col items-start gap-0.5">
                <h3 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-xl tracking-[0] leading-6">
                  Error Codes
                </h3>
                <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-sm tracking-[0] leading-6">
                  Common Http Status Codes And Error Responses
                </p>
              </div>

              <div className="flex flex-col items-start gap-[38px] w-full">
                <div className="grid grid-cols-2 gap-[319px] w-full">
                  {errorCodes.slice(0, 2).map((error) => (
                    <div
                      key={error.code}
                      className="flex flex-col items-start gap-[7px]"
                    >
                      <div className="inline-flex items-center gap-3.5">
                        <Badge className="bg-[#e24843] hover:bg-[#e24843] text-white rounded-[5px] px-2.5 py-[7px] h-auto">
                          <span className="[font-family:'DM_Sans_18pt-SemiBold',Helvetica] font-semibold text-sm tracking-[0] leading-[9.2px]">
                            {error.code}
                          </span>
                        </Badge>
                        <span className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-[#003d2b] text-base tracking-[0] leading-5">
                          {error.title}
                        </span>
                      </div>
                      <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base tracking-[0] leading-6">
                        {error.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-[319px] w-full">
                  {errorCodes.slice(2, 4).map((error) => (
                    <div
                      key={error.code}
                      className="flex flex-col items-start gap-[7px]"
                    >
                      <div className="inline-flex items-center gap-3.5">
                        <Badge className="bg-[#e24843] hover:bg-[#e24843] text-white rounded-[5px] px-2.5 py-[7px] h-auto">
                          <span className="[font-family:'DM_Sans_18pt-SemiBold',Helvetica] font-semibold text-sm tracking-[0] leading-[9.2px]">
                            {error.code}
                          </span>
                        </Badge>
                        <span className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-[#003d2b] text-base tracking-[0] leading-5 whitespace-nowrap">
                          {error.title}
                        </span>
                      </div>
                      <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base tracking-[0] leading-6">
                        {error.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
};
