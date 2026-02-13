import { Heart, Sparkles } from "lucide-react";
import FallingHearts from "@/components/FallingHearts";
import PhotoFrame from "@/components/PhotoFrame";
import DateDisplay from "@/components/DateDisplay";
import HiddenLetter from "@/components/HiddenLetter";
import MemoryTimeline from "@/components/MemoryTimeline";
import valentineBg from "@/assets/valentine-bg.jpg";
import coupleMain from "@/assets/couple-main.jpg";

const Index = () => {
  // Customize these for your partner!
  const specialDate = "February 14, 2025";
  const loveMessage = `Every moment with you feels like a beautiful dream I never want to wake up from.

Your smile lights up my world, your laugh is my favorite melody, and your love is the greatest gift I've ever received.

Thank you for being my best friend, my confidant, and my forever love. I cherish every second we spend together.

I love you more than words could ever express.`;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${valentineBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      </div>

      {/* Falling Hearts Animation */}
      <FallingHearts />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12 animate-reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-gold" />
            <Heart className="w-8 h-8 text-rose fill-rose animate-heartbeat" />
            <Sparkles className="w-6 h-6 text-gold" />
          </div>
          
          <h1 className="font-script text-5xl sm:text-7xl text-gradient-romantic mb-4">
            Happy Valentine's Day
          </h1>
          
          <p className="font-display text-xl sm:text-2xl text-foreground/80 italic">
            To the love of my life
          </p>
        </header>

        {/* Photo Section */}
        <section className="mb-12 animate-reveal" style={{ animationDelay: "0.2s" }}>
          <PhotoFrame imageSrc={coupleMain} />
        </section>

        {/* Date Display */}
        <section className="mb-16 animate-reveal" style={{ animationDelay: "0.4s" }}>
          <DateDisplay date={specialDate} label="Our Special Day" />
        </section>

        {/* Hidden Love Letter */}
        <section className="text-center animate-reveal" style={{ animationDelay: "0.6s" }}>
          <HiddenLetter message={loveMessage} />
        </section>

        {/* Memory Timeline */}
        <section className="w-full mb-16 animate-reveal" style={{ animationDelay: "0.8s" }}>
          <MemoryTimeline />
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center animate-reveal" style={{ animationDelay: "0.8s" }}>
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-rose-light fill-rose-light" />
            <span className="font-script text-lg text-muted-foreground">Made with love</span>
            <Heart className="w-4 h-4 text-rose-light fill-rose-light" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
