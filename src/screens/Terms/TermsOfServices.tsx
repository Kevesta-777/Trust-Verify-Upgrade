import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";



export const TermsOfServices = (): JSX.Element => {
  return (
    <main className="bg-white overflow-hidden w-full relative">
      <Header 
        content={{
          title: "Terms of Service",
          description: "By using TrustVerify, you agree to these Terms and Conditions. These terms govern your access to and use of our platform, services, APIs, and tools.",
          maxWidth: "1075px"
        }}
      />

      <Footer/>
    </main>
  );
};
