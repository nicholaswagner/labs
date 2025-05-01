import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { Color, Vector2 } from "three";
import fragmentShader from "../glsl/04.frag";
import vertexShader from "../glsl/04.vert";

const MyMaterial = shaderMaterial(
	{
		u_time: 0,
		u_resolution: new Vector2(window.innerWidth, window.innerHeight),
		u_color: new Color(0.0, 0.0, 0.0),
		u_mouse: new Vector2(),
	},
	vertexShader,
	fragmentShader,
);

extend({ MyMaterial });
export { MyMaterial };
