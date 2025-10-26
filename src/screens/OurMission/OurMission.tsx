import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";



export const OurMission = (): JSX.Element => {
  return (
    <main className="bg-white overflow-hidden w-full relative">
      <Header 
        backgroundImage = '/Header_Mission.png'
        content={{
          badge: {
            text: "OUR MISSION",
            variant: "secondary"
          },
          title: "Join Our Mission",
          description: "Help us build the future of secure transactions. Join a team of world-class engineers, product leaders and security experts working to eliminate fraud and create trust in digital commerce.",
        }}
      />

      <Footer/>
    </main>
  );
};
