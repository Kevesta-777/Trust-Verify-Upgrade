import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import { Textarea } from "../../components/ui/textarea";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../../components/ui/navigation-menu";

const navigationItems = [
    { label: "Demo", active: true },
    { label: "Business", active: false },
    { label: "Developers", active: false },
    { label: "Pricing", active: false },
    { label: "Support", active: false },
];

const costBreakdownItems = [
    { label: "Subtotal", value: "$0.00" },
    { label: "TrustVerify Fee(2.5%)", value: "$0.00" },
    { label: "Payment Processing", value: "$0.30" },
];

const securityFeatures = [
    { icon: "/fi-11010292.svg", text: "Secure Escrow Protection" },
    { icon: "/fi-2512902.svg", text: "End-to-end Encryption" },
    { icon: "/fi-1150587.svg", text: "Real-time Fraud Monitoring" },
];

export const CreateNewTransaction = (): JSX.Element => {
    return (
        <div className="bg-[#f6f6f6] overflow-hidden w-full flex flex-col">
            <div className="flex w-full relative flex-col items-start gap-2.5 px-4 sm:px-8 md:px-[110px] py-[17px] bg-[linear-gradient(169deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)]">
                <header className="relative w-full h-20 bg-transparent">
                    <img
                        className="absolute top-[calc(50.00%_-_19px)] left-0 w-[140px] h-[30px] md:w-[184px] md:h-[38px]"
                        alt="Group"
                        src="/group.png"
                    />

                    <NavigationMenu className="hidden md:block absolute top-[29px] left-[calc(50.00%_-_297px)]">
                        <NavigationMenuList className="flex items-center gap-16">
                            {navigationItems.map((item, index) => (
                                <NavigationMenuItem key={index}>
                                    <NavigationMenuLink
                                        className={`relative flex items-center justify-center w-fit mt-[-1.00px] ${item.active
                                                ? "[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#d8d8d8] text-lg"
                                                : "[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#d8d8d8] text-[17.7px]"
                                            } tracking-[0] leading-[18px] whitespace-nowrap cursor-pointer hover:text-white transition-colors`}
                                    >
                                        {item.label}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </header>
            </div>
            <section className="flex flex-col items-start gap-6 w-full max-w-[1703px] mx-auto px-4 py-6 mt-6 md:mt-[72px]">
                <header className="flex flex-col items-start gap-6 w-full">
                    <button className="inline-flex items-center gap-2.5">
                        <img
                            className="w-5 h-5 md:w-6 md:h-6"
                            alt="Back arrow"
                            src="/flat-color-icons-next.svg"
                        />
                        <span className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base md:text-[22px] tracking-[0] leading-[normal]">
                            Return to Dashboard
                        </span>
                    </button>

                    <div className="flex flex-col items-start gap-2.5 w-full">
                        <h1 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-3xl md:text-5xl tracking-[0] leading-[normal]">
                            Create New Transaction
                        </h1>
                        <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base md:text-xl tracking-[0] leading-8">
                            Set up a secure escrow transaction with built-in fraud protection
                        </p>
                    </div>
                </header>

                <div className="flex flex-col items-start gap-[30px] w-full">
                    <nav className="flex items-start rounded-md border border-solid border-[#cdcdcd] overflow-hidden">
                        <div className="flex-1 px-6 py-4 flex flex-col gap-2.5 relative">
                            <div className="inline-flex items-center gap-4">
                                <div className="w-10 h-10 flex items-center justify-center rounded-[20px] border-[none] relative before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[20px] before:[background:linear-gradient(118deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                                    <span className="bg-[linear-gradient(128deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-base text-center tracking-[0] leading-[normal]">
                                        01
                                    </span>
                                </div>
                                <div className="inline-flex flex-col items-start">
                                    <span className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-[#003d2b] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                                        Transactions Detail
                                    </span>
                                    <span className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                                        Basic Inforamtion
                                    </span>
                                </div>
                            </div>
                            <div className="absolute left-px bottom-0.5 w-full md:w-[266px] h-[5px] rounded-[3px] bg-[linear-gradient(128deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)]" />
                        </div>

                        <div className="flex-1 px-6 py-4 flex flex-col gap-2.5">
                            <div className="inline-flex items-center gap-4">
                                <div className="flex w-10 h-10 items-center justify-center rounded-[20px] border-2 border-solid border-[#cdcdcd]">
                                    <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#cdcdcd] text-base text-center tracking-[0] leading-[normal]">
                                        02
                                    </span>
                                </div>
                                <div className="inline-flex flex-col items-start">
                                    <span className="[font-family:'Roboto',Helvetica] font-medium text-[#cdcdcd] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                                        Terms &amp; Review
                                    </span>
                                    <span className="[font-family:'Roboto',Helvetica] font-normal text-[#cdcdcd] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                                        Final Confirmation
                                    </span>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="flex flex-col lg:flex-row items-start gap-4 md:gap-6 w-full">
                        <Card className="flex-1 bg-[#fcfcfc] rounded-[20px] border-[0.8px] border-solid border-[#e4e4e4]">
                            <CardContent className="p-4 md:p-6 flex flex-col gap-6">
                                <div className="flex items-center gap-2.5">
                                    <img
                                        className="w-10 h-10 md:w-[46px] md:h-[46px]"
                                        alt="Transaction icon"
                                        src="/p-2-rounded-lg-bg-accent-18-3.svg"
                                    />
                                    <div className="flex flex-col gap-[5px]">
                                        <h2 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-xl text-[#003d2b] tracking-[0] leading-6">
                                            Transaction Information
                                        </h2>
                                        <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base tracking-[0] leading-6">
                                            Provide details about what you&#39;re selling or the service
                                            you&#39;re offering
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2.5">
                                    <label className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-base text-[#003d2b] tracking-[0] leading-6">
                                        Transaction Title
                                    </label>
                                    <Input
                                        placeholder="Enter title"
                                        className="h-[50px] px-5 py-[15px] bg-[#fcfcfc] rounded-[10px] border border-solid border-[#e4e4e4] [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base"
                                    />
                                </div>

                                <div className="flex flex-col gap-2.5">
                                    <label className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-base text-[#003d2b] tracking-[0] leading-6">
                                        Description
                                    </label>
                                    <Textarea
                                        placeholder="Provide detailed description of your Transaction....."
                                        className="h-[120px] px-5 py-[15px] bg-[#fcfcfc] rounded-[10px] border border-solid border-[#e4e4e4] [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base resize-none"
                                    />
                                </div>

                                <div className="flex flex-col md:flex-row items-start gap-[17px]">
                                    <div className="flex flex-col gap-2.5 flex-1">
                                        <label className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-base text-[#003d2b] tracking-[0] leading-6">
                                            <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#003d2b] text-base tracking-[0] leading-6">
                                                Amount USD
                                            </span>
                                            <span className="text-[13px]"> (Optional)</span>
                                        </label>
                                        <Input
                                            defaultValue="$0.00"
                                            className="h-[50px] px-5 py-[15px] bg-[#fcfcfc] rounded-[10px] border border-solid border-[#e4e4e4] [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2.5 flex-1">
                                        <label className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-base text-[#003d2b] tracking-[0] leading-6">
                                            Category
                                        </label>
                                        <Select>
                                            <SelectTrigger className="h-[50px] px-5 py-[15px] bg-[#fcfcfc] rounded-[10px] border border-solid border-[#e4e4e4] [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base">
                                                <SelectValue placeholder="Select Category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="category1">Category 1</SelectItem>
                                                <SelectItem value="category2">Category 2</SelectItem>
                                                <SelectItem value="category3">Category 3</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2.5">
                                    <label className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-base text-[#003d2b] tracking-[0] leading-6">
                                        Buyer Email
                                    </label>
                                    <Input
                                        placeholder="Enter buyer email"
                                        type="email"
                                        className="h-[50px] px-5 py-[15px] bg-[#fcfcfc] rounded-[10px] border border-solid border-[#e4e4e4] [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base"
                                    />
                                </div>

                                <div className="flex flex-col gap-2.5">
                                    <label className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-base text-[#003d2b] tracking-[0] leading-6">
                                        Delivery Timeframe
                                    </label>
                                    <Select>
                                        <SelectTrigger className="h-[50px] px-5 py-[15px] bg-[#fcfcfc] rounded-[10px] border border-solid border-[#e4e4e4] [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base">
                                            <SelectValue placeholder="Select Timeframe" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1-3days">1-3 days</SelectItem>
                                            <SelectItem value="3-7days">3-7 days</SelectItem>
                                            <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <Button className="h-[50px] w-full sm:w-auto bg-[linear-gradient(128deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] rounded-lg [font-family:'DM_Sans_18pt-SemiBold',Helvetica] font-semibold text-white text-sm text-center tracking-[-0.20px] leading-[18px]">
                                    Continue To Review
                                </Button>
                            </CardContent>
                        </Card>

                        <div className="flex flex-col w-full lg:w-[542px] gap-6">
                            <Card className="bg-[#fcfcfc] rounded-[20px] border-[0.8px] border-solid border-[#e4e4e4]">
                                <CardContent className="p-4 md:p-6 flex flex-col gap-[30px]">
                                    <div className="flex items-center gap-2.5">
                                        <img
                                            className="w-10 h-10 md:w-[46px] md:h-[46px]"
                                            alt="Cost icon"
                                            src="/p-2-rounded-lg-bg-accent-18-1.svg"
                                        />
                                        <h2 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-xl tracking-[0] leading-6 whitespace-nowrap">
                                            Cost Breakdown
                                        </h2>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col gap-6">
                                            <div className="flex flex-col gap-[11px]">
                                                {costBreakdownItems.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex h-7 items-center justify-between"
                                                    >
                                                        <span className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base tracking-[0] leading-5 whitespace-nowrap">
                                                            {item.label}
                                                        </span>
                                                        <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#003d2b] text-base text-right tracking-[0] leading-7 whitespace-nowrap">
                                                            {item.value}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            <Separator className="bg-[#e4e4e4]" />
                                        </div>

                                        <div className="flex h-7 items-center justify-between">
                                            <span className="[font-family:'DM_Sans_18pt-SemiBold',Helvetica] font-semibold text-[#003d2b] text-xl md:text-[22px] tracking-[0] leading-5 whitespace-nowrap">
                                                Total
                                            </span>
                                            <span className="[font-family:'DM_Sans_18pt-SemiBold',Helvetica] font-semibold text-app-secondary text-lg md:text-xl text-right leading-7 whitespace-nowrap tracking-[0]">
                                                $0.30
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-[#fcfcfc] rounded-[20px] border-[0.8px] border-solid border-[#e4e4e4]">
                                <CardContent className="p-4 md:p-6 flex flex-col gap-[38px]">
                                    <div className="inline-flex items-center gap-2.5">
                                        <img
                                            className="w-10 h-10 md:w-[46px] md:h-[46px]"
                                            alt="Security icon"
                                            src="/p-2-rounded-lg-bg-accent-18.svg"
                                        />
                                        <h2 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-xl tracking-[0] leading-6 whitespace-nowrap">
                                            Security Features
                                        </h2>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        {securityFeatures.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-2.5">
                                                <img
                                                    className="w-5 h-5 md:w-6 md:h-6"
                                                    alt="Security feature icon"
                                                    src={feature.icon}
                                                />
                                                <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#808080] text-base tracking-[0] leading-6 whitespace-nowrap">
                                                    {feature.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-[#fcfcfc] rounded-[20px] border-[0.8px] border-solid border-[#e4e4e4]">
                                <CardContent className="p-4 md:p-6 flex flex-col items-center gap-6">
                                    <div className="flex flex-col items-center gap-4">
                                        <img
                                            className="w-[56px] h-[56px] md:w-[68px] md:h-[68px]"
                                            alt="Help icon"
                                            src="/p-2-rounded-lg-bg-accent-18-2.svg"
                                        />
                                        <div className="flex flex-col items-center gap-2.5">
                                            <h2 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-xl text-center tracking-[0] leading-6">
                                                Need Help?
                                            </h2>
                                            <p className="text-center [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base tracking-[0] leading-6">
                                                Our support team is available 24/7 to help you create
                                                secure transactions.
                                            </p>
                                        </div>
                                    </div>

                                    <Button className="h-[46px] w-full md:w-[174px] bg-app-secondary rounded-lg [font-family:'DM_Sans_18pt-SemiBold',Helvetica] font-semibold text-white text-sm text-center tracking-[-0.20px] leading-[18px]">
                                        Contact Support
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
