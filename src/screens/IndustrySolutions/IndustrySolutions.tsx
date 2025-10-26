import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";



export const IndustrySolutions = (): JSX.Element => {
  return (
    <main className="bg-white overflow-hidden w-full relative">
      <Header 
        backgroundImage = '/Header_Industry.png'
        content={{
          badge: {
            text: "INDUSTRY-LEADING FRAUD PREVENTION",
            variant: "secondary"
          },
          title: "Advanced Trust Verification for Every Business",
          description: "Protect your business with AI-powered fraud detection and trust verification solutions. Reduce losses, increase customer confidence, and scale with confidence.",
        }}
      />

      <Footer/>
    </main>
  );
};
