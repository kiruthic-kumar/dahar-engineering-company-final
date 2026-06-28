import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Infrastructure from "@/pages/Infrastructure";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";
import ThreadedSolutions from "@/pages/products/ThreadedSolutions";
import SpmAutomations from "@/pages/products/SpmAutomations";
import TinyParts from "@/pages/products/TinyParts";
import CustomGauges from "@/pages/products/CustomGauges";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-[72px]">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/infrastructure" component={Infrastructure} />
          <Route path="/products" component={Products} />
          <Route path="/products/threaded-solutions" component={ThreadedSolutions} />
          <Route path="/products/spm-automations" component={SpmAutomations} />
          <Route path="/products/tiny-parts" component={TinyParts} />
          <Route path="/products/custom-gauges" component={CustomGauges} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
