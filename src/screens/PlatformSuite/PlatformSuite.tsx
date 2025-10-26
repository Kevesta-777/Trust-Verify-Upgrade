import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";



export const PlatformSuite = (): JSX.Element => {
  return (
    <main className="bg-white overflow-hidden w-full relative">
      <Header 
        backgroundImage = '/Header_Platform.png'
        content={{
          title: "TrustVerify Platform Suite",
          description: "Comprehensive fraud prevention and trust verification tools designed for enterprise-grade security and global scale.",
          tags: ["SOC 2 CERTIFIED", "256-BIT ENCRYPTION", "99.99% UPTIME"],
          maxWidth: "880px"
        }}
      />

      <Footer/>
    </main>
  );
};
