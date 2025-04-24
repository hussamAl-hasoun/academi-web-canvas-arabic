
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const userType = localStorage.getItem("userType");
    if (userType === "student") {
      navigate("/student/dashboard");
    } else if (userType === "professor") {
      navigate("/professor/dashboard");
    }
  }, [navigate]);

  return <Login />;
};

export default Index;
