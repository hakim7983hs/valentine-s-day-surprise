interface PhotoFrameProps {
  photoUrl?: string;
  caption?: string;
}

const PhotoFrame = ({ photoUrl, caption = "Our Beautiful Moments" }: PhotoFrameProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative p-4 bg-gradient-to-br from-gold to-amber-600 rounded-xl shadow-2xl">
        <div className="absolute inset-2 border-2 border-white/30 rounded-lg pointer-events-none" />
        <div className="w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-br from-burgundy/20 to-burgundy/40 rounded-lg overflow-hidden flex items-center justify-center">
          {photoUrl ? (
            <img src={photoUrl} alt="Our photo" className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center gap-2 text-rose">
              <span className="text-6xl animate-heartbeat">💕</span>
              <span className="font-dancing text-xl text-gold">Your Photo Here</span>
            </div>
          )}
        </div>
      </div>
      <p className="font-dancing text-2xl text-rose drop-shadow-lg">{caption}</p>
    </div>
  );
};

export default PhotoFrame;
