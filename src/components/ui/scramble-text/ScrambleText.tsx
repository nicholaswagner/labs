import { Text } from "@radix-ui/themes";
import type { TextProps } from "@radix-ui/themes";
import { useRef } from "react";
import type { ScrambleOptions } from "../../hooks/useScrambleText";
import { useScrambleText } from "../../hooks/useScrambleText";

export const ScrambleText = ({
	children,
	style,
	scrambleOptions,
}: Partial<TextProps> & { scrambleOptions?: Partial<ScrambleOptions> }) => {
	const ref = useRef<HTMLElement | null>(null);

	const defaults: ScrambleOptions = {
		autoPlay: true,
		delay: 500,
		duration: 800,
		easing: "easeInOut",
		mode: "word",
	};

	const scramble = useScrambleText(ref, {
		...defaults,
		...scrambleOptions,
	});

	return (
		<Text
			ref={ref}
			style={{
				...style,
			}}
		>
			{children}
		</Text>
	);
};
