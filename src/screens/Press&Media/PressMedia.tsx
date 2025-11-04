import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { CalendarIcon, TrendingUp } from "lucide-react";
import { Input } from "../../components/ui/input";
import { CheckCircle2Icon } from "lucide-react";

const statsData = [
  {
    icon: "/accuracy.png",
    title: "2025",
    subtitle: "Platform Launch Year",
  },
  {
    icon: "/processing.png",
    title: "Newcastle",
    subtitle: "UK Headquarters",
  },
  {
    icon: "/reach.png",
    title: "Global",
    subtitle: "Coverage Ready",
  },
  {
    icon: "/coverage.png",
    title: "24/7",
    subtitle: "Fraud Protection",
  },
];

const pressReleases = [
  {
    date: "August 16, 2024",
    title:
      "Trustverify Announces Platform Launch With Next-generation Fraud Prevent...",
      image: "/post-1.png",
      readMoreIcon: "/image-2.svg",
  },
  {
    date: "August 10, 2024",
    title:
      "Trustverify Completes Beta Testing Program With Early Enterprise Partners",
      image: "/post-2.png",
      readMoreIcon: "/image-3.svg",
  },
  {
    date: "July 28, 2024",
    title: "Trustverify Establishes Uk Headquarters In Newcastle Upon Tyne",
    image: "/post-3.png",
    readMoreIcon: "/image.svg",
  },
  {
    date: "July 15, 2024",
    title:
      "Trustverify Announces Global Coverage Ready For International Fraud Prevention",
    image: "/post-4.png",
    readMoreIcon: "/image-4.svg",
  },
];

const awardsData = [
  {
    icon: "/background-award.png",
    title: "Tech Nation Cyber Rising Star",
    organization: "Tech Nation UK • 2024",
    description:
      "Selected as emerging cybersecurity company showing exceptional promise in fraud prevention innovation.",
  },
  {
    icon: "/background-award.png",
    title: "Newcastle Business Innovation Award",
    organization: "Newcastle City Council • 2024",
    description:
      "Recognized for bringing cutting-edge fintech innovation to North East England.",
  },
  {
    icon: "/background-award.png",
    title: "Uk Fintech Startup To Watch",
    organization: "Fintech Magazine • 2024",
    description:
      "Featured among promising new fintech companies responding to emerging fraud prevention needs.",
  },
  {
    icon: "/background-award.png",
    title: "Cyber Security Excellence - Emerging Company",
    organization: "Cyber Security Awards • 2024",
    description:
      "Honored for innovative approach to cybersecurity fraud prevention and detection.",
  },
];

const contactCards = [
  {
    id: 1,
    backgroundImage: "sub-image6.png",
    icon: "/call.png",
    title: "General Media Inquiries",
    description: "For press releases and general questions",
    contacts: [
      {
        type: "email",
        icon: "/fi_646094.svg",
        value: "press@trustverify.io",
      },
      {
        type: "phone",
        icon: "/fi_3059407.svg",
        value: "+44 191 123 4567",
      },
    ],
  },
  {
    id: 2,
    backgroundImage: "sub-image7.png",
    icon: "/product.png",
    title: "Product & Technology",
    description: "Technical questions and product information",
    contacts: [
      {
        type: "person",
        icon: "/fi_747376.svg",
        value: "Alex Chen, VP of Product Marketing",
      },
      {
        type: "email",
        icon: "/fi_646094.svg",
        value: "product@trustverify.io",
      },
    ],
  },
  {
    id: 3,
    backgroundImage: "sub-image8.png",
    icon: "/interview.png",
    title: "Executive Interviews",
    description: "Leadership interviews and speaking opportunities",
    contacts: [
      {
        type: "person",
        icon: "/fi_747376.svg",
        value: "Jennifer Walsh, Head of Communications",
      },
      {
        type: "email",
        icon: "/fi_646094.svg",
        value: "executives@trustverify.io",
      },
    ],
  },
];

const mediaResponseItems = [
  "Breaking News Inquiries: Within 2 Hours",
  "General Media Requests: Within 24 Hours",
  "Interview Requests: Within 48 Hours",
  "Background Information: Same Day",
];

const brandUsageItems = [
  'Please Use "trustverify" In All References',
  "Download Official Logos From Our Media Kit",
  "Follow Brand Guidelines For Logo Usage",
  "Contact Us For Custom Brand Requests",
];

