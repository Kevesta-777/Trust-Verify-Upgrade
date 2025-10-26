import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";



export const LegalDisclaimer = (): JSX.Element => {
  return (
    <main className="bg-white overflow-hidden w-full relative">
      <Header 
        content={{
          title: "Legal Disclaimer",
          description: "Important legal information regarding the use of TrustVerify services",
        }}
      />

      <Footer/>
    </main>
  );
};
