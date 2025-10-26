import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";



export const RegulatoryCompliances = (): JSX.Element => {
  return (
    <main className="bg-white overflow-hidden w-full relative">
      <Header 
        content={{
          title: "Regulatory Compliance",
          description: "TrustVerify demonstrates comprehensive compliance with global financial regulations to ensure the highest standards of security and regulatory adherence.",
        }}
      />

      <Footer/>
    </main>
  );
};
