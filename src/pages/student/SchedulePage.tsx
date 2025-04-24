
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const mockSchedule = [
  {
    day: "الأحد",
    courses: [
      { time: "08:00 - 09:30", course: "CLD 101 - الحوسبة السحابية", location: "مبنى A - قاعة 101" },
      { time: "10:00 - 11:30", course: "IT 101 - أساسيات تقنية المعلومات", location: "مبنى B - معمل 203" },
    ]
  },
  {
    day: "الثلاثاء",
    courses: [
      { time: "09:00 - 10:30", course: "OS 301 - نظم تشغيل", location: "مبنى C - قاعة 305" },
      { time: "13:00 - 14:30", course: "NET 401 - شبكات الحاسب", location: "مبنى B - معمل 201" },
    ]
  }
];

const SchedulePage = () => {
  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">الجدول الدراسي</h1>
        
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>اليوم</TableHead>
                <TableHead>الوقت</TableHead>
                <TableHead>المقرر</TableHead>
                <TableHead>القاعة</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSchedule.map((day) => (
                day.courses.map((course, idx) => (
                  <TableRow key={`${day.day}-${idx}`}>
                    {idx === 0 && (
                      <TableCell rowSpan={day.courses.length}>{day.day}</TableCell>
                    )}
                    <TableCell>{course.time}</TableCell>
                    <TableCell>{course.course}</TableCell>
                    <TableCell>{course.location}</TableCell>
                  </TableRow>
                ))
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SchedulePage;

