import {
	Badge,
	Flex,
	Grid,
	Heading,
	Link,
	Separator,
	Table,
	Text,
} from "@radix-ui/themes";

import { dependencies, devDependencies, homepage } from "../../package.json";
import { ScrambleText } from "./ui/scramble-text/ScrambleText";

const deps = Object.keys(dependencies);
const devDeps = Object.keys(devDependencies);

export const PackageDetails = () => {
	const buildTable = (title: string, data: string[]) => (
		<Table.Root size="1">
			<Table.Header>
				<Table.Row>
					<Table.ColumnHeaderCell>
						<Badge>{title}</Badge>
					</Table.ColumnHeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{data.map((item) => (
					<Table.Row key={item}>
						<Table.RowHeaderCell>
							<Text>{item}</Text>
						</Table.RowHeaderCell>
					</Table.Row>
				))}
			</Table.Body>
		</Table.Root>
	);

	return (
		<Grid columns={{ initial: "1", md: "2" }}>
			<Flex direction="column">
				<Heading size="4" mb="2" align={{ initial: "center", md: "left" }}>
					Yet another{" "}
					<Link href={`${homepage}`} target="_blank">
						github-template repo
					</Link>
					.
				</Heading>
				<Text weight="light" size="2" align={{ initial: "center", md: "left" }}>
					There are many like it, but this one is mine.
				</Text>
			</Flex>

			<Flex direction="column" align={{ initial: "center", md: "start" }}>
				<Flex direction="column" px={{ initial: "2" }}>
					<ScrambleText align={{ initial: "center", md: "left" }}>
						The following are updated with each commit
					</ScrambleText>
					<Link href={`${homepage}/blob/main/package.json`} mb="4">
						<ScrambleText align={{ initial: "center", md: "left" }}>
							package.json
						</ScrambleText>
					</Link>
				</Flex>
				<Separator orientation="horizontal" size="4" my="5" />⠀ ⠀
				<Grid columns="2" gap="7">
					{buildTable("dependencies", deps)}
					{buildTable("devDependencies", devDeps)}
				</Grid>
			</Flex>
		</Grid>
	);
};
