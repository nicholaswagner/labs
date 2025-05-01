import { Flex } from "@radix-ui/themes";
import { createFileRoute } from "@tanstack/react-router";

import { ASCII1 } from "../components/labs/ASCII1";
import { ScrambleText } from "../components/ui/scramble-text/ScrambleText";

export const Route = createFileRoute("/$")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Flex direction="column" height="100vh" align="center" justify="center">
				<ScrambleText
					style={{
						fontFamily: "monospace",
						textTransform: "uppercase",
						userSelect: "none",
						backgroundColor: "var(--accent-5)",
						paddingLeft: "2rem",
						paddingRight: "2rem",
					}}
				>
					access denied
				</ScrambleText>
			</Flex>
			<ASCII1 />
		</>
	);
}
