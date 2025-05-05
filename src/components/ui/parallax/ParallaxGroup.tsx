import { clsx } from "clsx";
import { forwardRef, useEffect, useState } from "react";
import type { CSSProperties, HTMLAttributes } from "react";
import styles from "./styles.module.css";

export const ParallaxGroup = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement> & { showDebug?: boolean }
>(({ children, className, showDebug = false, ...rest }, ref) => {
	const debugStyles: CSSProperties = showDebug
		? {
				transform: "translate3d(0px, 0, -300px) rotateY(30deg);",
			}
		: {};
	const classnames = clsx(styles.parallaxGroup, className, debugStyles);

	useEffect(() => {
		console.log(showDebug);
	}, [showDebug]);

	return (
		<div ref={ref} className={classnames} style={debugStyles} {...rest}>
			{children}
		</div>
	);
});

ParallaxGroup.displayName = "ParallaxGroup";
