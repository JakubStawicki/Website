import { Link } from "react-router";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

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
			"I believe in full transparency before any call. A-Level: \u00a340 per hour. GCSE: \u00a330 per hour. These rates reflect a short-term, results-driven approach, not ongoing general support.",
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

export function FAQ() {
	return (
		<section className="pt-28 pb-20">
			<div className="max-w-6xl mx-auto px-6">
				<h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">
					Frequently Asked Questions
				</h1>
				<p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12 mt-6">
					Everything you need to know
				</p>

				<div className="max-w-3xl mx-auto">
					<Accordion type="single" collapsible className="space-y-4">
						{faqItems.map((item, index) => (
							<AccordionItem
								key={item.question}
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
						))}
					</Accordion>
				</div>

				<div className="mt-16 text-center">
					<p className="text-muted-foreground mb-4">Still have questions?</p>
					<Button asChild size="lg" className="text-lg px-8 py-6">
						<Link to="/booking">Book a Free Call</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
