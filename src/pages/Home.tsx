import { Clock, GraduationCap, TrendingUp, Trophy, Users } from "lucide-react";
import { Link } from "react-router";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

export function Home() {
	return (
		<>
			{/* Hero */}
			<Hero />

			{/* Why KubaTutors */}
			<section className="border-t border-border">
				<div className="max-w-6xl mx-auto px-6 py-20">
					<div className="max-w-4xl mx-auto text-center space-y-8">
						<h2 className="text-4xl md:text-5xl font-bold text-foreground">Why KubaTutors?</h2>

						<div className="grid md:grid-cols-2 gap-6 mt-12">
							{valueProps.map((item) => (
								<Card
									key={item.text}
									className="border-border bg-card hover:border-foreground/20 transition-all"
								>
									<CardContent className="p-8 flex flex-col items-center text-center gap-4">
										<item.icon className="size-10 text-foreground" />
										<p className="text-xl text-muted-foreground">{item.text}</p>
									</CardContent>
								</Card>
							))}
						</div>

						<div className="mt-16 border-2 border-foreground/20 rounded-2xl p-8 bg-card">
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
						</div>

						<div className="mt-8">
							<Button asChild size="lg" className="text-lg px-8 py-6">
								<Link to="/booking">Book Now</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* My Experience */}
			<section className="border-t border-border">
				<div className="max-w-6xl mx-auto px-6 py-20">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center">
							My experience
						</h2>
						<p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
							A proven vehicle for your success
						</p>

						<div className="grid md:grid-cols-3 gap-8 mb-12">
							{credentials.map((item) => (
								<Card
									key={item.title}
									className="border-border bg-card hover:border-foreground/20 transition-all"
								>
									<CardContent className="p-6">
										<div className="text-foreground text-4xl font-bold mb-2">{item.stat}</div>
										<h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
										<p className="text-muted-foreground">{item.description}</p>
									</CardContent>
								</Card>
							))}
						</div>

						<div className="border border-foreground/20 rounded-2xl p-8 text-center bg-card">
							<p className="text-xl md:text-2xl text-foreground font-semibold mb-4">
								"I know the stress of the grind. I've refined a method to eliminate the guesswork."
							</p>
							<p className="text-lg text-muted-foreground">
								I'm not just a tutor; I'm a diagnostic specialist who identifies hidden gaps and
								saves your time. I've decoded the mark schemes, mastered examiner tricks, and
								identified patterns where students leak marks. My students don't just study -- they
								perform under pressure and secure top-tier grades.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
