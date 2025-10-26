import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const slides = [
  {
    badge: {
      icon: "/background-17.svg",
      text: "PROTECTING EVERY TRANSACTION, EVERYWHERE",
    },
    title: "/heading-1---insurance-plans-for-life-s-journey.svg",
    backgroundImage: "/Hero1.png", // Add background image
    description:
      "Our advanced security network spans across 195+ countries, monitoring billions of transactions in real-time to ensure your financial operations remain secure no matter where business takes you.",
    features: [
      {
        icon: "/fi-18890334.svg",
        text: "Evidence-Driven",
      },
      {
        icon: "/fi-2311992.svg",
        text: "Privacy-First",
      },
      {
        icon: "/fi-4086231.svg",
        text: "Community-Backed",
      },
    ],
  },
  {
    badge: {
      icon: "/background-1.svg",
      text: "INTELLIGENCE THAT NEVER SLEEP",
    },
    title: "/heading-1---insurance-plans-for-life-s-journey-1.svg",
    backgroundImage: "/Hero2.png", // Add background image
    description:
      "Machine learning algorithms analyze transaction patterns, behavioral biometrics, and risk indicators to identify and prevent fraud before it happens, with 99.7% accuracy.",
    features: [
      {
        icon: "/fi-18890334.svg",
        text: "Evidence-Driven",
      },
      {
        icon: "/fi-2311992.svg",
        text: "Privacy-First",
      },
      {
        icon: "/fi-4086231.svg",
        text: "Community-Backed",
      },
    ],
  },
  {
    badge: {
      icon: "/background-4.svg",
      text: "YOUR TRUST, OUR FOUNDATION",
    },
    title: "/heading-1---insurance-plans-for-life-s-journey-2.svg",
    backgroundImage: "/Hero3.png", // Add background image
    description:
      "Bank-grade encryption, multi-layered authentication, and continuous monitoring create an impenetrable shield around your financial data and transactions.",
    features: [
      {
        icon: "/fi-18890334.svg",
        text: "Evidence-Driven",
      },
      {
        icon: "/fi-2311992.svg",
        text: "Privacy-First",
      },
      {
        icon: "/fi-4086231.svg",
        text: "Community-Backed",
      },
    ],
  },
];

export const HeroSliderSubsection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const handleSlideChange = (index: number) => {
    if (index === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="relative w-full h-[867px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full flex flex-col gap-5 bg-cover bg-center px-[110px] pt-[204px] relative"
            style={{ 
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transition: isTransitioning ? 'background-size 0.5s ease-in-out' : 'none',
            }}
          >
            <div className="flex w-[471px] h-[50px] items-center gap-5">
              <img
                className="w-[50px] h-[50px]"
                alt="Background"
                src={slide.badge.icon}
              />
              <div className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-white text-base tracking-[0.32px] leading-6 whitespace-nowrap">
                {slide.badge.text}
              </div>
            </div>
            <div>
              <img
               alt="heading"
               src={slide.title}
              />
            </div>
            <div className="flex w-[685px] flex-col items-start gap-[50px]">
              <div className="flex flex-col items-start gap-[30px] w-full">
                <div className="flex flex-col items-start gap-4 w-full">
                  <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-neutral-300 text-xl tracking-[0] leading-8">
                    {slide.description}
                  </p>
                </div>

                <div className="flex items-center gap-16 w-full">
                  {slide.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="inline-flex items-center gap-2.5"
                    >
                      <img
                        className="w-6 h-6"
                        alt="Feature icon"
                        src={feature.icon}
                      />
                      <div className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-white text-lg leading-[22px] tracking-[0] whitespace-nowrap">
                        {feature.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="inline-flex items-center gap-5">
                <Button className="w-[223px] h-14 bg-app-secondary hover:bg-app-secondary/90 rounded-[10px] [font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-white text-lg tracking-[-0.20px] leading-[18px]">
                  Get Started Free
                  <ArrowUpRight className="w-[30px] h-[30px] ml-2" />
                </Button>

                <Button
                  variant="outline"
                  className="w-[198px] h-14 border-app-secondary text-app-secondary bg-transparent hover:bg-app-secondary/10 rounded-[10px] [font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-lg tracking-[-0.20px] leading-[18px]"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[168px] left-[110px] inline-flex items-center gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-1.5 rounded-[50px] transition-all ${
              index === currentSlide
                ? "w-10 bg-app-secondary"
                : "w-5 bg-[#7d7d7d] hover:bg-[#9d9d9d]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
