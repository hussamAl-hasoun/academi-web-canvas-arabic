
import React from "react";
import { Card } from "@/components/ui/card";

type StatCardProps = {
  title: string;
  value: string | number;
  description?: string;
  icon: React.ReactNode;
  color?: string;
};

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  icon,
  color = "bg-academi-100 text-academi-600",
}) => {
  return (
    <Card className="dashboard-stats-card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          {description && (
            <p className="text-xs text-gray-500 mt-1">{description}</p>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>{icon}</div>
      </div>
    </Card>
  );
};

type DashboardStatsProps = {
  userType: "student" | "professor";
};

const DashboardStats: React.FC<DashboardStatsProps> = ({ userType }) => {
  const studentStats = [
    {
      title: "المقررات المسجلة",
      value: "5",
      icon: <Book className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "المهام المطلوبة",
      value: "3",
      description: "متبقي يومان",
      icon: <Calendar className="h-5 w-5" />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "الاختبارات القادمة",
      value: "2",
      description: "الأسبوع القادم",
      icon: <MessageSquare className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "المعدل التراكمي",
      value: "3.85",
      icon: <User className="h-5 w-5" />,
      color: "bg-green-100 text-green-600",
    },
  ];

  const professorStats = [
    {
      title: "المقررات",
      value: "4",
      icon: <Book className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "الواجبات للتصحيح",
      value: "12",
      icon: <Calendar className="h-5 w-5" />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "الطلاب المسجلين",
      value: "120",
      icon: <MessageSquare className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "الإعلانات",
      value: "8",
      icon: <User className="h-5 w-5" />,
      color: "bg-green-100 text-green-600",
    },
  ];

  const stats = userType === "student" ? studentStats : professorStats;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats;
