
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

type CourseCardProps = {
  id: string;
  code: string;
  name: string;
  instructor: string;
  progress?: number;
  color?: string;
  userType: "student" | "professor";
};

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  code,
  name,
  instructor,
  progress = 0,
  color = "bg-academi-600",
  userType,
}) => {
  const navigate = useNavigate();
  
  const handleViewCourse = () => {
    if (userType === "student") {
      navigate(`/student/courses/${id}`);
    } else {
      navigate(`/professor/courses/${id}`);
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className={`${color} h-2`} />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">{code}</p>
            <h3 className="text-xl font-bold mt-1">{name}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {userType === "student" ? `د. ${instructor}` : `${instructor} طالب`}
            </p>
          </div>
          <div className="p-3 rounded-full bg-academi-100 text-academi-600">
            <Book className="h-5 w-5" />
          </div>
        </div>
        
        {userType === "student" && (
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>التقدم</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
        
        <div className="mt-6">
          <Button onClick={handleViewCourse} variant="outline" className="w-full">
            {userType === "student" ? "عرض المقرر" : "إدارة المقرر"}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
