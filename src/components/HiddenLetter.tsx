import { useState } from "react";
import { Heart, Sparkles, Mail, MailOpen } from "lucide-react";

interface HiddenLetterProps {
  message: string;
}

const HiddenLetter = ({ message }: HiddenLetterProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="relative">
      {/* Envelope Button */}
      {!isRevealed && (
        <button
          onClick={() => setIsRevealed(true)}
          className="group relative flex flex-col items-center gap-4 p-8 transition-all duration-500 hover:scale-105"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-romantic rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Envelope */}
          <div className="relative bg-card p-8 rounded-2xl shadow-card border border-rose-light/30 group-hover:shadow-glow transition-all duration-500">
            <Mail className="w-16 h-16 text-rose group-hover:hidden transition-all" />
            <MailOpen className="w-16 h-16 text-rose hidden group-hover:block animate-heartbeat" />
            
            {/* Sparkles */}
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-gold animate-sparkle" />
            <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-gold animate-sparkle" style={{ animationDelay: "1s" }} />
          </div>
          
          <p className="font-script text-2xl text-rose">Click to reveal my heart</p>
          <p className="text-sm text-muted-foreground">A secret message awaits...</p>
        </button>
      )}

      {/* Revealed Letter */}
      {isRevealed && (
        <div className="animate-reveal">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-romantic rounded-3xl blur-3xl opacity-20" />
          
          {/* Letter card */}
          <div className="relative bg-card/95 backdrop-blur-sm p-8 sm:p-12 rounded-3xl shadow-card border border-rose-light/30 max-w-lg mx-auto">
            {/* Decorative corner hearts */}
            <Heart className="absolute top-4 left-4 w-6 h-6 text-rose-light fill-rose-light/50" />
            <Heart className="absolute top-4 right-4 w-6 h-6 text-rose-light fill-rose-light/50" />
            <Heart className="absolute bottom-4 left-4 w-6 h-6 text-rose-light fill-rose-light/50" />
            <Heart className="absolute bottom-4 right-4 w-6 h-6 text-rose-light fill-rose-light/50" />
            
            {/* Gold border accent */}
            <div className="absolute inset-4 border border-gold/20 rounded-2xl pointer-events-none" />
            
            {/* Content */}
            <div className="relative space-y-6 text-center">
              <Sparkles className="w-8 h-8 text-gold mx-auto" />
              
              <h3 className="font-script text-3xl sm:text-4xl text-gradient-romantic">
                My Dearest Love
              </h3>
              
              <div className="w-16 h-px bg-gradient-romantic mx-auto opacity-50" />
              
              <p className="font-body text-lg leading-relaxed text-foreground/90 whitespace-pre-line px-4">
                {message}
              </p>
              
              <div className="w-16 h-px bg-gradient-romantic mx-auto opacity-50" />
              
              <div className="flex items-center justify-center gap-2 pt-4">
                <Heart className="w-5 h-5 text-rose fill-rose animate-heartbeat" />
                <span className="font-script text-2xl text-rose">Forever Yours</span>
                <Heart className="w-5 h-5 text-rose fill-rose animate-heartbeat" />
              </div>
            </div>
          </div>
          
          {/* Close button */}
          <button
            onClick={() => setIsRevealed(false)}
            className="mt-6 font-script text-lg text-muted-foreground hover:text-rose transition-colors"
          >
            Hide letter
          </button>
        </div>
      )}
    </div>
  );
};

export default HiddenLetter;
