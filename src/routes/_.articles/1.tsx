import {
	AspectRatio,
	Box,
	Container,
	Em,
	Flex,
	Heading,
	Link,
	Separator,
	Text,
} from "@radix-ui/themes";
import { createFileRoute } from "@tanstack/react-router";
import { ScrambleText } from "../../components/ui/scramble-text/ScrambleText";

export const Route = createFileRoute("/_/articles/1")({
	component: RouteComponent,
});

function RouteComponent() {
	let x = 0;
	const getScrambleOffset = () => {
		x = x + 1;
		return 500 + x * 150;
	};

	return (
		<Flex
			px={{ initial: "6" }}
			py={{ initial: "9" }}
			direction={{ initial: "column" }}
			gapY={{ initial: "9" }}
		>
			<Box className="parallax" aria-hidden>
				{/* <div className="layer dot-grid" />
					<div className="layer dot-grid-1" />
					<div className="layer dot-grid-2" /> */}
			</Box>
			<Container size={{ md: "3" }}>
				<Flex direction="column" gapY={{ initial: "5" }}>
					<Em>
						<ScrambleText
							size={{ initial: "1" }}
							style={{ scale: 0.25 }}
							duration={getScrambleOffset()}
						>
							May 1st, 2025
						</ScrambleText>
					</Em>
					<Heading size={{ initial: "9" }} style={{ color: "var(--gray-11)" }}>
						Praesent at augue aliquet risus egestas elementum vitae eu velit.
					</Heading>
					<Flex direction="row" gapX={{ initial: "4" }} align="center">
						<ScrambleText
							size={{ initial: "1" }}
							duration={getScrambleOffset()}
						>
							ux
						</ScrambleText>
						<ScrambleText
							size={{ initial: "1" }}
							duration={getScrambleOffset()}
						>
							typescript
						</ScrambleText>
						<ScrambleText
							size={{ initial: "1" }}
							duration={getScrambleOffset()}
						>
							webrtc
						</ScrambleText>
						<ScrambleText
							size={{ initial: "1" }}
							duration={getScrambleOffset()}
						>
							shaders
						</ScrambleText>
						<Separator orientation="horizontal" size="4" />
					</Flex>
				</Flex>
			</Container>

			<Container size={{ initial: undefined, md: "4" }}>
				<Flex
					style={
						{
							// marginRight: "-32px",
							// marginLeft: "-32px",
						}
					}
				>
					<AspectRatio ratio={16 / 8}>
						<img
							src="https://picsum.photos/1200/200"
							alt="A house in a forest"
							style={{
								objectFit: "cover",
								width: "100%",
								height: "100%",
								borderRadius: "var(--radius-3)",
							}}
						/>
					</AspectRatio>
				</Flex>
			</Container>

			<Container size={{ initial: undefined, md: "3" }}>
				<Flex direction="column" gapY="6">
					<Text size="7">
						Nunc condimentum arcu ac rhoncus viverra. Suspendisse accumsan
						tincidunt lectus, sit amet posuere mauris iaculis quis. Nullam odio
						metus, dapibus id eros in, lacinia hendrerit augue. Nullam hendrerit
						vel ante at dapibus. Sed euismod leo lectus, lobortis luctus enim
						convallis nec.{" "}
						<Link href="#" target="_blank">
							Aliquam erat volutpat. Vestibulum nunc nulla, egestas vitae metus
							sed, interdum suscipit sem.
						</Link>{" "}
						Ut viverra justo lectus, nec volutpat magna laoreet id. Nulla in
						arcu elit. Vivamus porta facilisis arcu, nec condimentum arcu
						pulvinar blandit. Fusce vehicula egestas velit, ac feugiat diam
						placerat eu. Pellentesque ac arcu id velit convallis consectetur.{" "}
						<Link
							href="https://www.radix-ui.com/themes/docs/theme/typography"
							target="_blank"
						>
							Typography
						</Link>{" "}
						and helps guide design decisions.
					</Text>
					<Text size="4">
						Fusce venenatis pharetra consequat. Vivamus non nibh elit. Fusce in
						pharetra augue. Nunc cursus et nunc vitae interdum. Nam nunc orci,
						placerat eu viverra sed, blandit vel lorem. Aliquam rhoncus rutrum
						ante, vitae laoreet quam semper at. Donec congue et massa ut
						elementum. Nullam feugiat iaculis massa. Etiam luctus arcu vitae
						venenatis auctor. Cras interdum rutrum finibus. Donec tempus odio
						vitae dui efficitur, eget dictum ipsum suscipit.
					</Text>
					<Heading size="6">
						Integer efficitur mi nec urna blandit, sed dapibus urna suscipit.{" "}
					</Heading>
					<Text size="4">
						Sed vehicula eleifend orci, at mollis turpis mattis quis. Maecenas
						in finibus metus. Maecenas ut efficitur neque, non convallis diam.
						Maecenas vehicula eros id velit consequat dictum. Nullam non massa
						consectetur, luctus mi at, convallis sapien. Curabitur nisl dolor,
						euismod et quam at, placerat varius sapien. Nunc ac purus at felis
						pulvinar mollis eget vehicula nulla. Ut nibh sapien, suscipit sit
						amet velit sit amet, tristique accumsan lorem. Praesent placerat
						lorem diam, vel pretium diam porttitor nec.
					</Text>
				</Flex>
			</Container>
			<Separator orientation="horizontal" size="1" />
			<Flex
				style={{
					backgroundColor: "var(--accent-3)",
					height: "100vh",
					marginLeft: "-32px",
					marginRight: "-32px",
					padding: "2rem",
					top: 0,
					left: 0,
					position: "sticky",
				}}
			>
				<Flex direction="column" gapY="6">
					<Text size="7">
						Nunc condimentum arcu ac rhoncus viverra. Suspendisse accumsan
						tincidunt lectus, sit amet posuere mauris iaculis quis. Nullam odio
						metus, dapibus id eros in, lacinia hendrerit augue. Nullam hendrerit
						vel ante at dapibus. Sed euismod leo lectus, lobortis luctus enim
						convallis nec.{" "}
						<Link href="#" target="_blank">
							Aliquam erat volutpat. Vestibulum nunc nulla, egestas vitae metus
							sed, interdum suscipit sem.
						</Link>{" "}
						Ut viverra justo lectus, nec volutpat magna laoreet id. Nulla in
						arcu elit. Vivamus porta facilisis arcu, nec condimentum arcu
						pulvinar blandit. Fusce vehicula egestas velit, ac feugiat diam
						placerat eu. Pellentesque ac arcu id velit convallis consectetur.{" "}
						<Link
							href="https://www.radix-ui.com/themes/docs/theme/typography"
							target="_blank"
						>
							Typography
						</Link>{" "}
						and helps guide design decisions.
					</Text>
					<Text size="4">
						Fusce venenatis pharetra consequat. Vivamus non nibh elit. Fusce in
						pharetra augue. Nunc cursus et nunc vitae interdum. Nam nunc orci,
						placerat eu viverra sed, blandit vel lorem. Aliquam rhoncus rutrum
						ante, vitae laoreet quam semper at. Donec congue et massa ut
						elementum. Nullam feugiat iaculis massa. Etiam luctus arcu vitae
						venenatis auctor. Cras interdum rutrum finibus. Donec tempus odio
						vitae dui efficitur, eget dictum ipsum suscipit.
					</Text>
					<Heading size="6">
						Integer efficitur mi nec urna blandit, sed dapibus urna suscipit.{" "}
					</Heading>
					<Text size="4">
						Sed vehicula eleifend orci, at mollis turpis mattis quis. Maecenas
						in finibus metus. Maecenas ut efficitur neque, non convallis diam.
						Maecenas vehicula eros id velit consequat dictum. Nullam non massa
						consectetur, luctus mi at, convallis sapien. Curabitur nisl dolor,
						euismod et quam at, placerat varius sapien. Nunc ac purus at felis
						pulvinar mollis eget vehicula nulla. Ut nibh sapien, suscipit sit
						amet velit sit amet, tristique accumsan lorem. Praesent placerat
						lorem diam, vel pretium diam porttitor nec.
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}
