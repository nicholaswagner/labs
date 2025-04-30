import { Outlet, createFileRoute } from "@tanstack/react-router";

import { Container } from "@radix-ui/themes";
import { Nav } from "../components/Nav";

export const Route = createFileRoute("/_")({
	component: RouteComponent,
});

/**
 *
 * Think of this as the catch-all template wrapper for the app
 * This will add the Navigation, include any child routes, and right now adds the tanstack router devtools
 */

function RouteComponent() {
	return (
		<>
			<Nav />
			<Container size="4">
				<Outlet />
			</Container>
		</>
	);
}
