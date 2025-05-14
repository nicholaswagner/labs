import { Leetcode } from "@/pages/leetcode/Leetcode";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_/leetcode/")({
	component: Leetcode,
});
