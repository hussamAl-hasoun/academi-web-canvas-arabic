
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const mockMessages = [
  {
    id: 1,
    sender: "د. محمد أحمد",
    course: "الحوسبة السحابية",
    subject: "موعد تسليم الواجب",
    date: "24 أبريل 2025",
    isRead: false
  },
  {
    id: 2,
    sender: "د. أحمد خالد",
    course: "أساسيات تقنية المعلومات",
    subject: "تغيير موعد المحاضرة",
    date: "23 أبريل 2025",
    isRead: true
  }
];

const MessagesPage = () => {
  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">الرسائل</h1>
        
        <div className="space-y-4">
          {mockMessages.map((message) => (
            <Card key={message.id} className={`p-4 ${message.isRead ? 'bg-white' : 'bg-blue-50'}`}>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{message.sender}</h3>
                      <p className="text-sm text-gray-500">{message.course}</p>
                    </div>
                    <span className="text-sm text-gray-500">{message.date}</span>
                  </div>
                  <p className="mt-2">{message.subject}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MessagesPage;

