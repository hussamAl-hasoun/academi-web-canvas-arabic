
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">الإعدادات</h1>
        
        <div className="grid gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">الحساب الشخصي</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">البريد الإلكتروني</label>
                <input type="email" className="w-full p-2 border rounded" value="student@example.com" readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">الرقم الجامعي</label>
                <input type="text" className="w-full p-2 border rounded" value="441000123" readOnly />
              </div>
              <Button>تغيير كلمة المرور</Button>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">الإشعارات</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">إشعارات الواجبات</p>
                  <p className="text-sm text-gray-500">استلام تنبيهات عند نشر واجب جديد</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">إشعارات الرسائل</p>
                  <p className="text-sm text-gray-500">استلام تنبيهات عند وصول رسالة جديدة</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;

