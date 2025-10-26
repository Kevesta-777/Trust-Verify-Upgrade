import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";



export const Training = (): JSX.Element => {
  return (
    <main className="bg-white overflow-hidden w-full relative">
      <Header 
        backgroundImage = '/Header_Training.png'
        content={{
          badge: {
            text: "PROFESSIONAL FRAUD TRAINING",
            variant: "secondary"
          },
          title: "TrustVerify Fraud Academy",
          description: "Master fraud prevention with our comprehensive training program. From basic awareness to expert-level investigation skills.",
        }}
      />

      <Footer/>
    </main>
  );
};
