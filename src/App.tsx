import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import FarmingProcess from "./pages/FarmingProcess";
import Products from "./pages/Products";
import Recipes from "./pages/Recipes";
import RecipeMandi from "./pages/RecipeMandi";
import RecipeBiryani from "./pages/RecipeBiryani";
import RecipePilau from "./pages/RecipePilau";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/farming-process" element={<FarmingProcess />} />
              <Route path="/products" element={<Products />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipes/arabian-chicken-mandi" element={<RecipeMandi />} />
              <Route path="/recipes/chicken-biryani" element={<RecipeBiryani />} />
              <Route path="/recipes/beef-pilau" element={<RecipePilau />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
