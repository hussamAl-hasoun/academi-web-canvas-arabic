
import React from "react";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

type Event = {
  id: string;
  title: string;
  date: string;
  type: "assignment" | "exam" | "lecture" | "announcement";
  course: string;
};

const eventTypeStyles = {
  assignment: "bg-blue-100 text-blue-600",
  exam: "bg-red-100 text-red-600",
  lecture: "bg-green-100 text-green-600",
  announcement: "bg-purple-100 text-purple-600",
};

const eventTypeLabels = {
  assignment: "واجب",
  exam: "اختبار",
  lecture: "محاضرة",
  announcement: "إعلان",
};

type UpcomingEventsProps = {
  events: Event[];
};

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold">الأحداث القادمة</h3>
        <Button className="text-xs p-1 hover:bg-gray-100 rounded">
          عرض الكل
        </Button>
      </div>

      <div className="space-y-4">
        {events.length === 0 ? (
          <p className="text-gray-500 text-center py-8">لا توجد أحداث قادمة</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="flex items-start">
              <div className="p-2 rounded-full bg-gray-100 mt-1">
                <Calendar className="h-5 w-5 text-gray-500" />
              </div>
              <div className="mr-4 flex-1">
                <div className="flex justify-between">
                  <h4 className="font-medium">{event.title}</h4>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      eventTypeStyles[event.type]
                    }`}
                  >
                    {eventTypeLabels[event.type]}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{event.course}</p>
                <p className="text-xs text-gray-400 mt-1">{event.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
};

// This is a button component to avoid re-defining it
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }> = ({ 
  children, 
  className,
  ...props 
}) => (
  <button 
    className={`text-academi-600 ${className || ""}`}
    {...props}
  >
    {children}
  </button>
);

export default UpcomingEvents;
