import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
	{ to: "/", label: "Home" },
	{ to: "/services", label: "Services" },
	{ to: "/testimonials", label: "Testimonials" },
];

export function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		function handleScroll() {
			setScrolled(window.scrollY > 50);
		}
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
				scrolled
					? "bg-background/95 backdrop-blur-md border-border shadow-lg"
					: "bg-background/80 backdrop-blur-sm border-transparent",
			)}
		>
			<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
				<Link to="/" className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
					KubaTutors
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-8">
					{navItems.map((item) => (
						<NavLink
							key={item.to}
							to={item.to}
							className={({ isActive }) =>
								cn(
									"text-sm font-medium transition-colors hover:text-foreground",
									isActive ? "text-foreground" : "text-muted-foreground",
								)
							}
						>
							{item.label}
						</NavLink>
					))}
					<Button asChild size="sm">
						<Link to="/booking">Book Now</Link>
					</Button>
				</nav>

				{/* Mobile Toggle */}
				<button
					type="button"
					className="md:hidden text-foreground"
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-label="Toggle menu"
				>
					{mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
				</button>
			</div>

			{/* Mobile Menu */}
			{mobileOpen && (
				<div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
					<nav className="flex flex-col p-6 gap-4">
						{navItems.map((item) => (
							<NavLink
								key={item.to}
								to={item.to}
								onClick={() => setMobileOpen(false)}
								className={({ isActive }) =>
									cn(
										"text-base font-medium transition-colors",
										isActive ? "text-foreground" : "text-muted-foreground",
									)
								}
							>
								{item.label}
							</NavLink>
						))}
						<Button asChild className="w-full mt-2">
							<Link to="/booking" onClick={() => setMobileOpen(false)}>
								Book Now
							</Link>
						</Button>
					</nav>
				</div>
			)}
		</header>
	);
}
