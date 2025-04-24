
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Book,
  Calendar,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  User,
  X
} from "lucide-react";

type DashboardLayoutProps = {
  children: React.ReactNode;
  userType: "student" | "professor";
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  userType,
}) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const username = localStorage.getItem("username") || "مستخدم";

  const handleLogout = () => {
    localStorage.removeItem("userType");
    localStorage.removeItem("username");
    navigate("/");
  };

  const navItems = {
    student: [
      { name: "الرئيسية", icon: Home, path: "/student/dashboard" },
      { name: "المقررات", icon: Book, path: "/student/courses" },
      { name: "الجدول الدراسي", icon: Calendar, path: "/student/schedule" },
      { name: "الرسائل", icon: MessageSquare, path: "/student/messages" },
    ],
    professor: [
      { name: "الرئيسية", icon: Home, path: "/professor/dashboard" },
      { name: "المقررات", icon: Book, path: "/professor/courses" },
      { name: "الجدول", icon: Calendar, path: "/professor/schedule" },
      { name: "الرسائل", icon: MessageSquare, path: "/professor/messages" },
    ],
  };

  const currentItems = userType === "student" ? navItems.student : navItems.professor;

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden p-4 bg-white border-b">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        } fixed md:relative md:w-64 h-full bg-white shadow-md transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Book className="h-6 w-6" />
              </div>
              <h1 className="text-xl font-bold ms-3 text-primary">أكاديمي</h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="space-y-1 flex-1">
            {currentItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="w-full justify-start text-base font-normal py-3 px-4 hover:bg-primary/5"
                onClick={() => navigate(item.path)}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Button>
            ))}
          </nav>

          <div className="pt-4 border-t border-gray-200">
            <Button
              variant="ghost"
              className="w-full justify-start text-base font-normal py-3 px-4"
              onClick={() => navigate(`/${userType}/settings`)}
            >
              <Settings className="mr-3 h-5 w-5" />
              الإعدادات
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-base font-normal py-3 px-4 text-red-500 hover:text-red-600 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut className="mr-3 h-5 w-5" />
              تسجيل الخروج
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white border-b p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">لوحة التحكم</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <User className="h-5 w-5" />
              </div>
              <span className="mr-2 text-sm font-medium">{username}</span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
