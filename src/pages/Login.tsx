
import React, { useState } from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login = () => {
  const [activeTab, setActiveTab] = useState<"student" | "professor">("student");

  return (
    <AuthLayout
      title="مرحباً بك في منصة أكاديمي"
      description="يرجى تسجيل الدخول للاستمرار"
    >
      <Tabs
        defaultValue="student"
        className="w-full"
        onValueChange={(value) => setActiveTab(value as "student" | "professor")}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="student">طالب</TabsTrigger>
          <TabsTrigger value="professor">أستاذ</TabsTrigger>
        </TabsList>
        <TabsContent value="student">
          <LoginForm userType="student" />
        </TabsContent>
        <TabsContent value="professor">
          <LoginForm userType="professor" />
        </TabsContent>
      </Tabs>
    </AuthLayout>
  );
};

export default Login;
