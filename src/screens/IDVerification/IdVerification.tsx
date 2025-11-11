import { useState } from "react";
import { HeaderDemo } from "../../components/HeaderDemo";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Label } from "../../components/ui/label";
import { CalendarIcon, AlertTriangleIcon, UploadIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const steps = [
  {
    number: "01",
    title: "Personal Information",
    description: "Provide your basic details",
    isActive: true,
    isCompleted: true,
  },
  {
    number: "02",
    title: "Document Upload",
    description: "Upload your ID documents",
    isActive: false,
    isCompleted: false,
  },
  {
    number: "03",
    title: "Identity Verification",
    description: "Take a verification selfie",
    isActive: false,
    isCompleted: false,
  },
  {
    number: "04",
    title: "Review & Submit",
    description: "Confirm your information",
    isActive: false,
    isCompleted: false,
  },
];

const formFields = {
  row1: [
    { label: "First Name", placeholder: "Enter your first name", type: "text", hasIcon:false, },
    { label: "Last Name", placeholder: "Enter your last name", type: "text", hasIcon:false, },
    {
      label: "Date Of Birth",
      placeholder: "mm/dd/yyyy",
      type: "date",
      hasIcon: true,
    },
  ],
  row2: [
    { label: "Document Type", placeholder: "Select type", type: "select", hasIcon:false, },
    {
      label: "Document Number",
      placeholder: "Enter Document No.",
      type: "text",
      hasIcon:false,
    },
    { label: "Enter Address", placeholder: "Enter full address", type: "text", hasIcon:false, },
  ],
  row3: [
    { label: "City", placeholder: "Enter City", type: "text", hasIcon:false, },
    { label: "Country", placeholder: "Select Country", type: "select", hasIcon:false, },
    { label: "Postal Code", placeholder: "Enter Postal Code", type: "text", hasIcon:false, },
  ],
};

export const IdVerification = (): JSX.Element => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const handleStepClick = (index: number) => {
    setActiveStepIndex(index);
  };

  const updatedSteps = steps.map((step, index) => ({
    ...step,
    isActive: index === activeStepIndex,
  }));

  return (
    <main className="bg-white overflow-hidden w-full relative">
      <HeaderDemo />

      <section className="w-full max-w-[1703px] flex flex-col items-center gap-8 md:gap-[30px] mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-20">
        {/* Header + Status */}
        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4">
            <div className="flex flex-col items-start gap-2.5 max-w-full md:max-w-[518px]">
              <h1 className="font-semibold text-[#003d2b] text-3xl sm:text-4xl md:text-5xl leading-tight">
                Identity Verification
              </h1>
              <p className="font-normal text-[#808080] text-base sm:text-lg md:text-xl leading-relaxed">
                Secure your account with advanced identity verification
              </p>
            </div>

            <div className="inline-flex items-center gap-3 sm:gap-[15px] flex-shrink-0">
              <span className="font-medium text-[#003d2b] text-base sm:text-lg md:text-xl whitespace-nowrap">
                Current Status:
              </span>
              <Badge className="inline-flex items-center justify-center gap-[5px] px-4 py-2 sm:px-[13px] sm:py-3 h-auto bg-[#27ae6033] rounded-full hover:bg-[#27ae6033]">
                <span className="font-medium text-[#27ae60] text-sm sm:text-[15px] text-center leading-tight whitespace-nowrap">
                  Fully Verified
                </span>
              </Badge>
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col md:flex-row items-start w-full rounded-md border border-solid border-[#cdcdcd] divide-y md:divide-y-0 md:divide-x">
            {updatedSteps.map((step, index) => (
              <div
                key={index}
                onClick={() => handleStepClick(index)}
                className="flex-1 flex flex-col items-start px-4 sm:px-6 py-4 gap-2.5 relative w-full cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="inline-flex items-center gap-4">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      step.isActive
                        ? "border-[none] relative before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-full before:bg-[linear-gradient(118deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1]"
                        : "border-2 border-solid border-[#cdcdcd]"
                    }`}
                  >
                    <span
                      className={`font-${
                        step.isActive ? "bold" : "medium"
                      } text-base ${
                        step.isActive
                          ? "bg-[linear-gradient(128deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] bg-clip-text text-transparent"
                          : "text-[#cdcdcd]"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  <div className="inline-flex flex-col items-start">
                    <span
                      className={`font-semibold text-sm sm:text-base leading-5 ${
                        step.isActive ? "text-[#003d2b]" : "text-[#cdcdcd]"
                      }`}
                    >
                      {step.title}
                    </span>
                    <span
                      className={`font-normal text-xs sm:text-sm leading-5 ${
                        step.isActive ? "text-[#808080]" : "text-[#cdcdcd]"
                      }`}
                    >
                      {step.description}
                    </span>
                  </div>
                </div>

                {step.isActive && (
                  <div className="hidden md:block absolute left-0 bottom-0 w-full h-[5px] rounded-[3px] bg-[linear-gradient(128deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Card Section */}
        {activeStepIndex === 0 && (
          <Card className="w-full bg-[#fcfcfc] rounded-[20px] border border-solid border-[#e4e4e4]">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col items-start gap-8 md:gap-[30px]">
                {/* Heading */}
                <div className="flex flex-col items-start gap-[5px] max-w-full md:max-w-[1033px]">
                  <h2 className="font-semibold text-[#003d2b] text-lg sm:text-xl leading-6">
                    Personal Information
                  </h2>
                  <p className="font-normal text-[#808080] text-sm sm:text-base leading-6">
                    Please provide accurate information as it appears on your ID
                    document
                  </p>
                </div>

                {/* Form */}
                <div className="flex flex-col items-start gap-6 w-full">
                  {[formFields.row1, formFields.row2, formFields.row3].map(
                    (row, i) => (
                      <div
                        key={i}
                        className="flex flex-col sm:flex-row gap-5 sm:gap-[18px] w-full"
                      >
                        {row.map((field, index) => (
                          <div
                            key={index}
                            className="flex flex-col flex-1 items-start gap-2.5 w-full"
                          >
                            <Label className="font-medium text-[#003d2b] text-sm sm:text-base leading-6">
                              {field.label}
                            </Label>

                            {field.type === "select" ? (
                              <Select>
                                <SelectTrigger className="h-[50px] w-full px-4 py-3 bg-[#fcfcfc] rounded-[10px] border border-solid border-[#e4e4e4] font-normal text-[#808080] text-sm sm:text-base">
                                  <SelectValue
                                    placeholder={field.placeholder}
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="option1">
                                    Option 1
                                  </SelectItem>
                                  <SelectItem value="option2">
                                    Option 2
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            ) : (
                              <div className="relative w-full">
                                <Input
                                  placeholder={field.placeholder}
                                  className="h-[50px] w-full px-4 py-3 bg-[#fcfcfc] rounded-[10px] border border-solid border-[#e4e4e4] font-normal text-[#808080] text-sm sm:text-base"
                                />
                                {field.hasIcon && (
                                  <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#808080]" />
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )
                  )}
                </div>

                {/* Continue Button */}
                <div className="flex justify-end w-full">
                  <Button className="h-[48px] sm:h-[50px] px-6 rounded-lg bg-[linear-gradient(128deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] hover:opacity-90 w-full sm:w-auto">
                    <span className="font-semibold text-white text-sm sm:text-base text-center tracking-[-0.2px] leading-[18px]">
                      Continue
                    </span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeStepIndex === 1 && (
        <Card className="w-full bg-[#fcfcfc] rounded-[20px] border-[0.8px] border-solid border-[#e4e4e4]">
        <CardContent className="flex flex-col items-end gap-[30px] p-6">
          <div className="flex flex-col items-start gap-[30px] w-full">
            <div className="flex flex-col items-start gap-[30px] max-w-[1134px]">
              <div className="flex flex-col items-start gap-[5px] max-w-[1033px]">
                <h2 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-xl tracking-[0] leading-6">
                  Document Upload
                </h2>
                <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base tracking-[0] leading-6 whitespace-nowrap">
                  Upload clear photos of your identification document
                </p>
              </div>

              <div className="flex items-center gap-[50px] w-full">
                  <div className="flex flex-col w-[542px] items-start gap-4" >
                    <h3 className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#003d2b] text-base tracking-[0] leading-6">
                      Front of Document
                    </h3>

                    <div className="w-full h-[246px] rounded-[20px] overflow-hidden border-2 border-dashed border-[#e4e4e4] flex items-center justify-center">
                      <div className="flex flex-col w-[212px] items-center gap-6">
                        <div className="flex flex-col items-center gap-4 w-full">
                          <div className="w-[68px] h-[68px] flex items-center justify-center bg-[#0B3A7826] rounded-[10px] border border-solid border-[#e4e4e4]">
                            <UploadIcon className="w-6 h-6 text-[#808080]" />
                          </div>

                          <div className="flex flex-col items-center gap-0.5 w-full">
                            <h4 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-base text-center tracking-[0] leading-6">
                              Upload Image
                            </h4>
                            <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-sm text-center tracking-[0] leading-5">
                              Drag and drop or click to browse
                            </p>
                          </div>
                        </div>

                        <Button className="w-40 h-11 bg-app-primary rounded-lg overflow-hidden hover:bg-app-primary/90">
                          <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#ffffff] text-sm text-center tracking-[-0.20px] leading-[18px] whitespace-nowrap">
                            Upload Image
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[542px] items-start gap-4" >
                    <h3 className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#003d2b] text-base tracking-[0] leading-6">
                      Back of Document
                    </h3>

                    <div className="w-full h-[246px] rounded-[20px] overflow-hidden border-2 border-dashed border-[#e4e4e4] flex items-center justify-center">
                      <div className="flex flex-col w-[212px] items-center gap-6">
                        <div className="flex flex-col items-center gap-4 w-full">
                          <div className="w-[68px] h-[68px] flex items-center justify-center bg-[#0B3A7826] rounded-[10px] border border-solid border-[#e4e4e4]">
                            <UploadIcon className="w-6 h-6 text-[#808080]" />
                          </div>

                          <div className="flex flex-col items-center gap-0.5 w-full">
                            <h4 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-base text-center tracking-[0] leading-6">
                              Upload Image
                            </h4>
                            <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-sm text-center tracking-[0] leading-5">
                              Drag and drop or click to browse
                            </p>
                          </div>
                        </div>

                        <Button className="w-40 h-11 bg-app-primary rounded-lg overflow-hidden hover:bg-app-primary/90">
                          <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#ffffff] text-sm text-center tracking-[-0.20px] leading-[18px] whitespace-nowrap">
                            Upload Image
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="w-full bg-[#d320301a] rounded-xl border-0 px-6 py-4">
              <div className="flex items-center gap-[5px]">
                <AlertTriangleIcon className="w-4 h-5 flex-shrink-0 text-[#d32030]" />
                <p className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#d32030] text-sm tracking-[-0.20px] leading-7">
                  Ensure your documents are clearly visible, well-lit, and all
                  corners are in frame. Blurry or cropped images may delay
                  verification.
                </p>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-5">
            <Button
              variant="secondary"
              className="bg-[#e4e4e4] w-[190px] h-[50px] rounded-lg overflow-hidden hover:bg-[#e4e4e4]/90 py-4"
            >
              <span className="[font-family:'DM_Sans_18pt-SemiBold',Helvetica] font-semibold text-[#909090] text-sm text-center tracking-[-0.20px] leading-[18px] whitespace-nowrap">
                Back
              </span>
            </Button>

            <Button className="bg-[linear-gradient(128deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] w-[190px] h-[50px] rounded-lg overflow-hidden hover:opacity-90 py-4">
              <span className="[font-family:'DM_Sans_18pt-SemiBold',Helvetica] font-semibold text-[#ffffff] text-sm text-center tracking-[-0.20px] leading-[18px] whitespace-nowrap">
                Continue
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>

        )}

        {activeStepIndex === 2 && (
          <Card className="w-full bg-[#fcfcfc] rounded-[20px] border border-solid border-[#e4e4e4]">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col items-start gap-8 md:gap-[30px]">
                <div className="flex flex-col items-start gap-[5px] max-w-full md:max-w-[1033px]">
                  <h2 className="font-semibold text-[#003d2b] text-lg sm:text-xl leading-6">
                    Identity Verification
                  </h2>
                  <p className="font-normal text-[#808080] text-sm sm:text-base leading-6">
                    Take a verification selfie to complete your identity verification
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-[#808080]">Identity verification form will be implemented here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeStepIndex === 3 && (
          <Card className="w-full bg-[#fcfcfc] rounded-[20px] border border-solid border-[#e4e4e4]">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col items-start gap-8 md:gap-[30px]">
                <div className="flex flex-col items-start gap-[5px] max-w-full md:max-w-[1033px]">
                  <h2 className="font-semibold text-[#003d2b] text-lg sm:text-xl leading-6">
                    Review & Submit
                  </h2>
                  <p className="font-normal text-[#808080] text-sm sm:text-base leading-6">
                    Review your information and submit for verification
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-[#808080]">Review form will be implemented here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </section>
    </main>
  );
};
