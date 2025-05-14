import { Text } from "@radix-ui/themes";
import type { TextProps } from "@radix-ui/themes";
import { useEffect, useRef } from "react";
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
	const trigger = useScrambleText(ref, {
		...defaults,
		...props,
	});

	const { themeProps } = useTheme();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!ref.current || themeProps) return;
		trigger();
	}, [themeProps]);

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
