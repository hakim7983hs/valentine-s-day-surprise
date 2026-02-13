import { Heart } from "lucide-react";

interface PhotoFrameProps {
  imageSrc?: string;
}

const PhotoFrame = ({ imageSrc }: PhotoFrameProps) => {
  return (
    <div className="relative group">
      {/* Decorative hearts */}
      <Heart 
        className="absolute -top-4 -left-4 w-8 h-8 text-rose fill-rose animate-heartbeat z-10" 
        style={{ animationDelay: "0s" }}
      />
      <Heart 
        className="absolute -top-2 -right-6 w-6 h-6 text-rose-light fill-rose-light animate-heartbeat z-10" 
        style={{ animationDelay: "0.3s" }}
      />
      <Heart 
        className="absolute -bottom-4 -right-4 w-7 h-7 text-rose fill-rose animate-heartbeat z-10" 
        style={{ animationDelay: "0.6s" }}
      />
      <Heart 
        className="absolute -bottom-2 -left-6 w-5 h-5 text-rose-light fill-rose-light animate-heartbeat z-10" 
        style={{ animationDelay: "0.9s" }}
      />

      {/* Frame glow effect */}
      <div className="absolute inset-0 bg-gradient-romantic rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
      
      {/* Main frame */}
      <div className="relative bg-card p-3 rounded-2xl shadow-card border-4 border-rose-light/30 overflow-hidden">
        {/* Gold inner border */}
        <div className="absolute inset-3 border-2 border-gold/20 rounded-xl pointer-events-none" />
        
        {/* Photo container */}
        <div className="relative aspect-[4/5] w-64 sm:w-80 overflow-hidden rounded-xl bg-blush">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Our beautiful moment together"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
              <Heart className="w-16 h-16 text-rose-light fill-rose-light/50 mb-4 animate-heartbeat" />
              <p className="font-script text-xl text-rose">Your photo here</p>
              <p className="text-sm mt-2 text-muted-foreground">Upload our special moment</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoFrame;
