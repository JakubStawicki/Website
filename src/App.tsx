import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Route, Routes } from "react-router";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import Noise from "@/components/Noise";
import { Booking } from "@/pages/Booking";
import { Home } from "@/pages/Home";
import { Services } from "@/pages/Services";
import { Testimonials } from "@/pages/Testimonials";

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Noise
        patternSize={500}
        patternScaleX={5}
        patternScaleY={5}
        patternRefreshInterval={2}
        patternAlpha={20}
      />
      <div className="relative z-10">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
