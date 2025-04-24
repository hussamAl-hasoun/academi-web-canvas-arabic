
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StudentDashboard from "./pages/StudentDashboard";
import ProfessorDashboard from "./pages/ProfessorDashboard";
import NotFound from "./pages/NotFound";
import CoursesPage from "./pages/student/CoursesPage";
import SchedulePage from "./pages/student/SchedulePage";
import MessagesPage from "./pages/student/MessagesPage";
import SettingsPage from "./pages/student/SettingsPage";

// Fixed: Directly import components without wrapping in TooltipProvider
// The TooltipProvider will be used within components that need tooltips
import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      {/* Move Toasters inside BrowserRouter */}
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        
        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/courses" element={<CoursesPage />} />
        <Route path="/student/schedule" element={<SchedulePage />} />
        <Route path="/student/messages" element={<MessagesPage />} />
        <Route path="/student/settings" element={<SettingsPage />} />
        
        {/* Professor Routes */}
        <Route path="/professor/dashboard" element={<ProfessorDashboard />} />
        
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
