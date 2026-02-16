import { Check, Target, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// circInOut easing for consistent animations
const circInOut = [0.785, 0.135, 0.15, 0.86] as const;

// Animation variants
const fadeInUp = {
	initial: { opacity: 0, y: 30 },
	whileInView: { opacity: 1, y: 0 },
};

const staggerContainer = {
	initial: {},
	whileInView: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const services = [
	{
		icon: Zap,
		title: "Exam Technique Crash Sessions",
		description:
			"We identify the 20% of errors causing 80% of your lost marks. This is not a lecture.",
		features: ["Mark scheme analysis", "Common mistake patterns", "Time management strategies"],
	},
	{
		icon: Target,
		title: "Predicted Paper Walkthroughs",
		description:
			"Master the patterns examiners love to test. I've analysed every past paper possible.",
		features: ["High-probability topics", "Question type breakdown", "Examiner tricks exposed"],
	},
	{
		icon: TrendingUp,
		title: "Grade Boundary Rescue",
		description:
			"Targeted support for students stuck at a specific grade. Get the precise help you need to push over the boundary.",
		features: ["Grade-specific strategies", "Weakness elimination", "Precision mark hunting"],
	},
];

const steps = [
	{
		number: 1,
		title: "The Free Exam Strategy Audit + Roadmap",
		description:
			"Stop guessing why your grades are stalling. In our free 15-minute audit, we identify the specific mark leaks. You get a tailored roadmap to your target grade -- completely free.",
	},
	{
		number: 2,
		title: "Implement the Cutting Edge Strategy",
		description:
			"Access the A* blueprint. We dont just teach content like other tutors. Learn the secret weapon used by top 1% students.",
	},
	{
		number: 3,
		title: "Performance Optimization & Certainty",
		description:
			"Walk into the exam hall with 100% certainty. We eliminate exam day panic through high execution.",
	},
];

export function Services() {
	return (
		<>
			{/* Services */}
			<section className="pt-28 pb-20 border-b border-border">
				<div className="max-w-6xl mx-auto px-6">
					<motion.h1
						className="text-4xl md:text-5xl font-bold text-foreground text-center"
						{...fadeInUp}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, ease: circInOut }}
					>
						How I Can Help You
					</motion.h1>
					<motion.p
						className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12 mt-6"
						{...fadeInUp}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.1, ease: circInOut }}
					>
						Outcome-based packages designed for results
					</motion.p>

					<motion.div
						className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
						{...staggerContainer}
						viewport={{ once: true, margin: "-100px" }}
					>
						{services.map((service) => (
							<motion.div key={service.title} {...fadeInUp} transition={{ duration: 0.5, ease: circInOut }}>
								<Card className="border-border bg-card hover:border-foreground/20 transition-all hover:-translate-y-1">
									<CardContent className="p-8">
										<service.icon className="size-8 text-foreground mb-4" />
										<h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
										<p className="text-muted-foreground mb-6">{service.description}</p>
										<ul className="space-y-3">
											{service.features.map((feature) => (
												<li key={feature} className="flex items-start gap-3 text-muted-foreground">
													<Check className="size-4 mt-1 text-foreground shrink-0" />
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>

					<motion.div
						className="mt-12 text-center"
						{...fadeInUp}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.2, ease: circInOut }}
					>
						<p className="text-lg text-muted-foreground mb-2">Subjects Covered:</p>
						<p className="text-xl text-foreground">
							<span className="font-semibold">A-Level & GCSE:</span> Further Maths, Maths, Physics
						</p>
						<p className="text-muted-foreground mt-4">Online & In-person sessions available</p>
					</motion.div>
				</div>
			</section>

			{/* How It Works */}
			<section className="py-20">
				<div className="max-w-6xl mx-auto px-6">
					<motion.h2
						className="text-4xl md:text-5xl font-bold text-foreground text-center"
						{...fadeInUp}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, ease: circInOut }}
					>
						How It Works
					</motion.h2>
					<motion.p
						className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12 mt-6"
						{...fadeInUp}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.1, ease: circInOut }}
					>
						My proven three-step system to exam success
					</motion.p>

					<motion.div
						className="max-w-4xl mx-auto space-y-8"
						{...staggerContainer}
						viewport={{ once: true, margin: "-100px" }}
					>
						{steps.map((step) => (
							<motion.div key={step.number} {...fadeInUp} transition={{ duration: 0.5, ease: circInOut }}>
								<Card className="border-border bg-card border-l-4 border-l-foreground">
									<CardContent className="p-8">
										<div className="flex items-start gap-6">
											<div className="bg-foreground text-background rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0">
												{step.number}
											</div>
											<div>
												<h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
												<p className="text-muted-foreground text-lg">{step.description}</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>

					<motion.div
						className="mt-12 text-center"
						{...fadeInUp}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.2, ease: circInOut }}
					>
						<Button asChild size="lg" className="text-lg px-8 py-6">
							<Link to="/booking">Get Started Today</Link>
						</Button>
					</motion.div>
				</div>
			</section>
		</>
	);
}
