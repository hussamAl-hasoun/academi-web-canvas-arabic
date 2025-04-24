import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CourseCard from "@/components/dashboard/CourseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const CoursesPage = () => {
  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">المقررات الدراسية</h1>
        
        <Tabs defaultValue="current">
          <TabsList>
            <TabsTrigger value="current">المقررات الحالية</TabsTrigger>
            <TabsTrigger value="previous">المقررات السابقة</TabsTrigger>
          </TabsList>
          
          <TabsContent value="current" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockCourses.map((course) => (
                <CourseCard key={course.id} {...course} userType="student" />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="previous">
            <div className="text-center py-12 text-gray-500">
              لا توجد مقررات سابقة
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default CoursesPage;
