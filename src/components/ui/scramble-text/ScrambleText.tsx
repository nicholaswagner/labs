import { Text } from "@radix-ui/themes";
import type { TextProps } from "@radix-ui/themes";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { ScrambleOptions } from "../../hooks/useScrambleText";
import { useScrambleText } from "../../hooks/useScrambleText";
import { useTheme } from "../ThemeContext";

const defaults: ScrambleOptions = {
	autoPlay: true,
	delay: 0,
	duration: 600,
	easing: "easeInOut",
	mode: "word",
};

const scrambleStyle: CSSProperties = {
	color: "var(--accent-12)",
	fontFamily: "monospace",
	textTransform: "uppercase",
	letterSpacing: "0.1em",
	background: `repeating-linear-gradient(
					to right,
					var(--accent-3) 0,
					var(--accent-3) 1ch,
					transparent 1ch,
					transparent calc(1ch + 0.1em)
				  )`,
};

export const ScrambleText = ({
	children,
	style,
	...props
}: Partial<TextProps> & Partial<ScrambleOptions>) => {
	const ref = useRef<HTMLElement | null>(null);
	const [duration, setDuration] = useState(defaults.duration);

	const trigger = useScrambleText(ref, {
		...defaults,
		...props,
		duration,
	});

	const { themeProps } = useTheme();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!ref.current || themeProps) return;
		trigger();
	}, [themeProps]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const handleBeforePrint = () => {
			setDuration(0);
		};

		const handleAfterPrint = () => {
			setDuration(defaults.duration);
			if (ref.current) {
				trigger();
			}
		};
		window.addEventListener("beforeprint", handleBeforePrint);
		window.addEventListener("afterprint", handleAfterPrint);
		return () => {
			window.removeEventListener("beforeprint", handleBeforePrint);
			window.removeEventListener("afterprint", handleAfterPrint);
		};
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					trigger();
				}
			},
			{ threshold: 0.25 },
		);
		if (ref.current) {
			observer.observe(ref.current);
		}
		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [trigger]);

	return (
		<Text ref={ref} style={{ ...scrambleStyle, ...style }} {...props}>
			{children}
		</Text>
	);
};
