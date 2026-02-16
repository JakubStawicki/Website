import { Link } from "react-router";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Button } from "@/components/ui/button";

export function Testimonials() {
	return (
		<section className="pt-28 pb-20">
			<div className="max-w-6xl mx-auto px-6">
				<h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">
					What Students Say
				</h1>
				<p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12 mt-6">
					Real results from real students
				</p>

				<TestimonialCarousel />

				<div className="mt-16 text-center">
					<Button asChild size="lg" className="text-lg px-8 py-6">
						<Link to="/booking">Join Them Today</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
