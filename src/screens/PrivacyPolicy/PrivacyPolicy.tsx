import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";



export const PrivacyPolicy = (): JSX.Element => {
  return (
    <main className="bg-white overflow-hidden w-full relative">
      <Header 
        backgroundImage = '/Header_Policies.png'
        content={{
          badge: {
            text: "POLICIES",
            variant: "secondary"
          },
          title: "Privacy Policy",
          description: "We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your personal information. This policy explains our practices in clear, understandable terms.",
        }}
      />

      <Footer/>
    </main>
  );
};
