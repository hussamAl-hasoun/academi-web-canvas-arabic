import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardStats from "@/components/dashboard/DashboardStats";
import CourseCard from "@/components/dashboard/CourseCard";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import { Book, Calendar, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const mockCourses = [
  {
    id: "cloud101",
    code: "CLD 101",
    name: "الحوسبة السحابية",
    instructor: "د. محمد أحمد",
    progress: 75,
    color: "bg-blue-600",
  },
  {
    id: "it101",
    code: "IT 101",
    name: "أساسيات تقنية المعلومات",
    instructor: "د. أحمد خالد",
    progress: 60,
    color: "bg-green-600",
  },
  {
    id: "eng201",
    code: "ENG 201",
    name: "اللغة الإنجليزية لعلوم الحاسب",
    instructor: "د. سارة محمد",
    progress: 40,
    color: "bg-purple-600",
  },
  {
    id: "os301",
    code: "OS 301",
    name: "نظم تشغيل",
    instructor: "د. فيصل علي",
    progress: 85,
    color: "bg-orange-600",
  },
  {
    id: "net401",
    code: "NET 401",
    name: "شبكات الحاسب",
    instructor: "د. عبدالله محمد",
    progress: 70,
    color: "bg-red-600",
  },
  {
    id: "cld201",
    code: "CLD 201",
    name: "البنية التحتية وخدمات الحوسبة السحابية",
    instructor: "د. خالد عمر",
    progress: 55,
    color: "bg-indigo-600",
  }
];

const mockEvents = [
  {
    id: "event1",
    title: "تسليم واجب البرمجة",
    date: "21 أبريل 2025",
    type: "assignment" as const,
    course: "CS 101 - مقدمة في علوم الحاسب",
  },
  {
    id: "event2",
    title: "اختبار منتصف الفصل",
    date: "25 أبريل 2025",
    type: "exam" as const,
    course: "MATH 201 - التفاضل والتكامل",
  },
  {
    id: "event3",
    title: "محاضرة اللغة الإنجليزية",
    date: "27 أبريل 2025",
    type: "lecture" as const,
    course: "ENG 101 - اللغة الإنجليزية",
  },
];

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    if (userType !== "student") {
      navigate("/");
      return;
    }
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  if (loading) {
    return (
      <DashboardLayout userType="student">
        <div className="flex justify-center items-center h-64">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-32 bg-gray-200 rounded"></div>
            <div className="h-4 w-48 bg-gray-200 rounded"></div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout userType="student">
      <div className="space-y-8">
        <div className="animate-fade-in">
          <h1 className="section-header">لوحة التحكم</h1>
          <DashboardStats userType="student" />
        </div>
        
        <section className="animate-slide-up">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">المقررات الدراسية</h2>
            <button 
              className="text-primary hover:text-primary/80 transition-colors"
              onClick={() => navigate("/student/courses")}
            >
              عرض الكل
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {mockCourses.slice(0, 6).map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CourseCard {...course} userType="student" />
              </motion.div>
            ))}
          </div>
        </section>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <UpcomingEvents events={mockEvents} />
          </div>
          <div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center p-3 bg-gray-50/50 rounded-lg hover:bg-gray-100/50 transition-colors">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <span className="mr-3 font-medium">الجدول الدراسي</span>
                </a>
                <a href="#" className="flex items-center p-3 bg-gray-50/50 rounded-lg hover:bg-gray-100/50 transition-colors">
                  <div className="p-2 rounded-full bg-green-100 text-green-600">
                    <Book className="h-5 w-5" />
                  </div>
                  <span className="mr-3 font-medium">المكتبة الإلكترونية</span>
                </a>
                <a href="#" className="flex items-center p-3 bg-gray-50/50 rounded-lg hover:bg-gray-100/50 transition-colors">
                  <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <span className="mr-3 font-medium">منتدى النقاش</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
