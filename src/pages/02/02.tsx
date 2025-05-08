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
} from "@radix-ui/themes";
import type { FlexProps, TextProps } from "@radix-ui/themes";
import { Component, ReactNode } from "react";
import styles from "./styles.module.css";

import { ParallaxGroup } from "@/components/ui/parallax/ParallaxGroup";
import { ParallaxLayer } from "@/components/ui/parallax/ParallaxLayer";
import { ArrowUpRight, SquareArrowUpRightIcon } from "lucide-react";
import ProfileImage from "src/assets/profile.jpg";

const Headish = () => (
	<Flex direction="column">
		<Heading style={{ color: "var(--accent-11)" }} weight="bold">
			Nicholas Wagner,
		</Heading>
		<Heading
			style={{ color: "var(--gray-11)" }}
			weight="regular"
			mb={{ initial: "4" }}
		>
			Software Engineer
		</Heading>
	</Flex>
);

const ListItem = ({
	children,
	delay = 1,
}: Partial<TextProps> & ScrambleOptions & { delay?: number }) => (
	<Flex direction="column" gap={{ initial: "2" }}>
		<Flex direction="row" align="center" gap={{ initial: "2" }}>
			<Flex direction="column" flexShrink="0">
				<Text weight="medium" size={{ initial: "1" }}>
					{/* <ScrambleText
						style={{
							color: "var(--accent-12)",
						}}
					> */}
					{faker.company.name()}

					{/* {children} */}
					{/* </ScrambleText> */}
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
			{/* <ScrambleText
				size={{ initial: "1" }}
				style={
					{
						width: "fit-content",
						"--delay": `${delay / 10}ms`,
					} as React.CSSProperties
				}
				delay={delay}
			>
				{faker.company.name()}
			</ScrambleText> */}
			<Flex direction="row" my={{ initial: "2" }}>
				<Text style={{ flexShrink: 0 }} size={{ initial: "2" }} weight="bold">
					{/* <mark
						style={{
							backgroundColor: "var(--accent-3)",
							color: "var(--accent-11)",
						}}
					> */}
					<ScrambleText
						style={{
							color: "var(--accent-12)",
						}}
					>
						<Text weight="light">{children}</Text>
					</ScrambleText>
					{/* </mark> */}
				</Text>
			</Flex>

			<Text size={{ initial: "3" }} style={{ textAlign: "justify" }}>
				{faker.lorem.paragraphs({ min: 1, max: 3 })}
			</Text>
		</Flex>
	</Flex>
);

const MyHandsomeFace = () => (
	<div className={styles.imageContainer}>
		<img
			src={ProfileImage}
			alt="Profile of the user"
			style={{
				borderRadius: "var(--radius-2)",
			}}
		/>
	</div>
);

const SummarySection = () => (
	<Flex direction="column">
		<Separator size="4" my={{ initial: "7" }} />
		<Heading size={{ initial: "4" }} weight="regular" mb={{ initial: "5" }}>
			A seasoned engineer with 10+ years of experience creating scalable
			platforms and interactive applications for both web and mobile.
		</Heading>
		<Separator size="4" my={{ initial: "2" }} />
		<Link href="#">hello@nicholaswagner.dev</Link>
		<Separator size="4" my={{ initial: "2" }} />
		<Link href="#" size={{ initial: "2" }}>
			LinkedIn
		</Link>
		<Separator size="4" my={{ initial: "2" }} />
		<Link href="#" size={{ initial: "2" }}>
			{" "}
			Schedule a Call
		</Link>
	</Flex>
);

