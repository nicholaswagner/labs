import { CV } from "@/pages/cv/CV";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cv/")({
	component: CV,
});
