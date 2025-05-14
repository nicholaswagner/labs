import type { ScrambleOptions } from "@/components/hooks/useScrambleText";
import { ScrambleText } from "@/components/ui/scramble-text/ScrambleText";
import { faker } from "@faker-js/faker";
import {
	AspectRatio,
	Flex,
	Heading,
	Link,
	Separator,
	Text,
	VisuallyHidden,
} from "@radix-ui/themes";
import type { FlexProps, TextProps } from "@radix-ui/themes";
import {
	type CSSProperties,
	type Component,
	type ReactNode,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import styles from "./styles.module.css";

import { NW } from "@/components/NW";
import { useTheme } from "@/components/ui/ThemeContext";
import { ParallaxGroup } from "@/components/ui/parallax/ParallaxGroup";
import { ParallaxLayer } from "@/components/ui/parallax/ParallaxLayer";
import { ThemeToggle } from "@/components/ui/theme-toggle/ThemeToggle";
import {
	ArrowUpRight,
	ExternalLink,
	ExternalLinkIcon,
	LinkIcon,
	SquareArrowUpRightIcon,
} from "lucide-react";
import { F } from "node_modules/@faker-js/faker/dist/airline-BUL6NtOJ";
import ProfileImage from "src/assets/profile.jpg";

const ListItem = ({
	children,
	delay = 1,
}: Partial<TextProps> & ScrambleOptions & { delay?: number }) => (
	<Flex direction="column" gap={{ initial: "2" }}>
		<Flex direction="row" align="center" gap={{ initial: "2" }}>
			<Flex direction="column" flexShrink="0">
				<Text weight="medium" size={{ initial: "1" }}>
					{faker.company.name()}
				</Text>
			</Flex>
			<Separator
				size="3"
				style={{ "--delay": `${delay / 7}ms` } as React.CSSProperties}
				className={styles.separator}
			/>
			<Text
				weight="medium"
				size={{ initial: "1" }}
				style={{
					textTransform: "uppercase",
					fontFamily: "monospace",
					flexShrink: 0,
				}}
			>{`${faker.date.past().toISOString().slice(0, 10)} - ${faker.date.past().toISOString().slice(0, 10)}`}</Text>
		</Flex>
		<Flex direction="column">
			<Flex direction="row" my={{ initial: "2" }}>
				<Text style={{ flexShrink: 0 }} size={{ initial: "2" }} weight="light">
					<ScrambleText
						style={{
							color: "var(--accent-12)",
						}}
					>
						{children}
					</ScrambleText>
				</Text>
			</Flex>

			<Text size={{ initial: "3" }} style={{ textAlign: "justify" }}>
				{faker.lorem.paragraphs({ min: 1, max: 3 })}
			</Text>
		</Flex>
	</Flex>
);

// const MyHandsomeFace = () => (
// 	<div className={styles.imageContainer}>
// 		<img
// 			src={ProfileImage}
// 			alt="Profile of the user"
// 			style={{
// 				borderRadius: "var(--radius-2)",
// 			}}
// 		/>
// 	</div>
// );

const ExperienceLine = () => {
	const title = faker.person.jobTitle();
	const company = faker.company.name();
	const cityState = `${faker.location.city()}, ${faker.location.state()}`;
	return (
		<Flex
			className={styles.experienceBlock}
			direction={{ initial: "column", lg: "row" }}
		>
			{/* ------------------------------------------------------------	experience left column*/}
			<Flex
				direction={{ initial: "column" }}
				width={{ initial: "100%", lg: "30%" }}
				gapY={{ initial: "0.1rem" }}
			>
				{/* ------------------------------------------------------------	experience job title*/}
				<Text size={{ initial: "3" }} mb={{ initial: "2" }}>
					<ScrambleText
						style={{ color: "var(--gray-12)" }}
						weight="medium"
						size="3"
					>
						{title}
					</ScrambleText>
				</Text>
				{/* ------------------------------------------------------------	experience company name*/}
				<Link color="gray" href="#" size="3" weight="medium">
					{company}{" "}
					<LinkIcon
						style={{
							height: "1em",
							width: "1em",
							marginLeft: "0.25rem",
							transformOrigin: "bottom left",
						}}
					/>
				</Link>
				{/* ------------------------------------------------------------	experience company years*/}
				<Text size="3" weight="medium" color="gray">
					June 2022 - Present
				</Text>

				{/* ------------------------------------------------------------	experience location*/}
				<Text color="gray" size="3">
					{cityState}
				</Text>
			</Flex>

			{/* ------------------------------------------------------------	experience list items*/}
			<Flex
				direction={{ initial: "column", lg: "row" }}
				width={{ initial: "100%", lg: "70%" }}
				mt={{ initial: "6" }}
			>
				<ul className={styles.experienceList}>
					<li>{faker.lorem.paragraph()}</li>
					<li>{faker.lorem.paragraph()}</li>
					<li>{faker.lorem.paragraph()}</li>
				</ul>
			</Flex>
		</Flex>
	);
};

const SummarySection = () => (
	<Flex direction="column" width={{ initial: "100%" }}>
		<Heading style={{ color: "var(--gray-11)" }} size="3">
			{"‎ "}
		</Heading>

		<Separator size="4" mb={{ initial: "6" }} />
		<Heading
			mt={{ initial: "4" }}
			mb={{ initial: "6" }}
			mr={{ initial: "4" }}
			size={{ initial: "4" }}
			weight="regular"
		>
			A seasoned engineer with 10+ years of experience creating scalable
			platforms and interactive applications for both web and mobile.
		</Heading>
		<Separator size="4" my={{ initial: "3" }} />
		<Link color="gray" href="#" weight="medium" size="2">
			hello@nicholaswagner.dev
		</Link>
		<Separator size="4" my={{ initial: "3" }} />
		<Link color="gray" href="#" weight="medium" size="2">
			LinkedIn
		</Link>
		<Separator size="4" my={{ initial: "3" }} />
		<Link color="gray" href="#" weight="medium" size="2">
			{" "}
			Schedule a Call
		</Link>
	</Flex>
);

const Experience = ({
	getScrambleOffset,
}: Partial<FlexProps> & { getScrambleOffset: () => number }) => (
	<Flex direction={{ initial: "column" }}>
		<Heading style={{ color: "var(--gray-11)" }} size="3">
			Experience
		</Heading>
		<Separator size="4" mb={{ initial: "6" }} />

		<ExperienceLine />
		<Separator size="4" my={{ initial: "6" }} style={{ breakAfter: "avoid" }} />
		<ExperienceLine />
		<Separator size="4" my={{ initial: "6" }} style={{ breakAfter: "avoid" }} />

		<ExperienceLine />
		<Separator size="4" my={{ initial: "6" }} style={{ breakAfter: "avoid" }} />

		<ExperienceLine />
		<Separator size="4" my={{ initial: "6" }} style={{ breakAfter: "avoid" }} />

		<ExperienceLine />
	</Flex>
);

// const ParallaxDemo = () => (
// 	<ParallaxGroup id="group4" style={{ height: "50vh", zIndex: -1 }}>
// 		<ParallaxLayer>
// 			<Text>04/Base Layer</Text>
// 		</ParallaxLayer>
// 		<ParallaxLayer variant="deep">
// 			<Text>04/deep</Text>
// 		</ParallaxLayer>
// 		<ParallaxLayer variant="background">
// 			<MyHandsomeFace />
// 		</ParallaxLayer>
// 	</ParallaxGroup>
// );

export const CV = () => {
	const { theme } = useTheme();

	let x = 0;
	const getScrambleOffset = () => {
		x = x + 1;
		return 500 + x * 250;
	};
	const [isChecked, setIsChecked] = useState(theme === "dark");
	const handleChecked = (value: boolean) => {
		setIsChecked(value);
	};

	return (
		<Flex
			direction="column"
			px={{ initial: "3", sm: "6" }}
			py={{ initial: "9" }}
			mx="6"
			// className={styles.cv}
		>
			<Flex direction="row" justify="between" align="start">
				{/* Heading stuff ------------------------------------------------  */}
				<Flex
					direction="column"
					mb={{ initial: "6" }}
					mt={{ initial: "4" }}
					gapY={{ initial: "1" }}
				>
					<Heading
						style={{ color: "var(--gray-12)" }}
						mb={{ initial: "1" }}
						weight="bold"
						size="7"
					>
						Nicholas Wagner,
					</Heading>
					<Heading size={{ initial: "3" }}>
						<ScrambleText style={{ color: "var(--gray-12)" }} weight="regular">
							Software Engineer
						</ScrambleText>
					</Heading>
				</Flex>
				<Flex direction="column" align="center">
					<ThemeToggle checked={isChecked} onCheckedChange={handleChecked} />
					<Heading
						className={styles.printable}
						style={{ color: "var(--gray-11)" }}
						mb={{ initial: "1" }}
						weight="bold"
						size="7"
					>
						<NW style={{ height: "2em", width: "auto" }} />
					</Heading>
				</Flex>
			</Flex>

			{/* /End Heading stuff ---------------------------------------------- */}

			<Flex
				className={styles.notPrintable}
				direction={{ initial: "column", sm: "row" }}
			>
				<Flex width={{ initial: "100%", sm: "50%" }}>
					<SummarySection />
				</Flex>
				<Flex width={{ initial: "0px", sm: "6rem" }} />
				<Flex width="100%">
					<Experience getScrambleOffset={getScrambleOffset} />
				</Flex>
			</Flex>
			{/* -------------------------------------------------------- Printer friendly Layout */}
			<Flex className={styles.printable} direction={{ initial: "row" }}>
				<Flex width="50%">
					<SummarySection />
				</Flex>
				<Flex width="6rem" />
				<Flex width="100%">
					<Experience getScrambleOffset={getScrambleOffset} />
				</Flex>
			</Flex>
		</Flex>
	);
};
