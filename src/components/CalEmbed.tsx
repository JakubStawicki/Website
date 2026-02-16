import { useEffect, useRef } from "react";

declare global {
	interface Window {
		Cal?: ((...args: unknown[]) => void) & {
			loaded?: boolean;
			ns?: Record<string, unknown>;
			q?: unknown[];
		};
	}
}

export function CalEmbed() {
	const containerRef = useRef<HTMLDivElement>(null);
	const initialized = useRef(false);

	useEffect(() => {
		if (initialized.current) return;
		initialized.current = true;

		// Load Cal.com embed script
		((C: Window, A: string, L: string) => {
			const p = (a: { q: unknown[] }, ar: unknown) => {
				a.q.push(ar);
			};
			const d = C.document;
			C.Cal =
				C.Cal ||
				(((...args: unknown[]) => {
					// biome-ignore lint/style/noNonNullAssertion: Cal assigned on same line
					const cal = C.Cal!;
					const ar = args;
					if (!cal.loaded) {
						cal.ns = {};
						cal.q = cal.q || [];
						const script = d.createElement("script");
						script.src = A;
						d.head.appendChild(script);
						cal.loaded = true;
					}
					if (ar[0] === L) {
						const api = (...apiArgs: unknown[]) => {
							p(api as unknown as { q: unknown[] }, apiArgs);
						};
						const namespace = ar[1] as string;
						(api as unknown as { q: unknown[] }).q = (api as unknown as { q: unknown[] }).q || [];
						if (typeof namespace === "string") {
							(cal.ns as Record<string, unknown>)[namespace] = api;
							p(api as unknown as { q: unknown[] }, ar);
						} else {
							p(cal as unknown as { q: unknown[] }, ar);
						}
						return;
					}
					p(cal as unknown as { q: unknown[] }, ar);
				}) as Window["Cal"]);
		})(window, "https://app.cal.com/embed/embed.js", "init");

		window.Cal?.("init", { origin: "https://app.cal.com" });

		window.Cal?.("inline", {
			elementOrSelector: "#cal-embed",
			calLink: "jakubstawicki",
			layout: "month_view",
			config: {
				theme: "dark",
			},
		});

		window.Cal?.("ui", {
			styles: {
				branding: {
					brandColor: "#ffffff",
				},
			},
			hideEventTypeDetails: false,
			layout: "month_view",
		});
	}, []);

	return (
		<div
			ref={containerRef}
			id="cal-embed"
			className="w-full min-h-[700px] overflow-auto rounded-xl"
		/>
	);
}
