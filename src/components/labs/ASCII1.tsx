import { AsciiRenderer } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import type { ThreeElements } from "@react-three/fiber";
import { useRef, useState } from "react";
import type { Mesh } from "three";

export const ASCII1 = () => {
	const [tweakables, setTweakables] = useState({
		showSnark: true,
		color: "#ffffff",
		rotationSpeedX: 0.5,
		rotationSpeedY: 0.5,
		radius: 5,
		tube: 0.05,
		ambientIntensity: 0.1,
		spotIntensity: Math.PI,
		backgroundColor: "#000000",
		showAscii: true,
		useMeshColor: false,
	});

	function Torusknot(_props: ThreeElements["mesh"]) {
		const meshRef = useRef<Mesh | null>(null);
		useFrame((_state, delta) => {
			if (!meshRef.current) return;
			meshRef.current.rotation.x -= delta * tweakables.rotationSpeedX;
			meshRef.current.rotation.y += delta * tweakables.rotationSpeedY;
		});

		return (
			<mesh ref={meshRef} {..._props}>
				<torusKnotGeometry
					args={[tweakables.radius, tweakables.tube, 128, 32]}
				/>
				<meshStandardMaterial color={tweakables.color} />
			</mesh>
		);
	}

	return (
		<Canvas
			style={{
				width: "100%",
				height: "100%",
				zIndex: -1,
				position: "absolute",
				top: 0,
				left: 0,
			}}
		>
			<ambientLight intensity={tweakables.ambientIntensity} />
			<spotLight
				position={[10, 10, 10]}
				angle={0.15}
				penumbra={1}
				decay={2}
				intensity={tweakables.spotIntensity}
			/>
			<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
			<color attach="background" args={["blue"]} />
			<Torusknot />
			<Torusknot />
			{tweakables.showAscii && (
				<AsciiRenderer
					renderIndex={1}
					fgColor={
						tweakables.useMeshColor ? tweakables.color : "var(--accent-9)"
					}
					bgColor="transparent"
					characters="▀
9600	▁
9601	▂
9602	▃
9603	▄
9604	▅
9605	▆
9606	▇
9607	█
9608	▉
9609	▊
9610	▋
9611
▌
9612	▍
9613	▎
9614	▏
9615	▐
9616	░
9617	▒
9618	▓
9619	▔
9620	▕
9621	▖
9622	▗
9623
▘
9624	▙
9625	▚
9626	▛
9627	▜
9628	▝
9629	▞
9630	▟"
				/>
			)}
		</Canvas>
	);
};
