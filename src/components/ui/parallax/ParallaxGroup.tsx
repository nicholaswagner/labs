import { clsx } from "clsx";
import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import styles from "./styles.module.css";

export const ParallaxGroup = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement> & { showDebug?: boolean }
>(({ children, className, showDebug = false, style, ...rest }, ref) => {
	const classnames = clsx(styles.parallaxGroup, className);
	const debugStyle = showDebug
		? { transform: "translate3d(300px,0,-800px) rotateY(30deg)" }
		: {};
	return (
		<div
			ref={ref}
			className={classnames}
			style={{
				...style,
				...debugStyle,
			}}
			{...rest}
		>
			{children}
		</div>
	);
});

ParallaxGroup.displayName = "ParallaxGroup";
