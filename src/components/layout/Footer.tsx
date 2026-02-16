import { Check, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
	const [copied, setCopied] = useState(false);

	function copyEmail() {
		navigator.clipboard.writeText("jakubstawicki@proton.me").then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	}

	return (
		<footer className="border-t border-border bg-background">
			<div className="max-w-6xl mx-auto px-6 py-12">
				<div className="grid md:grid-cols-2 gap-8 mb-8">
					<div>
						<Link to="/" className="text-2xl font-bold text-foreground">
							KubaTutors
						</Link>
						<p className="text-muted-foreground mt-4 max-w-md">
							Expert A-Level and GCSE exam strategy. Stop losing easy marks and master the mark
							scheme.
						</p>
					</div>
					<div className="flex flex-col items-start md:items-end gap-4">
						<Button variant="outline" onClick={copyEmail} className="gap-2">
							{copied ? <Check className="size-4" /> : <Mail className="size-4" />}
							{copied ? "Copied!" : "Copy Email"}
						</Button>
					</div>
				</div>
				<Separator />
				<div className="pt-6 text-center text-muted-foreground text-sm">
					<p>&copy; {new Date().getFullYear()} KubaTutors - Jakub Stawicki. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
