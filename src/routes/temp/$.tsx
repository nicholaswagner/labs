import { createFileRoute } from "@tanstack/react-router";
import { FullscreenDemo } from "../../components/page-templates/FullscreenDemo";

export const Route = createFileRoute("/temp/$")({
	component: RouteComponent,
});

function RouteComponent() {
	return <FullscreenDemo />;
}
