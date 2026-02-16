import { Link } from "react-router";
import { motion } from "motion/react";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Button } from "@/components/ui/button";

// circInOut easing for consistent animations
const circInOut = [0.785, 0.135, 0.15, 0.86] as const;

// Animation variants
const fadeInUp = {
	initial: { opacity: 0, y: 30 },
	whileInView: { opacity: 1, y: 0 },
};

const scaleIn = {
	initial: { opacity: 0, scale: 0.95 },
	whileInView: { opacity: 1, scale: 1 },
};

export function Testimonials() {
	return (
		<section className="pt-28 pb-20">
			<div className="max-w-6xl mx-auto px-6">
				<motion.h1
					className="text-4xl md:text-5xl font-bold text-foreground text-center"
					{...fadeInUp}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5, ease: circInOut }}
				>
					What Students Say
				</motion.h1>
				<motion.p
					className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12 mt-6"
					{...fadeInUp}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5, delay: 0.1, ease: circInOut }}
				>
					Real results from real students
				</motion.p>

				<motion.div
					{...scaleIn}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, delay: 0.2, ease: circInOut }}
				>
					<TestimonialCarousel />
				</motion.div>

				<motion.div
					className="mt-16 text-center"
					{...fadeInUp}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5, delay: 0.3, ease: circInOut }}
				>
					<Button asChild size="lg" className="text-lg px-8 py-6">
						<Link to="/booking">Join Them Today</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
