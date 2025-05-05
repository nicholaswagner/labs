import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useEffect, useState } from "react";
import { LilGuiProvider } from "../components/ui/lil-gui-provider/LilGuiProvider";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	const location = useLocation();
	const showGui = location.searchStr.includes("showGui");
	const showDev = location.searchStr.includes("showDev");
	const showDebug = location.searchStr.includes("debug");

	const [enabledDevTools, setEnabledDevTools] = useState<{
		showGui: boolean;
		showDev: boolean;
		showDebug: boolean;
	}>({ showGui: false, showDev: false, showDebug: false });

	// biome-ignore lint/correctness/useExhaustiveDependencies:
	useEffect(() => {
		const storedState = {
			showGui: Boolean(localStorage.getItem("showGui")),
			showDev: Boolean(localStorage.getItem("showDev")),
			showDebug: Boolean(localStorage.getItem("showDebug")),
		};
		if (enabledDevTools !== storedState) setEnabledDevTools(storedState);
	}, [location.searchStr]);

	let result = <Outlet />;
	if (showDebug) {
		result = <div data-debug>{result}</div>;
	}
	if (showGui) {
		result = <LilGuiProvider>{result}</LilGuiProvider>;
	}
	if (showDev) {
		result = (
			<>
				<TanStackRouterDevtools />
				{result}
			</>
		);
	}

	return result;
}
