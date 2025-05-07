import type { ScrambleOptions } from "@/components/hooks/useScrambleText";
import { ScrambleText } from "@/components/ui/scramble-text/ScrambleText";
import { faker } from "@faker-js/faker";
import { Flex, Heading, Separator, Text } from "@radix-ui/themes";
import type { FlexProps, TextProps } from "@radix-ui/themes";
import { Component, ReactNode } from "react";
import styles from "./styles.module.css";

const Headish = () => (
	<Flex direction="column">
		<Heading mb={{ initial: "3" }} size={{ initial: "9" }}>
			{faker.person.fullName()}
		</Heading>
		<Text size={{ initial: "3" }}>
			{faker.lorem.paragraphs({ min: 1, max: 3 })}
		</Text>
	</Flex>
);

const ListItem = ({
	children,
	delay = 1,
}: Partial<TextProps> & ScrambleOptions & { delay?: number }) => (
	<Flex direction="column" gap={{ initial: "2" }}>
		<Flex direction="row" align="center" gap={{ initial: "2" }}>
			<Flex direction="column" flexShrink="0">
				<ScrambleText
					style={{
						color: "var(--accent-12)",
						fontSize: "0.75rem",
						background: "none",
					}}
				>
					{`${faker.date.past().toISOString().slice(0, 10)}`}
				</ScrambleText>
				<ScrambleText size={{ initial: "1" }} delay={200}>
					{faker.company.name()}
				</ScrambleText>
			</Flex>
			<Separator
				size="3"
				style={{ "--delay": `${delay / 7}ms` } as React.CSSProperties}
				className={styles.separator}
			/>
			<Text style={{ flexShrink: 0 }} size={{ initial: "3" }}>
				<mark
					style={{
						backgroundColor: "var(--accent-3)",
						color: "var(--accent-11)",
					}}
				>
					{children}
				</mark>
			</Text>
		</Flex>
		<Flex>
			<Text size={{ initial: "1" }}>
				{faker.lorem.paragraphs({ min: 1, max: 3 })}
			</Text>
		</Flex>
	</Flex>
);

const Listish = ({ children }: FlexProps) => (
	<Flex direction="column" my={{ initial: "6" }} gap={{ initial: "9" }}>
		{children}
	</Flex>
);

export const Lab002 = () => {
	let x = 0;
	const getScrambleOffset = () => {
		x = x + 1;
		return 500 + x * 250;
	};

	return (
		<Flex direction="column" px={{ initial: "6" }}>
			<Headish />
			<Listish>
				<ListItem delay={getScrambleOffset()}>
					{faker.person.jobTitle()}
				</ListItem>
				<ListItem delay={getScrambleOffset()}>
					{faker.person.jobTitle()}
				</ListItem>
				<ListItem delay={getScrambleOffset()}>
					{faker.person.jobTitle()}
				</ListItem>
				<ListItem delay={getScrambleOffset()}>
					{faker.person.jobTitle()}
				</ListItem>
				<ListItem delay={getScrambleOffset()}>
					{faker.person.jobTitle()}
				</ListItem>
				<ListItem delay={getScrambleOffset()}>
					{faker.person.jobTitle()}
				</ListItem>
				<ListItem delay={getScrambleOffset()}>
					{faker.person.jobTitle()}
				</ListItem>
				<ListItem delay={getScrambleOffset()}>
					{faker.person.jobTitle()}
				</ListItem>
				<ListItem delay={getScrambleOffset()}>
					{faker.person.jobTitle()}
				</ListItem>
				<ListItem delay={getScrambleOffset()}>
					{faker.person.jobTitle()}
				</ListItem>
			</Listish>
		</Flex>
	);
};
