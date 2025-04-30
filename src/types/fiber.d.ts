import type { Node } from "@react-three/fiber";
import type { MyMaterial } from "../materials/MyMaterial";

declare module "@react-three/fiber" {
	interface ThreeElements {
		myMaterial: Node<InstanceType<typeof MyMaterial>, typeof MyMaterial>;
	}
}