export const PressMedia = (): JSX.Element => {
  return (
    <main className="bg-white overflow-hidden w-full relative">
      <Header 
        backgroundImage = '/Header_Media.png'
        content={{
          badge: {
            text: "PRESS & MEDIA",
            variant: "secondary"
          },
          title: "Stay Updated with the Latest News",
          description: "Access our media resources, press releases, and connect with our press team for the latest insights on fraud prevention technology.",
          width: '6xl',
        }}
      />
    <section className="w-full flex justify-center py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 max-w-[1232px] w-full px-4">
        {statsData.map((stat, index) => (
          <Card
            key={index}
            className="bg-[#f3f3f3] border-0 rounded-[20px] shadow-none"
          >
            <CardContent className="p-[29px_21px]">
              <div className="flex items-center gap-[18px]">
                <img
                  className="w-16 h-16 flex-shrink-0"
                  alt={stat.title}
                  src={stat.icon}
                />
                <div className="flex flex-col gap-0.5 flex-1">
                  <h3 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-xl tracking-[0] leading-7">
                    {stat.title}
                  </h3>
                  <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base tracking-[0] leading-[normal]">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
    <section className="relative w-full bg-[#f3f3f3] max-h-[1359px] py-16">
      <div className="container mx-auto max-w-[1270px] px-4">
        <div className="flex flex-col items-center gap-[50px]">
          <header className="flex items-start justify-between w-full gap-8">
            <div className="flex flex-col max-w-[645px] gap-5">
              <div className="flex flex-col gap-5">
                <Badge className="w-fit bg-[#003d2b1a] text-[#003d2b] hover:bg-[#003d2b1a] rounded-full px-4 py-2 h-[30px] [font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-sm">
                  PRESS RELEASES
                </Badge>

                <h2 className="text-[54px] leading-[67px] [font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold tracking-[-0.92px] whitespace-nowrap">
                  <span className="text-[#003d2b] tracking-[-0.50px]">
                    Recent Press{" "}
                  </span>
                  <span className="text-[#0b3a78] tracking-[-0.50px]">
                    Releases
                  </span>
                </h2>
              </div>

              <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-lg">
                Stay informed with our latest announcements and company updates
              </p>
            </div>

            <Button className="bg-app-primary hover:bg-app-primary/90 rounded-[10px] h-14 px-6 gap-2">
              <span className="[font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-white text-lg tracking-[-0.20px]">
                View All Releases
              </span>
              <img
                className="w-[30px] h-[30px]"
                alt="Arrow"
                src="/image.svg"
              />
            </Button>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] w-full">
            {pressReleases.map((release, index) => (
              <article key={index} className="flex gap-[30px] h-[251px]">
                <div
                  className="w-[295px] h-full rounded-[20px] bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: `url(${release.image})` }}
                />

                <div className="flex flex-col justify-between py-9 flex-1">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4 text-[#808080]" />
                      <time className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base">
                        {release.date}
                      </time>
                    </div>

                    <h3 className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-[#040303] text-xl leading-7">
                      {release.title}
                    </h3>
                  </div>
                  <div className="flex items-start justify-start gap-3 mt-6">
                      <span className="[font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-app-primary text-lg tracking-[0] leading-[27.2px]">
                        Read More
                      </span>
                      <TrendingUp className="w-6 h-6 text-app-primary" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full items-center gap-5 pt-28 ">
          <div className="flex flex-col items-center gap-5 w-full">
            <Badge className="bg-[#003d2b1a] text-[#003d2b] hover:bg-[#003d2b1a] h-[30px] px-6 rounded-[800px] [font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-sm">
              AWARDS
            </Badge>

            <h2 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[54px] text-center tracking-[-0.27px] leading-[67px]">
              <span className="text-[#003d2b]">Awards &amp; R</span>
              <span className="text-[#0b3a78]">ecognition</span>
            </h2>
          </div>

          <p className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#808080] text-lg text-center tracking-[-0.20px] leading-7">
            Industry recognition for our innovative fraud prevention solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full pt-14">
          {awardsData.map((award, index) => (
            <Card
              key={index}
              className="bg-white rounded-[20px] shadow-[0px_8px_20px_#00000024] border-0"
            >
              <CardContent className="flex flex-col gap-5 p-[37px]">
                <div className="flex items-center gap-5">
                  <img
                    className="w-[50px] h-[50px] flex-shrink-0"
                    alt="Award icon"
                    src={award.icon}
                  />

                  <div className="flex flex-col gap-[5px] flex-1">
                    <h3 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-xl tracking-[0] leading-6">
                      {award.title}
                    </h3>

                    <p className="[font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-[#1e357e] text-base tracking-[0] leading-[normal]">
                      {award.organization}
                    </p>
                  </div>
                </div>

                <p className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#808080] text-base tracking-[0] leading-[27.2px]">
                  {award.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <img
        className="absolute top-[35px] -left-[227px] w-[399px] h-[528px]"
        alt="Nate shape"
        src="/nate-shape.svg"
      />

      <img
        className="absolute top-[656px] right-[131px] w-[30px] h-[30px]"
        alt="Icon star"
        src="/icon-star-1.svg"
      />

      <img
        className="absolute right-0 bottom-0 w-[307px] h-[310px]"
        alt="Pattern"
        src="/pattern.svg"
      />

      <img
        className="absolute left-0 bottom-0 w-[307px] h-[310px]"
        alt="Pattern"
        src="/pattern-1.svg"
      />
    </section>
    <section className="flex flex-col w-full items-center gap-[60px] pt-80 pb-24">
      <div className="flex flex-col max-w-[968px] items-center gap-5">
        <div className="flex flex-col items-center gap-5 w-full">
          <Badge className="bg-[#003d2b1a] text-[#003d2b] hover:bg-[#003d2b1a] h-[30px] px-6 rounded-full">
            <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-sm tracking-[0] leading-[14px]">
              CONTACT US
            </span>
          </Badge>

          <h2 className="text-[54px] text-center whitespace-nowrap [font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold tracking-[-0.50px] leading-[67px]">
            <span className="text-[#003d2b] tracking-[-0.27px]">Press </span>
            <span className="text-[#0b3a78] tracking-[-0.27px]">Contacts</span>
          </h2>
        </div>

        <p className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#808080] text-lg text-center tracking-[-0.20px] leading-7">
          Reach out to our media team for official statements, interviews, and
          press materials. We&apos;re here to provide timely responses and
          accurate information. Let us help you connect with the right
          spokesperson for your story.
        </p>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-[30px] w-full max-w-[1326px]">
        {contactCards.map((card) => (
          <Card
            key={card.id}
            className="w-full max-w-[422px] h-[469px] bg-white rounded-[20px] overflow-hidden border border-solid border-[#e4e4e4]"
          >
            <CardContent className="p-0 relative h-full">
              <div
                className="w-full h-[237px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${card.backgroundImage})` }}
              />

              <div className="flex flex-col items-center gap-[22px] absolute top-[196px] left-1/2 -translate-x-1/2 w-full max-w-[341px] px-4">
                <img
                  className="w-[74px] h-[74px]"
                  alt="Contact icon"
                  src={card.icon}
                />

                <div className="flex flex-col gap-[13px] w-full items-center">
                  <div className="flex flex-col items-center gap-[5px] w-full">
                    <h3 className="[font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold text-[#003d2b] text-xl text-center tracking-[0] leading-6">
                      {card.title}
                    </h3>

                    <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-base text-center tracking-[0] leading-[27px]">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-[5px] w-full">
                    {card.contacts.map((contact, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-[7px] w-full justify-center"
                      >
                        <img
                          className={`${
                            contact.type === "person"
                              ? "w-3.5 h-3.5"
                              : "w-5 h-5"
                          }`}
                          alt="Contact icon"
                          src={contact.icon}
                        />

                        <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#808080] text-base text-center tracking-[0] leading-[27px] whitespace-nowrap">
                          {contact.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
    <section className="w-full flex items-center justify-center pb-28">
      <div className="w-full max-w-[1290px] bg-app-primary rounded-[20px] shadow-[0px_4px_10px_#003d2b1a] p-8">
        <div className="flex items-end justify-between gap-8">
          <div className="flex flex-col gap-[31px] flex-1 max-w-[825px]">
            <div className="flex flex-col gap-2.5">
              <h2 className="text-white text-[40px] [font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold tracking-[-0.50px] leading-[67px]">
                Stay Updated
              </h2>

              <p className="text-white [font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[22px] tracking-[0] leading-[30px] max-w-[786px]">
                Subscribe to our press newsletter for the latest announcements
                and company news
              </p>
            </div>

            <div className="flex items-center gap-0 max-w-[500px]">
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 h-[59px] rounded-[10px_0px_0px_10px] border-[#ffffff33] border-r-0 bg-transparent text-white placeholder:text-white placeholder:opacity-80 [font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-base opacity-80"
              />
              <Button className="h-[59px] w-[75px] rounded-[0px_10px_10px_0px] bg-white hover:bg-white/90 p-0">
                <img className="w-full h-full" alt="Button" src="/button.svg" />
              </Button>
            </div>
          </div>

          <img
            className="w-[351px] h-[244px] flex-shrink-0"
            alt="Newsletter illustration"
            src="/group-3.png"
          />
        </div>
      </div>
    </section>
    <section className="w-full bg-[#f4f4f4] py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-[30px] justify-center max-w-[1270px] mx-auto">
          <div className="flex flex-col w-full lg:w-[620px] items-start gap-6">
            <div className="flex flex-col items-start gap-5 w-full">
              <Badge className="bg-[#003d2b1a] text-[#003d2b] hover:bg-[#003d2b1a] rounded-[800px] px-6 py-2 h-[30px]">
                <span className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-sm tracking-[0] leading-[14px]">
                  INSTRUCTIONS
                </span>
              </Badge>

              <h2 className="text-[46px] leading-[55.2px] [font-family:'Suisse_Intl-SemiBold',Helvetica] font-semibold tracking-[-0.92px] whitespace-nowrap">
                <span className="text-[#003d2b] tracking-[-0.42px]">
                  Press{" "}
                </span>
                <span className="text-[#0b3a78] tracking-[-0.42px]">
                  Guidelines
                </span>
              </h2>

              <p className="[font-family:'DM_Sans_18pt-Medium',Helvetica] font-medium text-[#808080] text-lg tracking-[0] leading-[27.2px]">
                Our press guidelines ensure consistency, accuracy, and
                professionalism in all communications. They provide clear
                direction on using our brand assets, messaging, and official
                statements.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-[53px] w-full">
              <div className="flex flex-col w-full md:w-[257px] items-start gap-6">
                <img
                  className="w-14 h-14"
                  alt="Media Response Times Icon"
                  src="/icon-group3.png"
                />

                <div className="flex flex-col items-start gap-5 w-full">
                  <h3 className="[font-family:'DM_Sans_18pt-SemiBold',Helvetica] text-[#040303] font-semibold text-xl tracking-[0] leading-6">
                    Media Response Times
                  </h3>

                  <div className="flex flex-col items-start gap-[19px] w-full">
                    {mediaResponseItems.map((item, index) => (
                      <div key={index} className="flex items-start gap-2.5">
                        <CheckCircle2Icon className="w-5 h-5 text-[#00cc61] flex-shrink-0 mt-0.5" />
                        <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-sm tracking-[0] leading-[23px]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full md:w-[257px] items-start gap-6">
                <img
                  className="w-14 h-14"
                  alt="Brand Usage Icon"
                  src="/icon-group4.png"
                />

                <div className="flex flex-col items-start gap-5 w-full">
                  <h3 className="[font-family:'DM_Sans_18pt-SemiBold',Helvetica] text-[#040303] font-semibold text-xl tracking-[0] leading-6">
                    Brand Usage
                  </h3>

                  <div className="flex flex-col items-start gap-[19px] w-full">
                    {brandUsageItems.map((item, index) => (
                      <div key={index} className="flex items-start gap-2.5">
                        <CheckCircle2Icon className="w-5 h-5 text-[#00cc61] flex-shrink-0 mt-0.5" />
                        <p className="[font-family:'DM_Sans_18pt-Regular',Helvetica] font-normal text-[#808080] text-sm tracking-[0] leading-[23px]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-[620px] h-[584.64px] hidden lg:block">
            <div className="absolute top-0 right-0 w-[385px] h-[420px] rounded-[20px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Press Guidelines Image 1"
                src="/image-18.png"
              />
            </div>

            <div className="absolute bottom-0 left-0 w-[374px] h-[408px] border-[10px] border-solid border-[#f4f4f4] rounded-[20px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Press Guidelines Image 2"
                src="/image-17.png"
              />
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute left-0 bottom-0 w-[191px] h-[173px]"
        alt="Decorative shape"
        src="/shape-nate-31-svg-fill.svg"
  />

      <img
        className="absolute top-[142px] right-[131px] w-[30px] h-[30px]"
        alt="Star icon decoration"
        src="/icon-star.svg"
      />
    </section>
      <Footer/>
    </main>
  );
};
