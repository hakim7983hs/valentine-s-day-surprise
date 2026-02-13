import { Heart, Camera } from "lucide-react";

interface Memory {
  id: number;
  title: string;
  date: string;
  description: string;
  imageSrc?: string;
}

const memories: Memory[] = [
  {
    id: 1,
    title: "Our First Date",
    date: "The day it all began",
    description:
      "The moment I saw you, I knew my life was about to change forever. Every second felt magical.",
  },
  {
    id: 2,
    title: "That Special Evening",
    date: "A night to remember",
    description:
      "Under the stars, we shared our dreams and realized we were meant to walk this journey together.",
  },
  {
    id: 3,
    title: "Our Adventure Together",
    date: "Making memories",
    description:
      "Every trip, every laugh, every little moment with you becomes my most treasured memory.",
  },
  {
    id: 4,
    title: "A Perfect Day",
    date: "Pure happiness",
    description:
      "Some days are just perfect — not because everything goes right, but because I spend them with you.",
  },
];

const MemoryTimeline = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-script text-4xl sm:text-5xl text-gradient-romantic mb-3">
          Our Memory Tree
        </h2>
        <p className="font-display text-lg text-muted-foreground italic">
          Every moment with you is a treasure
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-romantic opacity-30 -translate-x-1/2" />

        {memories.map((memory, index) => (
          <div
            key={memory.id}
            className={`relative flex items-start gap-6 mb-12 animate-reveal ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Content card */}
            <div className="flex-1">
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl shadow-card border border-rose-light/20 overflow-hidden group hover:shadow-glow transition-all duration-500">
                {/* Photo area */}
                <div className="relative aspect-[16/10] bg-blush overflow-hidden">
                  {memory.imageSrc ? (
                    <img
                      src={memory.imageSrc}
                      alt={memory.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                      <Camera className="w-10 h-10 text-rose-light mb-2" />
                      <p className="font-script text-base text-rose-light">
                        Add your photo
                      </p>
                    </div>
                  )}
                </div>

                {/* Text content */}
                <div className="p-5">
                  <h3 className="font-script text-2xl text-gradient-romantic mb-1">
                    {memory.title}
                  </h3>
                  <p className="font-display text-sm text-gold mb-3 italic">
                    {memory.date}
                  </p>
                  <p className="font-body text-sm leading-relaxed text-foreground/80">
                    {memory.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline dot */}
            <div className="absolute left-1/2 -translate-x-1/2 top-4 z-10">
              <div className="w-8 h-8 rounded-full bg-gradient-romantic flex items-center justify-center shadow-glow">
                <Heart className="w-4 h-4 text-primary-foreground fill-current" />
              </div>
            </div>

            {/* Spacer for opposite side */}
            <div className="flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryTimeline;
