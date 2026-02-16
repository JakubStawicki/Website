import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
	name: string;
	initial: string;
	subject: string;
	text: string;
}

const testimonials: Testimonial[] = [
	{
		name: "Sophie",
		initial: "S",
		subject: "A-Level Maths",
		text: "Jakub is literally a life saver. I was stuck on a C for ages and panicking about my uni offer because the exams were only weeks away. We did the exam technique crash session and it just clicked. I finally learnt the mark scheme language my teachers never mentioned. Ended up with an A and heading to uni in september.",
	},
	{
		name: "Jack",
		initial: "J",
		subject: "A-Level Maths, Physics",
		text: "We went straight into real past paper questions and Jakub identified my mark leaks in 20 minutes. I followed the plan and although its intense, I cant get the drilled questions wrong anymore.",
	},
	{
		name: "Parent",
		initial: "P",
		subject: "A-Level Further Maths",
		text: "My daughter was working so hard but her mock results were still a surprised, and not in a good way. Jakub was so authentic and honest since the first call. He showed her exactly where she was losing marks. A great relief for us.",
	},
	{
		name: "Dylan",
		initial: "D",
		subject: "GCSE Maths, Physics",
		text: "I was convinced by the free audit. I loved how we didn't do any teaching from scratch but just got right into it because i needed to fix my grades fast.",
	},
	{
		name: "Adrian",
		initial: "A",
		subject: "GCSE Maths",
		text: "Jakub showed me exactly how the mark scheme was catching me out and explained everything very well. He helped me get a 9 in GCSE maths.",
	},
];

export function TestimonialCarousel() {
	const [current, setCurrent] = useState(0);

	function prev() {
		setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
	}

	function next() {
		setCurrent((c) => (c + 1) % testimonials.length);
	}

	const t = testimonials[current];

	return (
		<div className="max-w-4xl mx-auto">
			<Card className="border-border bg-card transition-all duration-500">
				<CardContent className="p-8">
					<div className="flex items-center gap-4 mb-6">
						<div className="bg-foreground text-background rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
							{t.initial}
						</div>
						<div>
							<h4 className="text-xl font-semibold text-foreground">{t.name}</h4>
							<p className="text-muted-foreground text-sm">{t.subject}</p>
						</div>
					</div>
					<div className="flex gap-1 mb-4">
						{Array.from({ length: 5 }).map((_, i) => (
							<Star
								key={`star-${t.name}-${i}`}
								className="size-5 fill-foreground text-foreground"
							/>
						))}
					</div>
					<p className="text-muted-foreground text-lg italic leading-relaxed">{t.text}</p>
				</CardContent>
			</Card>

			{/* Navigation */}
			<div className="flex justify-center gap-4 mt-8">
				<Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
					<ChevronLeft className="size-5" />
				</Button>
				<Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
					<ChevronRight className="size-5" />
				</Button>
			</div>

			{/* Dots */}
			<div className="flex justify-center gap-2 mt-6">
				{testimonials.map((item, i) => (
					<button
						type="button"
						key={item.name}
						onClick={() => setCurrent(i)}
						className={`w-3 h-3 rounded-full transition-colors ${
							i === current ? "bg-foreground" : "bg-muted"
						}`}
						aria-label={`Go to testimonial ${i + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
