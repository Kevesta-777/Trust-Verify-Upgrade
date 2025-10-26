import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";



export const HelpCenter = (): JSX.Element => {
  return (
    <main className="bg-white overflow-hidden w-full relative">
      <Header 
        backgroundImage = '/Header_Help.png'
        content={{
          badge: {
            text: "HELP & SUPPORT",
            variant: "secondary"
          },
          title: "Help Center",
          description: "Get in touch with our team of fraud prevention experts. We’re here to help you to secure your business and answer any questions about our platform.",
        }}
      />

      <Footer/>
    </main>
  );
};
