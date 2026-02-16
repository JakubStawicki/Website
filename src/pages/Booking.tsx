import { AlertTriangle } from "lucide-react";
import { CalEmbed } from "@/components/CalEmbed";
import { Button } from "@/components/ui/button";

export function Booking() {
	return (
		<section className="pt-28 pb-20">
			<div className="max-w-6xl mx-auto px-6">
				<div className="max-w-4xl mx-auto text-center space-y-8">
					{/* Urgency CTA */}
					<div className="border-2 border-foreground/20 rounded-2xl p-8 bg-card">
						<AlertTriangle className="size-10 text-foreground mx-auto mb-4" />
						<h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
							Only 3 Slots Remaining for the May/June Exam Push
						</h1>
						<p className="text-xl text-muted-foreground mb-8">
							Don't wait until it's too late. Secure your spot and start reclaiming those lost marks
							today.
						</p>
						<Button
							size="lg"
							className="text-lg px-8 py-6"
							onClick={() => {
								document
									.getElementById("cal-embed")
									?.scrollIntoView({ behavior: "smooth", block: "start" });
							}}
						>
							Book My Free 15-Min Strategy Call
						</Button>
					</div>

					{/* Cal.com Embed */}
					<div className="mt-8">
						<CalEmbed />
					</div>
				</div>
			</div>
		</section>
	);
}
