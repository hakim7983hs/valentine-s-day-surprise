import { CalendarHeart } from "lucide-react";

interface DateDisplayProps {
  date: string;
  label?: string;
}

const DateDisplay = ({ date, label = "Our Special Day" }: DateDisplayProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2 text-rose-light">
        <CalendarHeart className="w-5 h-5" />
        <span className="font-script text-lg">{label}</span>
      </div>
      <div className="bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full border border-rose-light/30 shadow-romantic">
        <p className="font-display text-2xl text-foreground tracking-wide">{date}</p>
      </div>
    </div>
  );
};

export default DateDisplay;
