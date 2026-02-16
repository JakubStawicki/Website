import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";

interface Testimonial {
	name: string;
	role: string;
	content: string;
	rating: number;
}

const testimonials: Testimonial[] = [
	{
		name: "Emily Chen",
		role: "A-Level Student",
		content:
			"Jakub's teaching style is exceptional. He helped me improve my Maths grade from a B to an A* in just 6 months. Highly recommend!",
		rating: 5,
	},
	{
		name: "Marcus Thompson",
		role: "GCSE Student",
		content:
			"I struggled with Physics for years, but Jakub made complex concepts so easy to understand. Got an A in my GCSEs!",
		rating: 5,
	},
	{
		name: "Sophie Williams",
		role: "A-Level Student",
		content:
			"The best tutor I've ever had. Jakub's patience and clear explanations helped me ace Further Maths. Can't thank him enough!",
		rating: 5,
	},
	{
		name: "James Rodriguez",
		role: "Parent",
		content:
			"My daughter's confidence in Maths has skyrocketed since working with Jakub. He's professional, punctual, and gets results.",
		rating: 5,
	},
	{
		name: "Aisha Patel",
		role: "A-Level Student",
		content:
			"Jakub helped me understand Physics in a way that no teacher ever could. His real-world examples made everything click.",
		rating: 5,
	},
	{
		name: "Oliver Brown",
		role: "GCSE Student",
		content:
			"I went from failing Maths to getting an 8! Jakub is patient, knowledgeable, and really cares about his students.",
		rating: 5,
	},
	{
		name: "Isabella Martinez",
		role: "A-Level Student",
		content:
			"Excellent tutor! Jakub's structured approach to Further Maths helped me tackle even the hardest problems with confidence.",
		rating: 5,
	},
	{
		name: "Noah Davies",
		role: "Parent",
		content:
			"Our son improved dramatically under Jakub's guidance. He's now considering studying Physics at university!",
		rating: 5,
	},
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
	return (
		<Card className="w-[350px] shrink-0">
			<CardContent className="p-6">
				<div className="flex gap-1 mb-4">
					{Array.from({ length: testimonial.rating }).map((_, i) => (
						<Star key={`star-${testimonial.name}-${i}`} className="w-4 h-4 fill-black text-black" />
					))}
				</div>
				<p className="text-sm text-foreground/90 mb-4 leading-relaxed">"{testimonial.content}"</p>
				<div className="border-t border-border pt-4">
					<p className="font-semibold text-sm">{testimonial.name}</p>
					<p className="text-xs text-muted-foreground">{testimonial.role}</p>
				</div>
			</CardContent>
		</Card>
	);
}

export function TestimonialMarquee() {
	const firstRow = testimonials.slice(0, 4);
	const secondRow = testimonials.slice(4, 8);

	return (
		<div className="relative flex flex-col gap-4 w-full overflow-hidden">
			<Marquee pauseOnHover className="[--duration:40s]">
				{firstRow.map((testimonial) => (
					<TestimonialCard key={testimonial.name} testimonial={testimonial} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:40s]">
				{secondRow.map((testimonial) => (
					<TestimonialCard key={testimonial.name} testimonial={testimonial} />
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />
		</div>
	);
}
