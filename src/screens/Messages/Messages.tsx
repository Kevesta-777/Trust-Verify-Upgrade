import { ArrowLeftIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { MessagesChat } from "../MessagesChat/MessagesChat";

const navigationItems = [
    { label: "Demo", active: true },
    { label: "Business", active: false },
    { label: "Developers", active: false },
    { label: "Pricing", active: false },
    { label: "Support", active: false },
];

const statsData = [
    {
      icon: "/mb-6-inline-flex-items-center-justify-center-w-16-h-16-bg-primar-3.svg",
      label: "Total Conversations",
      value: "03",
    },
    {
      icon: "/mb-6-inline-flex-items-center-justify-center-w-16-h-16-bg-primar-4.svg",
      label: "Secure Messages",
      value: "15",
    },
    {
      icon: "/mb-6-inline-flex-items-center-justify-center-w-16-h-16-bg-primar-2.svg",
      label: "Unread Messages",
      value: "04",
    },
  ];
  
  const chatData = [
    {
      id: 1,
      avatar:
        "/mb-6-inline-flex-items-center-justify-center-w-16-h-16-bg-primar-1.svg",
      name: "Jane Developer",
      message: "I'll have the website mockups ready by tomorrow",
      date: "15/01/25",
      unreadCount: 2,
      backgroundImage: "/group-1597880969.png",
    },
    {
      id: 2,
      avatar:
        "/mb-6-inline-flex-items-center-justify-center-w-16-h-16-bg-primar-1.svg",
      name: "Mike Startup",
      message: "Perfect!! The logo Looks great..",
      date: "15/01/25",
      unreadCount: 1,
      backgroundImage: "/group-1597880969-1.png",
    },
    {
      id: 3,
      avatar:
        "/mb-6-inline-flex-items-center-justify-center-w-16-h-16-bg-primar-1.svg",
      name: "Alex Business",
      message: "When can we start the content creation?",
      date: "15/01/25",
      unreadCount: 0,
      backgroundImage: "/group-1597880969-2.png",
    },
  ];

export const Messages = (): JSX.Element => {
    const [selectedChat, setSelectedChat] = useState<number | null>(null);

    const handleChatClick = (chatId: number) => {
        setSelectedChat(chatId);
    };

    // If a chat is selected, show MessagesChat instead
    if (selectedChat !== null) {
        return <MessagesChat onBack={() => setSelectedChat(null)} />;
    }

    return (
        <main className="bg-[#f6f6f6] w-full flex flex-col">
            <div className="flex w-full relative flex-col items-start gap-2.5 px-4 sm:px-8 md:px-[110px] py-[17px] bg-[linear-gradient(169deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)]">
                <header className="relative w-full bg-transparent">
                    <nav className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                            <img
                                className="w-32 sm:w-[140px] md:w-[184px] h-auto sm:h-[30px] md:h-[38px]"
                                alt="TrustVerify Logo"
                                src="/group.png"
                            />
                        </div>

                        <div className="hidden lg:flex items-center gap-8 xl:gap-16">
                            {navigationItems.map((item, index) => (
                                <button
                                    key={index}
                                    className={`relative flex items-center justify-center w-fit ${item.active
                                        ? "[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#d8d8d8]"
                                        : "[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#d8d8d8]"
                                        } ${item.active ? "text-base lg:text-lg" : "text-sm lg:text-[17.7px]"} tracking-[0] leading-[18px] whitespace-nowrap hover:opacity-80 transition-opacity`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        <div className="hidden lg:block w-[184px]"></div>
                    </nav>
                </header>
            </div>

            <section className="flex flex-col items-start gap-4 sm:gap-6 md:gap-[30px] w-full px-4 sm:px-8 md:px-[110px] py-4 sm:py-6">
                <header className="flex flex-col items-start gap-4 sm:gap-6 w-full">
                    <button className="inline-flex items-center gap-2.5">
                        <ArrowLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base sm:text-lg md:text-[22px] tracking-[0] leading-[normal]">
                            Back
                        </span>
                    </button>

                    <div className="flex flex-col items-start gap-2 sm:gap-2.5 w-full">
                        <h1 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-[normal]">
                            Messages
                        </h1>

                        <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base sm:text-lg md:text-xl tracking-[0] leading-6 sm:leading-7 md:leading-8">
                            Communicate securely with transaction participants
                        </p>
                    </div>
                </header>

                <div className="flex flex-col items-start gap-4 sm:gap-6 md:gap-[30px] w-full">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 md:gap-[37px] w-full">
                        {statsData.map((stat, index) => (
                            <Card
                                key={index}
                                className="w-full sm:w-[calc(50%-12px)] md:w-[397px] h-auto sm:h-[132px] bg-[#fcfcfc] rounded-[20px] border-[0.8px] border-solid border-[#e4e4e4]"
                            >
                                <CardContent className="p-4 sm:p-0 h-full flex items-center">
                                    <div className="inline-flex items-center gap-4 sm:gap-5 px-4 sm:px-[31px] w-full sm:w-auto">
                                        <img
                                            className="w-12 h-12 sm:w-16 sm:h-16 md:w-[77.14px] md:h-[77.14px] flex-shrink-0"
                                            alt={stat.label}
                                            src={stat.icon}
                                        />

                                        <div className="flex flex-col items-start gap-[5px] flex-1 sm:flex-none">
                                            <div className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-sm sm:text-base md:text-lg tracking-[0] leading-[normal]">
                                                {stat.label}
                                            </div>

                                            <div className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-2xl sm:text-3xl md:text-4xl leading-tight sm:leading-[38.6px] tracking-[0]">
                                                {stat.value}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 sm:gap-6 w-full">
                        <Card className="w-full lg:w-[538px] h-auto lg:h-[635px] bg-white rounded-[14px] overflow-hidden border-[0.8px] border-solid border-neutral-200 shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_1px_3px_#0000001a,0px_1px_2px_-1px_#0000001a]">
                            <CardContent className="p-4 sm:p-6 flex flex-col gap-4 sm:gap-6">
                                <div className="flex flex-col items-start gap-4 sm:gap-5">
                                    <div className="flex items-center justify-between w-full">
                                        <h2 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-lg sm:text-xl tracking-[0] leading-4">
                                            Chats
                                        </h2>

                                        <Badge className="bg-[#436cc833] text-[#436cc8] hover:bg-[#436cc833] h-6 px-2.5 py-[7px] rounded-[50px]">
                                            <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-xs text-center leading-[9.2px]">
                                                3
                                            </span>
                                        </Badge>
                                    </div>

                                    <div className="relative w-full">
                                        <SearchIcon className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#808080]" />
                                        <Input
                                            placeholder="SearchIcon Chat..."
                                            className="h-[44px] sm:h-[50px] pl-12 sm:pl-[52px] bg-[#fcfcfc] rounded-[10px] border border-solid border-[#e4e4e4] [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-sm sm:text-base"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    {chatData.map((chat) => (
                                        <button
                                            key={chat.id}
                                            onClick={() => handleChatClick(chat.id)}
                                            className="relative flex flex-col h-auto sm:h-[111px] min-h-[100px] sm:min-h-[111px] items-start gap-2.5 p-4 sm:p-6 w-full hover:opacity-90 transition-opacity"
                                        >
                                            <img
                                                className="absolute top-0 left-0 w-full h-full object-cover"
                                                alt="Chat background"
                                                src={chat.backgroundImage}
                                            />

                                            <div className="flex w-full items-center justify-between relative z-10">
                                                <img
                                                    className="w-12 h-12 sm:w-[62px] sm:h-[62px] flex-shrink-0"
                                                    alt={chat.name}
                                                    src={chat.avatar}
                                                />

                                                <div className="flex flex-col flex-1 items-end ml-3 sm:ml-5 min-w-0">
                                                    <div className="w-full [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-xs text-right tracking-[0] leading-[normal] truncate">
                                                        {chat.date}
                                                    </div>

                                                    <div className="flex flex-col items-start gap-1.5 w-full -mt-2.5 min-w-0">
                                                        <div className="w-full [font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-sm sm:text-base tracking-[0] leading-[normal] truncate">
                                                            {chat.name}
                                                        </div>

                                                        <div className="flex items-center justify-between w-full gap-2 min-w-0">
                                                            <div className="flex-1 min-w-0 [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-xs sm:text-sm tracking-[0] leading-4 sm:leading-5 text-left truncate overflow-hidden">
                                                                {chat.message}
                                                            </div>

                                                            {chat.unreadCount > 0 && (
                                                                <Badge className="bg-[#27ae6033] text-[#27ae60] hover:bg-[#27ae6033] h-6 min-w-6 px-2.5 py-[7px] rounded-[50px] ml-2 flex-shrink-0">
                                                                    <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-xs text-center leading-[9.2px]">
                                                                        {chat.unreadCount}
                                                                    </span>
                                                                </Badge>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    );
};
