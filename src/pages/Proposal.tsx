import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles } from "lucide-react";
import FallingHearts from "@/components/FallingHearts";
import valentineBg from "@/assets/valentine-bg.jpg";

const Proposal = () => {
  const navigate = useNavigate();
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [showHearts, setShowHearts] = useState(false);

  const handleYes = () => {
    setShowHearts(true);
    setTimeout(() => navigate("/valentine"), 1500);
  };

  const handleNoHover = () => {
    setNoPosition({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
    });
  };

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
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      </div>

      {/* Falling Hearts */}
      <FallingHearts />

      {/* Burst hearts on Yes */}
      {showHearts && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
          {Array.from({ length: 30 }).map((_, i) => (
            <Heart
              key={i}
              className="absolute text-rose fill-rose animate-float"
              style={{
                width: `${16 + Math.random() * 32}px`,
                height: `${16 + Math.random() * 32}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center animate-reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-gold" />
            <Heart className="w-10 h-10 text-rose fill-rose animate-heartbeat" />
            <Sparkles className="w-6 h-6 text-gold" />
          </div>

          <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-gradient-romantic mb-8 leading-tight">
            Will You Be
            <br />
            My Valentine?
          </h1>

          <p className="font-display text-xl sm:text-2xl text-foreground/70 italic mb-12">
            I have something special for you...
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={handleYes}
              className="relative group px-10 py-4 bg-gradient-romantic rounded-full font-script text-2xl text-primary-foreground shadow-glow hover:scale-110 transition-all duration-300 animate-pulse-glow"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Heart className="w-5 h-5 fill-current" />
                Yes!
                <Heart className="w-5 h-5 fill-current" />
              </span>
            </button>

            <button
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              className="px-8 py-3 bg-muted/50 backdrop-blur-sm rounded-full font-display text-lg text-muted-foreground border border-border/50 transition-all duration-300"
              style={{
                transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              No
            </button>
          </div>
        </div>

        <footer className="absolute bottom-8 text-center">
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-rose-light fill-rose-light" />
            <span className="font-script text-lg text-muted-foreground">
              Made with love
            </span>
            <Heart className="w-4 h-4 text-rose-light fill-rose-light" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Proposal;