const ExperienceLine = () => {
	const title = faker.person.jobTitle();
	const company = faker.company.name();
	const years = `${faker.date.month()} ${faker.date.past({ years: 2 }).getUTCFullYear()} - ${faker.date.month()} ${faker.date.past().getUTCFullYear()}`;
	const cityState = `${faker.location.city()}, ${faker.location.state()}`;
	return (
		<Flex direction={{ initial: "column", lg: "row" }}>
			<Flex
				direction={{ initial: "column" }}
				width={{ initial: "100%", lg: "35%" }}
			>
				<Text size={{ initial: "1" }}>
					<ScrambleText
						style={
							{
								// color: "var(--accent-12)",
							}
						}
					>
						{title}
					</ScrambleText>
				</Text>
				{company}
				<Text
					weight="medium"
					size={{ initial: "1" }}
					style={{
						textTransform: "uppercase",
						fontFamily: "monospace",
						flexShrink: 0,
						fontSize: "0.65rem",
						fontKerning: "auto",
					}}
				>
					{years}
				</Text>
				<Text>{cityState}</Text>
			</Flex>

			<Flex
				direction={{ initial: "column", lg: "row" }}
				width={{ initial: "100%", lg: "65%" }}
				mt={{ initial: "3" }}
			>
				<ul>
					<li>{faker.lorem.paragraph()}</li>
					<li>{faker.lorem.paragraph()}</li>
					<li>{faker.lorem.paragraph()}</li>
				</ul>
			</Flex>
		</Flex>
	);
};

const Experience = ({ getScrambleOffset }) => (
	<Flex direction={{ initial: "column" }} mt={{ initial: "9", md: "0" }}>
		Experience
		{/* <Heading size={{ initial: "4" }} weight="regular" mb={{ initial: "5" }}>
			Experience
		</Heading> */}
		<Separator size="4" my={{ initial: "4" }} />
		<ExperienceLine />
		<Separator size="4" my={{ initial: "4" }} />
		<ExperienceLine />
		<Separator size="4" my={{ initial: "4" }} />
		<ExperienceLine />
		<Separator size="4" my={{ initial: "4" }} />
		<ExperienceLine />
		<Separator size="4" my={{ initial: "4" }} />
		<ExperienceLine />
		{/* <ListItem delay={getScrambleOffset()}>{faker.person.jobTitle()}</ListItem>
		<ListItem delay={getScrambleOffset()}>{faker.person.jobTitle()}</ListItem>
		<ListItem delay={getScrambleOffset()}>{faker.person.jobTitle()}</ListItem>
		<ListItem delay={getScrambleOffset()}>{faker.person.jobTitle()}</ListItem>
		<ListItem delay={getScrambleOffset()}>{faker.person.jobTitle()}</ListItem>
		<ListItem delay={getScrambleOffset()}>{faker.person.jobTitle()}</ListItem>
		<ListItem delay={getScrambleOffset()}>{faker.person.jobTitle()}</ListItem> */}
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

export const Lab002 = () => {
	let x = 0;
	const getScrambleOffset = () => {
		x = x + 1;
		return 500 + x * 250;
	};

	return (
		<Flex
			direction="column"
			px={{ initial: "3", sm: "6" }}
			// gapY={{ initial: "6" }}
			// gapX={{ initial: "0", sm: "9" }}
			mt={{ initial: "9" }}
		>
			<Headish />
			<Flex
				direction={{ initial: "column", md: "row" }}
				// style={{ backgroundColor: "yellow" }}
			>
				<Flex
					width={{ initial: "100%", md: "50%" }}
					// style={{ backgroundColor: "red" }}
				>
					<SummarySection />
				</Flex>
				<Flex width={{ initial: "0px", md: "2rem" }} />
				<Flex
					width={{ initial: "100%" }}
					// style={{ backgroundColor: "blue" }}
				>
					<Experience getScrambleOffset={getScrambleOffset} />
				</Flex>
				{/* <Headish /> */}
				{/* <MyHandsomeFace /> */}
				{/* <ParallaxDemo /> */}
				{/* <Flex direction={{ initial: "column", sm: "row" }}>
				<SummarySection />
				<Flex mx={{ initial: "0", sm: "3" }} />
				<Experience getScrambleOffset={getScrambleOffset} />
			</Flex> */}
			</Flex>
		</Flex>
	);
};
