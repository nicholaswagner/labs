import { Avatar, Card, Flex, HoverCard, Link, Text } from "@radix-ui/themes";

import { useState } from "react";
import profileImage from "../assets/pixelized_profile.png";
import { NW } from "../components/NW";
import { BreadCrumbs } from "../components/ui/breadcrumbs/BreadCrumbs";
import { ThemeToggle } from "../components/ui/theme-toggle/ThemeToggle";
import { useTheme } from "./ui/ThemeContext";

export const Nav = () => {
	const { theme } = useTheme();
	const [isChecked, setIsChecked] = useState(theme === "dark");
	const handleChecked = (value: boolean) => {
		setIsChecked(value);
	};

	return (
		<Flex
			direction="row"
			justify="between"
			align="center"
			gapX="6"
			py={{ initial: "1" }}
			px={{ initial: "6" }}
			style={{
				backgroundColor: "var(--accent-3)",
				position: "absolute",
				left: 0,
				top: 0,
				width: "100%",
				zIndex: 5,
			}}
		>
			<Flex align="center" gap="6">
				<HoverCard.Root>
					<HoverCard.Trigger>
						<Link href="https://www.nicholaswagner.dev" target="_blank">
							<NW
								style={{ scale: 0.5, color: "var(--accent-11)" }}
								className="nwLink"
							/>
						</Link>
					</HoverCard.Trigger>
					<HoverCard.Content side="left" size="2">
						<Card
							style={{
								padding: "1.5rem",
								backgroundColor: "var(--accent-2)",
							}}
						>
							<Flex gap="4" direction="row" align="center" justify="start">
								<Avatar src={profileImage} fallback="NW" />
								<Flex direction="column">
									<Text size="2" weight="bold">
										Nicholas Wagner
									</Text>
									<Link
										href="https://www.github.com/nicholaswagner"
										target="_blank"
									>
										<Text size="2" weight="light">
											github.com/nicholaswagner
										</Text>
									</Link>
								</Flex>
							</Flex>
						</Card>
					</HoverCard.Content>
				</HoverCard.Root>
				<BreadCrumbs />
			</Flex>
			<ThemeToggle checked={isChecked} onCheckedChange={handleChecked} />
		</Flex>
	);
};
