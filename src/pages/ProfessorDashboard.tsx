
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardStats from "@/components/dashboard/DashboardStats";
import CourseCard from "@/components/dashboard/CourseCard";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import { Book, Calendar, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

// Mock data
const mockCourses = [
  {
    id: "cs101",
    code: "CS 101",
    name: "مقدمة في علوم الحاسب",
    instructor: "45",
    color: "bg-blue-600",
  },
  {
    id: "math201",
    code: "MATH 201",
    name: "التفاضل والتكامل",
    instructor: "38",
    color: "bg-green-600",
  },
  {
    id: "eng101",
    code: "ENG 101",
    name: "اللغة الإنجليزية",
    instructor: "42",
    color: "bg-purple-600",
  },
];

const mockEvents = [
  {
    id: "event1",
    title: "موعد تسليم واجبات البرمجة",
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
    title: "إعلان عن تغيير موعد المحاضرة",
    date: "27 أبريل 2025",
    type: "announcement" as const,
    course: "ENG 101 - اللغة الإنجليزية",
  },
];

// Mock student submission data for visualization
const mockSubmissionData = {
  submitted: 78,
  late: 12,
  notSubmitted: 10,
};

const ProfessorDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in as professor
    const userType = localStorage.getItem("userType");
    if (userType !== "professor") {
      navigate("/");
      return;
    }
    
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  if (loading) {
    return (
      <DashboardLayout userType="professor">
        <div className="flex justify-center items-center h-64">
          <p className="text-lg">جاري تحميل البيانات...</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout userType="professor">
      <h1 className="text-3xl font-bold mb-6">لوحة التحكم</h1>
      
      <DashboardStats userType="professor" />
      
      <div className="mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">المقررات الدراسية</h2>
          <button 
            className="text-academi-600 hover:text-academi-700"
            onClick={() => navigate("/professor/courses")}
          >
            عرض الكل
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockCourses.map((course) => (
            <CourseCard key={course.id} {...course} userType="professor" />
          ))}
        </div>
      </div>
      
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <UpcomingEvents events={mockEvents} />
        </div>
        <div>
          {/* Submission stats card */}
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">إحصائيات تسليم الواجبات</h3>
            <div className="space-y-4">
              <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden">
                <div 
                  className="bg-green-500 h-full" 
                  style={{ width: `${mockSubmissionData.submitted}%` }}
                />
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="text-center">
                  <div className="p-2 bg-green-100 rounded-full mx-auto w-8 h-8 flex items-center justify-center mb-1">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="font-medium">{mockSubmissionData.submitted}%</p>
                  <p className="text-gray-500">تم التسليم</p>
                </div>
                <div className="text-center">
                  <div className="p-2 bg-orange-100 rounded-full mx-auto w-8 h-8 flex items-center justify-center mb-1">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  </div>
                  <p className="font-medium">{mockSubmissionData.late}%</p>
                  <p className="text-gray-500">متأخر</p>
                </div>
                <div className="text-center">
                  <div className="p-2 bg-red-100 rounded-full mx-auto w-8 h-8 flex items-center justify-center mb-1">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="font-medium">{mockSubmissionData.notSubmitted}%</p>
                  <p className="text-gray-500">لم يُسلم</p>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Quick links card */}
          <Card className="p-6 mt-6">
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                  <Calendar className="h-5 w-5" />
                </div>
                <span className="mr-3 font-medium">جدول المحاضرات</span>
              </a>
              <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="p-2 rounded-full bg-green-100 text-green-600">
                  <Book className="h-5 w-5" />
                </div>
                <span className="mr-3 font-medium">إنشاء اختبار جديد</span>
              </a>
              <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <span className="mr-3 font-medium">الإعلانات</span>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfessorDashboard;
