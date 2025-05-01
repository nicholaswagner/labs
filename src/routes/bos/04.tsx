import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { createFileRoute } from "@tanstack/react-router";
import "../../materials/MyMaterial";
import { useEffect, useRef } from "react";
import { Vector2 } from "three";
export const Route = createFileRoute("/bos/04")({
	component: RouteComponent,
});

const MyShaderPlane = () => {
	const uMouse = new Vector2();

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const materialRef = useRef<any>(null);
	const { size } = useThree();
	const resolution = new Vector2(size.width, size.height);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (materialRef.current) {
				materialRef.current.uMouse.set(e.clientX, e.clientY);
			}
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	useEffect(() => {
		if (materialRef.current) {
			materialRef.current.u_time = 0;
		}
	}, []);

	useEffect(() => {
		if (materialRef.current) {
			materialRef.current.u_resolution = resolution;
		}
	}, [resolution]);

	useFrame((state) => {
		if (materialRef.current) {
			materialRef.current.u_time += state.clock.getElapsedTime();
		}
	});

	return (
		<mesh>
			<planeGeometry args={[2, 2]} />
			<myMaterial ref={materialRef} />
		</mesh>
	);
};

function RouteComponent() {
	return (
		<Canvas style={{ width: "100vw", height: "100vh" }}>
			<MyShaderPlane />
		</Canvas>
	);
}

// {/* <ambientLight intensity={0.1} /> */}
// {/* <directionalLight color="red" position={[0, 0, 5]} /> */}
