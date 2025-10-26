import { ChevronDownIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export interface HeaderContentProps {
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
    className?: string;
  };
  title?: string;
  description?: string;
  tags?: string[];
  buttons?: {
    primary?: {
      text: string;
      onClick?: () => void;
      className?: string;
    };
    secondary?: {
      text: string;
      onClick?: () => void;
      className?: string;
    };
  };
  width?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "full" | "auto";
  maxWidth?: string; // Custom max-width value
}

export interface HeaderProps {
  backgroundImage?: string;
  content?: HeaderContentProps;
}

const navigationItems = [
  { label: "Platform", hasDropdown: false, path: "/about" },
  { label: "Solutions", hasDropdown: true, path: null },
  { label: "Enterprises", hasDropdown: true, path: null },
  { label: "Developers", hasDropdown: false, path: null },
  { label: "Pricing", hasDropdown: false, path: null },
];

// Helper function to get width class and style
const getWidthClass = (width?: string, maxWidth?: string) => {
  const widthMap = {
    sm: "max-w-sm",
    md: "max-w-md", 
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    full: "max-w-full",
    auto: "max-w-none"
  };
  
  return {
    className: widthMap[width as keyof typeof widthMap] || "max-w-[1009px]",
    style: maxWidth ? { maxWidth } : undefined
  };
};

export const Header = ({ backgroundImage, content }: HeaderProps): JSX.Element => {
  const location = useLocation();
  
  const headerStyle = backgroundImage 
    ? {
        backgroundImage: `url(${backgroundImage}), linear-gradient(37deg, rgba(39,174,96,1) 0%, rgba(0,82,204,1) 100%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {
      background: `linear-gradient(37deg, rgba(39,174,96,1) 0%, rgba(0,82,204,1) 100%)`
      };
  
  return (
    <div 
      className="flex flex-col w-full items-start gap-2.5 border-b-2 [border-bottom-style:solid] border-[#ffffff1a]"
      style={headerStyle}
    >
      <header className="w-full relative h-20 bg-transparent px-28 my-4 flex justify-between items-center">
        <Link to="/">
          <img
            className="w-[184px] h-[38px] cursor-pointer"
            alt="Group"
            src="/logo.png"
          />
        </Link>

        <nav className="flex items-center justify-between gap-10 absolute top-[29px] left-1/2 -translate-x-1/2">
          {navigationItems.map((item, index) => (
            <div key={index} className="relative">
              {item.hasDropdown ? (
                <button className="inline-flex items-end justify-center gap-[5px] relative flex-[0_0_auto] bg-transparent border-none cursor-pointer">
                  <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#d8d8d8] text-[17.7px] tracking-[0] leading-[18px] whitespace-nowrap">
                    {item.label}
                  </span>
                  <ChevronDownIcon className="w-[12.59px] h-3.5 text-[#d8d8d8]" />
                </button>
              ) : item.path ? (
                <Link
                  to={item.path}
                  className={`relative flex items-center justify-center w-fit [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[17.7px] tracking-[0] leading-[18px] whitespace-nowrap bg-transparent border-none cursor-pointer ${
                    location.pathname === item.path ? 'text-white' : 'text-[#d8d8d8]'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button className="relative flex items-center justify-center w-fit [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#d8d8d8] text-[17.7px] tracking-[0] leading-[18px] whitespace-nowrap bg-transparent border-none cursor-pointer">
                  {item.label}
                </button>
              )}
              {location.pathname === item.path && (
                <div className="absolute top-[30px] left-[-5px] w-[85px] h-1 bg-white rounded-[30px]" />
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 ">
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
      
      {/* Content Section */}
      {content && (
        <div 
          className={`flex flex-col items-center py-20 ${getWidthClass(content.width, content.maxWidth).className} mx-auto gap-4`}
          style={getWidthClass(content.width, content.maxWidth).style}
        >
          {/* Badge */}
          {content.badge && (
            <Badge 
              variant={content.badge.variant || "secondary"}
              className={`bg-white/60 h-[30px] mb-5 rounded-[800px] px-[10px] text-center ${content.badge.className || ''}`}
            >
              <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-sm text-[#003D2B]">
                {content.badge.text}
              </span>
            </Badge>
          )}

          {/* Title */}
          {content.title && (
            <h1 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-white text-[70px] leading-[67px] tracking-[-0.27px] text-center w-full">
              {content.title}
            </h1>
          )}

          {/* Description */}
          {content.description && (
            <p className="w-full text-center [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-8 px-2">
              {content.description}
            </p>
          )}

          {/* Tags */}
          {content.tags && content.tags.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-4">
              {content.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-white/20 text-black bg-white/50 hover:bg-white/60 h-8 rounded-[800px] px-4"
                >
                  <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-sm">
                    {tag}
                  </span>
                </Badge>
              ))}
            </div>
          )}

          {/* Buttons */}
          {content.buttons && (
            <div className="flex items-center gap-5 mt-3">
              {content.buttons.primary && (
                <Button 
                  className={`w-[223px] h-14 bg-app-secondary hover:bg-app-secondary/90 rounded-[10px] [font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-white text-lg tracking-[-0.20px] leading-[18px] ${content.buttons.primary.className || ''}`}
                  onClick={content.buttons.primary.onClick}
                >
                  {content.buttons.primary.text}
                </Button>
              )}

              {content.buttons.secondary && (
                <Button
                  variant="outline"
                  className={`w-[198px] h-14 border-white text-white bg-transparent hover:bg-white/10 rounded-[10px] [font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-lg tracking-[-0.20px] leading-[18px] ${content.buttons.secondary.className || ''}`}
                  onClick={content.buttons.secondary.onClick}
                >
                  {content.buttons.secondary.text}
                </Button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
