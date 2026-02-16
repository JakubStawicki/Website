import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Route, Routes } from "react-router";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Booking } from "@/pages/Booking";
import { FAQ } from "@/pages/FAQ";
import { Home } from "@/pages/Home";
import { Services } from "@/pages/Services";
import { Testimonials } from "@/pages/Testimonials";

export function App() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/testimonials" element={<Testimonials />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/booking" element={<Booking />} />
				</Routes>
			</main>
			<Footer />
			<Analytics />
			<SpeedInsights />
		</div>
	);
}
