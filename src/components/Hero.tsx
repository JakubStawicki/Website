import { Link } from "react-router";
import ShinyText from "@/components/ShinyText";
import SpotlightCard from "@/components/SpotlightCard";
import Threads from "@/components/Threads";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
			{/* Threads Background */}
			<div className="absolute inset-0 z-0">
				<Threads amplitude={1} distance={0} enableMouseInteraction />
			</div>

			{/* Content Overlay */}
			<div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
				<div className="space-y-8">
					<div className="space-y-3">
						<Badge variant="outline" className="text-sm px-4 py-1.5">
							Jakub Stawicki
						</Badge>
						<p className="text-muted-foreground text-lg">Imperial College London Engineering</p>
					</div>

					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
						<ShinyText
							text="Stop Losing Easy Marks."
							speed={2}
							delay={0}
							color="#b5b5b5"
							shineColor="#ffffff"
							spread={120}
							direction="left"
							yoyo={false}
							pauseOnHover={false}
							disabled={false}
						/>
						<br />
						<span className="text-muted-foreground">Master the Mark Scheme </span>
						<ShinyText
							text="in Weeks, Not Months."
							speed={3}
							delay={1}
							color="#b5b5b5"
							shineColor="#ffffff"
							spread={120}
							direction="left"
							yoyo={false}
							pauseOnHover={false}
							disabled={false}
						/>
					</h1>

					<p className="text-xl text-muted-foreground">
						Former A-Level graduate showing you exactly what examiners want. No fluff. Just exam
						technique that gets results.
					</p>

					<Button asChild size="lg" className="text-lg px-8 py-6">
						<Link to="/booking">Book My Free 15-Min Strategy Call</Link>
					</Button>
				</div>

				{/* Hero Image with SpotlightCard */}
				<div className="relative">
					<SpotlightCard className="p-0 overflow-hidden" spotlightColor="rgba(255, 255, 255, 0.25)">
						<div className="aspect-[3/4] overflow-hidden rounded-2xl">
							<img
								src="/photo.jpg"
								alt="Jakub Stawicki - A-Level Exam Strategist"
								className="w-full h-full object-cover"
								loading="eager"
							/>
						</div>
					</SpotlightCard>
					<div className="absolute -bottom-4 -right-4 bg-foreground text-background p-5 rounded-xl shadow-xl">
						<p className="text-3xl font-bold">4A*</p>
						<p className="text-sm opacity-80">A-Level Grades</p>
					</div>
				</div>
			</div>
		</section>
	);
}
