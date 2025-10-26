import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";



export const CustomerProtection = (): JSX.Element => {
  return (
    <main className="bg-white overflow-hidden w-full relative">
      <Header 
        backgroundImage = '/Header_Customer.png'
        content={{
          title: "Consumer Protection Demo",
          description: "Experience our personal security solutions. Safeguard your identity, finances, and digital life with advanced consumer protection tools designed for the modern world.",
          tags: ["IDENTITY MONITORING", "PERSONAL PROTECTION", "REAL-TIME ANALYSIS"],
          maxWidth: "930px",
        }}
      />

      <Footer/>
    </main>
  );
};
