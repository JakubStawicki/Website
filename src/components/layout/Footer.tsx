import { Check, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GridPattern } from "@/components/ui/grid-pattern";

export function Footer() {
	const [copied, setCopied] = useState(false);

	function copyEmail() {
		navigator.clipboard.writeText("jakubstawicki@proton.me").then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	}

	return (
		<footer className="relative border-t border-border bg-background overflow-hidden">
			{/* Grid Pattern Background */}
			<GridPattern
				width={40}
				height={40}
				className="absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,white,transparent)]"
			/>

			{/* Content */}
			<div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
				<div className="grid md:grid-cols-3 gap-12 mb-12">
					{/* Brand */}
					<div className="space-y-4">
						<Link to="/" className="text-2xl font-bold text-foreground">
							KubaTutors
						</Link>
						<p className="text-muted-foreground max-w-md">
							Expert A-Level and GCSE exam strategy. Stop losing easy marks and master the mark
							scheme.
						</p>
					</div>

					{/* Navigation */}
					<div className="space-y-4">
						<h3 className="font-semibold text-foreground">Quick Links</h3>
						<nav className="flex flex-col gap-3">
							<Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
								Home
							</Link>
							<Link
								to="/services"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								Services
							</Link>
							<Link
								to="/testimonials"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								Testimonials
							</Link>
							<Link
								to="/booking"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								Book a Call
							</Link>
						</nav>
					</div>

					{/* Contact & Subjects */}
					<div className="space-y-4">
						<h3 className="font-semibold text-foreground">Get in Touch</h3>
						<Button variant="outline" onClick={copyEmail} className="gap-2 w-full md:w-auto">
							{copied ? <Check className="size-4" /> : <Mail className="size-4" />}
							{copied ? "Copied!" : "Copy Email"}
						</Button>
						<div className="pt-4">
							<p className="text-sm text-muted-foreground font-medium mb-2">Subjects Covered:</p>
							<p className="text-sm text-foreground">Further Maths, Maths, Physics</p>
							<p className="text-sm text-muted-foreground mt-1">A-Level & GCSE</p>
						</div>
					</div>
				</div>

				<Separator className="mb-8" />

				<div className="text-center text-muted-foreground text-sm">
					<p>&copy; {new Date().getFullYear()} KubaTutors - Jakub Stawicki. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
