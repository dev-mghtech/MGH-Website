import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./translations/LanguageContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route 
              path="/blog" 
              element={
                <ProtectedRoute featureFlag="blog">
                  <Blog />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/blog/:slug" 
              element={
                <ProtectedRoute featureFlag="blog">
                  <BlogPost />
                </ProtectedRoute>
              } 
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/fr" element={<Index />} />
            <Route 
              path="/fr/blog" 
              element={
                <ProtectedRoute featureFlag="blog">
                  <Blog />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/fr/blog/:slug" 
              element={
                <ProtectedRoute featureFlag="blog">
                  <BlogPost />
                </ProtectedRoute>
              } 
            />
            <Route path="/fr/about" element={<AboutUs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
