import { ParallaxGroup } from "@/components/ui/parallax/ParallaxGroup";
import { ParallaxLayer } from "@/components/ui/parallax/ParallaxLayer";
import { Label } from "radix-ui";
import { Switch } from "radix-ui";
import { type ReactNode, useState } from "react";

import { ScrambleText } from "@/components/ui/scramble-text/ScrambleText";
import { Rotate3DIcon } from "lucide-react";
import classnames from "../../components/ui/parallax/styles.module.css";

/**
 *
 * Resource from:
 * https://keithclark.co.uk/articles/pure-css-parallax-websites/demo3/
 * // todo - create a thank you and include on page
 *
 */

const Title = ({ children }: { children: ReactNode }) => (
	<div
		style={{
			position: "absolute",
			left: "50%",
			top: "50%",
			width: "100vw",
			height: "auto",
			textAlign: "center",
			transform: "translate(-50%,-50%)",
			fontFamily: "monospace",
			color: "var(--accent-9)",
		}}
	>
		<ScrambleText>{children}</ScrambleText>
	</div>
);

export const Lab001 = () => {
	const [showDebug, setShowDebug] = useState(false);

	return (
		<>
			<div className={classnames.debug}>
				<Label.Root>
					<Switch.Root
						onCheckedChange={() => {
							setShowDebug((prev) => !prev);
							console.log("clicked", showDebug);
						}}
					>
						<Switch.Thumb>
							<Rotate3DIcon />
						</Switch.Thumb>
					</Switch.Root>
				</Label.Root>
			</div>

			<div className={classnames.parallax}>
				<ParallaxGroup id="group1" style={{ zIndex: 5 }} showDebug>
					<ParallaxLayer style={{ backgroundColor: "var(--accent-3" }}>
						<Title>01/Base Layer</Title>
					</ParallaxLayer>
				</ParallaxGroup>

				<ParallaxGroup id="group2" style={{ zIndex: 3 }} showDebug>
					<ParallaxLayer>
						<Title>02/Base Layer</Title>
					</ParallaxLayer>
					<ParallaxLayer
						variant="background"
						style={{ background: "var(--color-background" }}
					>
						<Title>02/Background Layer</Title>
					</ParallaxLayer>
				</ParallaxGroup>

				<ParallaxGroup id="group3" style={{ zIndex: 4 }} showDebug>
					<ParallaxLayer variant="foreground">
						<Title>03/Foreground Layer</Title>
					</ParallaxLayer>
					<ParallaxLayer style={{ background: "var(--accent-4" }}>
						<Title>03/Base Layer</Title>
					</ParallaxLayer>
				</ParallaxGroup>

				<ParallaxGroup id="group4" style={{ zIndex: 2 }} showDebug>
					<ParallaxLayer>
						<Title>04/Base Layer</Title>
					</ParallaxLayer>
					<ParallaxLayer variant="background">
						<Title>04/Background Layer</Title>
					</ParallaxLayer>
					<ParallaxLayer
						variant="deep"
						style={{ background: "var(--color-background" }}
					>
						<Title>04/Deep Background Layer</Title>
					</ParallaxLayer>
				</ParallaxGroup>

				<ParallaxGroup id="group5" style={{ zIndex: 3 }} showDebug>
					<ParallaxLayer variant="foreground">
						<Title>05/Foreground Layer</Title>
					</ParallaxLayer>
					<ParallaxLayer style={{ backgroundColor: "var(--accent-5)" }}>
						<Title>05/Base Layer</Title>
					</ParallaxLayer>
				</ParallaxGroup>

				<ParallaxGroup id="group6" style={{ zIndex: 2 }} showDebug>
					<ParallaxLayer
						variant="background"
						style={{ background: "var(--accent-1)" }}
					>
						<Title>06/Background Layer</Title>
					</ParallaxLayer>
					<ParallaxLayer>
						<Title>06/Base Layer</Title>
					</ParallaxLayer>
				</ParallaxGroup>

				<ParallaxGroup id="group7" style={{ zIndex: 3 }} showDebug>
					<ParallaxLayer style={{ backgroundColor: "var(--accent-3)" }}>
						<Title>07/Base Layer</Title>
					</ParallaxLayer>
				</ParallaxGroup>
			</div>
		</>
	);
};
