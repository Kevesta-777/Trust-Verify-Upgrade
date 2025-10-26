import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";



export const PricingDetail = (): JSX.Element => {
  return (
    <main className="bg-white overflow-hidden w-full relative">
      <Header 
        backgroundImage = '/Header_Pricing.png'
        content={{
          badge: {
            text: "PRICING",
            variant: "secondary"
          },
          title: "Simple, Transparent Pricing",
          description: "Choose the perfect plan for your business. No hidden fees, no surprises. All plans include our core fraud prevention and escrow protection.",
        }}
      />

      <Footer/>
    </main>
  );
};
