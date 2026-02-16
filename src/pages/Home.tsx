import { Clock, GraduationCap, TrendingUp, Trophy, Users } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Hero } from "@/components/Hero";
import { TestimonialMarquee } from "@/components/TestimonialMarquee";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

// circInOut easing for consistent animations
const circInOut = [0.785, 0.135, 0.15, 0.86] as const;

// Animation variants
const fadeInUp = {
	initial: { opacity: 0, y: 30 },
	whileInView: { opacity: 1, y: 0 },
};

const fadeIn = {
	initial: { opacity: 0 },
	whileInView: { opacity: 1 },
};

const staggerContainer = {
	initial: {},
	whileInView: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const valueProps = [
	{
		icon: Users,
		text: "One to One tuition only",
	},
	{
		icon: TrendingUp,
		text: "Increase confidence",
	},
	{
		icon: Trophy,
		text: "Guaranteed success",
	},
	{
		icon: Clock,
		text: "Save loads of time",
	},
];

const credentials = [
	{
		icon: GraduationCap,
		stat: "Imperial",
		title: "Imperial College London",
		description: "Engineering Student -- Mastered the system you're fighting",
	},
	{
		icon: TrendingUp,
		stat: "100%",
		title: "UCAS & Grade Rescue Success",
		description: "Secured dream university places. Students jump 2+ grades in weeks, not months.",
	},
	{
		icon: Trophy,
		stat: "A*",
		title: "A-Level/GCSE Mastery",
		description: "Further Maths, Maths, Physics. I know how to secure A*s",
	},
];

const faqItems = [
	{
		question: "Is online tutoring actually effective?",
		answer:
			"Yes. Large-scale surveys show that 84% of students find online tutoring as effective or more effective than in-person tuition. The key advantage is access: you are not limited to local tutors and can work with specialists who understand your exact exam board and marking criteria.",
	},
	{
		question: "Do you offer group sessions?",
		answer:
			"No. All tuition is strictly 1-to-1. This allows for a detailed diagnostic assessment to identify the small number of weaknesses responsible for the majority of lost marks -- something that is not possible in a group setting.",
	},
	{
		question: "Is it too late to start?",
		answer:
			'No. Short-term Exam Rescue is a core focus. Many students begin tuition in the final 1-8 weeks before exams. In these cases, the focus is not relearning content from scratch, but mastering mark schemes, predicted paper techniques, and eliminating recurring "mark leaks" to gain rapid grade improvements.',
	},
	{
		question: "What are your prices?",
		answer:
			"I believe in full transparency before any call. A-Level: £40 per hour. GCSE: £30 per hour. These rates reflect a short-term, results-driven approach, not ongoing general support.",
	},
	{
		question: "Does it matter if I take Statistics, Mechanics, or Decision Maths?",
		answer:
			"No. I cover A-Level Mathematics and Further Mathematics across all major exam boards, including Edexcel, AQA, and OCR. Support is available for core pure content and all applied modules, with targeted drilling and past-paper strategies.",
	},
	{
		question: "How often are tuition sessions?",
		answer:
			"There is no fixed structure. After a free 15-minute strategy call, you receive a diagnostic overview and a clear recommendation. Some students need a single intensive 2-hour exam technique session, while others benefit from a short weekly grade-rescue plan.",
	},
	{
		question: "What is expected of the student?",
		answer:
			"Progress depends on the work done between sessions. You are expected to complete targeted homework, focus on weak areas, and bring questions and working to each session. This is a performance-focused environment designed to eliminate mistakes before exam day.",
	},
	{
		question: "Which exam boards do you cover?",
		answer:
			"I cover all major UK exam boards for A-Level Mathematics and Further Mathematics, including Edexcel, AQA, and OCR. This includes full familiarity with each board's specification, question styles, and marking schemes, allowing tuition to be precisely tailored to how your papers are assessed.",
	},
];

export function Home() {
	return (
		<>
			{/* Hero */}
			<Hero />

			{/* Why KubaTutors */}
			<section className="border-t border-border">
				<div className="max-w-6xl mx-auto px-6 py-20">
					<div className="max-w-4xl mx-auto text-center space-y-8">
						<motion.h2
							className="text-4xl md:text-5xl font-bold text-foreground"
							{...fadeInUp}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5, ease: circInOut }}
						>
							Why KubaTutors?
						</motion.h2>

						<motion.div
							className="grid md:grid-cols-2 gap-6 mt-12"
							{...staggerContainer}
							viewport={{ once: true, margin: "-100px" }}
						>
							{valueProps.map((item) => (
								<motion.div key={item.text} {...fadeInUp} transition={{ duration: 0.5, ease: circInOut }}>
									<Card className="border-border bg-card hover:border-foreground/20 transition-all">
										<CardContent className="p-8 flex flex-col items-center text-center gap-4">
											<item.icon className="size-10 text-foreground" />
											<p className="text-xl text-muted-foreground">{item.text}</p>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</motion.div>

						<motion.div
							className="mt-16 border-2 border-foreground/20 rounded-2xl p-8 bg-card"
							{...fadeInUp}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5, delay: 0.2, ease: circInOut }}
						>
							<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
								Here's the Truth:
							</h3>
							<p className="text-xl md:text-2xl text-foreground font-semibold">
								We prioritize Mark-Scheme Mastery. No generic lectures.
							</p>
							<p className="text-lg text-muted-foreground mt-4">
								If you're ready to plug gaps and master exam technique fast, this is for you.
								However, if you're missing foundational concepts, we drill it immediately. I bridge
								your knowledge gaps in minutes, so we can get back to the only thing that matters:
								securing your marks.
							</p>
						</motion.div>

						<motion.div
							className="mt-8"
							{...fadeInUp}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5, delay: 0.3, ease: circInOut }}
						>
							<Button asChild size="lg" className="text-lg px-8 py-6">
								<Link to="/booking">Book Now</Link>
							</Button>
						</motion.div>
					</div>
				</div>
			</section>

			{/* My Experience */}
			<section className="border-t border-border">
				<div className="max-w-6xl mx-auto px-6 py-20">
					<div className="max-w-4xl mx-auto">
						<motion.h2
							className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center"
							{...fadeInUp}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5, ease: circInOut }}
						>
							My experience
						</motion.h2>
						<motion.p
							className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12"
							{...fadeInUp}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5, delay: 0.1, ease: circInOut }}
						>
							A proven vehicle for your success
						</motion.p>

						<motion.div
							className="grid md:grid-cols-3 gap-8 mb-12"
							{...staggerContainer}
							viewport={{ once: true, margin: "-100px" }}
						>
							{credentials.map((item) => (
								<motion.div key={item.title} {...fadeInUp} transition={{ duration: 0.5, ease: circInOut }}>
									<Card className="border-border bg-card hover:border-foreground/20 transition-all">
										<CardContent className="p-6">
											<div className="text-foreground text-4xl font-bold mb-2">{item.stat}</div>
											<h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
											<p className="text-muted-foreground">{item.description}</p>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</motion.div>

						<motion.div
							className="border border-foreground/20 rounded-2xl p-8 text-center bg-card"
							{...fadeIn}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5, delay: 0.2, ease: circInOut }}
						>
							<p className="text-xl md:text-2xl text-foreground font-semibold mb-4">
								"I know the stress of the grind. I've refined a method to eliminate the guesswork."
							</p>
							<p className="text-lg text-muted-foreground">
								I'm not just a tutor; I'm a diagnostic specialist who identifies hidden gaps and
								saves your time. I've decoded the mark schemes, mastered examiner tricks, and
								identified patterns where students leak marks. My students don't just study -- they
								perform under pressure and secure top-tier grades.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="border-t border-border bg-muted/30">
				<div className="max-w-7xl mx-auto px-6 py-20">
					<div className="text-center mb-12">
						<motion.h2
							className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
							{...fadeInUp}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5, ease: circInOut }}
						>
							What Students Say
						</motion.h2>
						<motion.p
							className="text-xl text-muted-foreground max-w-2xl mx-auto"
							{...fadeInUp}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5, delay: 0.1, ease: circInOut }}
						>
							Don't just take my word for it — hear from students who've achieved their goals
						</motion.p>
					</div>
					<motion.div
						{...fadeInUp}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.2, ease: circInOut }}
					>
						<TestimonialMarquee />
					</motion.div>
				</div>
			</section>

			{/* FAQ */}
			<section className="border-t border-border">
				<div className="max-w-6xl mx-auto px-6 py-20">
					<motion.h2
						className="text-4xl md:text-5xl font-bold text-foreground text-center"
						{...fadeInUp}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, ease: circInOut }}
					>
						Frequently Asked Questions
					</motion.h2>
					<motion.p
						className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12 mt-6"
						{...fadeInUp}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.1, ease: circInOut }}
					>
						Everything you need to know
					</motion.p>

					<motion.div
						className="max-w-3xl mx-auto"
						{...staggerContainer}
						viewport={{ once: true, margin: "-100px" }}
					>
						<Accordion type="single" collapsible className="space-y-4">
							{faqItems.map((item, index) => (
								<motion.div
									key={item.question}
									{...fadeInUp}
									transition={{ duration: 0.5, ease: circInOut }}
								>
									<AccordionItem
										value={`item-${index}`}
										className="border border-border rounded-xl px-6 bg-card"
									>
										<AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-6">
											{item.question}
										</AccordionTrigger>
										<AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
											{item.answer}
										</AccordionContent>
									</AccordionItem>
								</motion.div>
							))}
						</Accordion>
					</motion.div>

					<motion.div
						className="mt-16 text-center"
						{...fadeInUp}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.2, ease: circInOut }}
					>
						<p className="text-muted-foreground mb-4">Still have questions?</p>
						<Button asChild size="lg" className="text-lg px-8 py-6">
							<Link to="/booking">Book a Free Call</Link>
						</Button>
					</motion.div>
				</div>
			</section>
		</>
	);
}
