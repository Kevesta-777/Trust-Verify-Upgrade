import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";



export const PressMedia = (): JSX.Element => {
  return (
    <main className="bg-white overflow-hidden w-full relative">
      <Header 
        backgroundImage = '/Header_Media.png'
        content={{
          badge: {
            text: "PRESS & MEDIA",
            variant: "secondary"
          },
          title: "Stay Updated with the Latest News",
          description: "Access our media resources, press releases, and connect with our press team for the latest insights on fraud prevention technology.",
          width: '6xl',
        }}
      />

      <Footer/>
    </main>
  );
};
