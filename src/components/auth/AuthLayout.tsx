
import React from "react";
import { Card } from "@/components/ui/card";

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-gradient-to-br from-academi-700 to-academi-500 p-8 flex flex-col justify-center">
        <div className="max-w-md mx-auto animate-fade-in">
          <h1 className="text-4xl font-bold text-white mb-6">أكاديمي</h1>
          <p className="text-xl text-white/90">
            منصة تعليمية متكاملة للطلاب والأساتذة
          </p>
          <div className="mt-12">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format&fit=crop"
              alt="Learning Platform"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <Card className="w-full max-w-md p-8 animate-slide-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-gray-500">{description}</p>
          </div>
          {children}
        </Card>
      </div>
    </div>
  );
};

export default AuthLayout;
