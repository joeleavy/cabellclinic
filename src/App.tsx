import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Approach from "./pages/Approach";
import About from "./pages/About";
import Resources from "./pages/Resources";
import ExpertsAtLarge from "./pages/ExpertsAtLarge";
import OurTeam from "./pages/OurTeam";
import FAQ from "./pages/FAQ";
import Apply from "./pages/Apply";
import Contact from "./pages/Contact";
import Nuropod from "./pages/Nuropod";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Partners from "./pages/Partners";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import CookieNotice from "./components/CookieNotice";
import PageMeta from "./components/PageMeta";

const queryClient = new QueryClient();

/**
 * Everything except the router. The browser wraps this in <BrowserRouter>
 * (src/main.tsx); the build-time prerender wraps it in <StaticRouter>
 * (src/entry-server.tsx) to produce real HTML for every page.
 */
export const AppShell = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <PageMeta />
      <CookieNotice />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/dr-cabell" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/experts" element={<ExpertsAtLarge />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        {/* Unlisted — shared by direct link only; not in any nav */}
        <Route path="/nuropod" element={<Nuropod />} />

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => (
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
);

export default App;
