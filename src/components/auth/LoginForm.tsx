
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type LoginFormProps = {
  userType: "student" | "professor";
};

const LoginForm: React.FC<LoginFormProps> = ({ userType }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate login API call
    setTimeout(() => {
      setLoading(false);
      
      // For demonstration, we'll use simple validation
      if (formData.username && formData.password) {
        // Store user type and username in localStorage
        localStorage.setItem("userType", userType);
        localStorage.setItem("username", formData.username);
        
        toast.success(`تم تسجيل الدخول بنجاح`);
        
        // Redirect based on user type
        if (userType === "student") {
          navigate("/student/dashboard");
        } else {
          navigate("/professor/dashboard");
        }
      } else {
        toast.error("يرجى إدخال اسم المستخدم وكلمة المرور");
      }
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="username">اسم المستخدم</Label>
        <Input
          id="username"
          name="username"
          placeholder="أدخل اسم المستخدم"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">كلمة المرور</Label>
          <a href="#" className="text-sm text-primary hover:underline">
            نسيت كلمة المرور؟
          </a>
        </div>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="أدخل كلمة المرور"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
      </Button>
    </form>
  );
};

export default LoginForm;
