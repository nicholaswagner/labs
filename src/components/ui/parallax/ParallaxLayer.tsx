import { clsx } from "clsx";
import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import styles from "./styles.module.css";

type ParallaxLayerVariant = "base" | "background" | "deep" | "foreground";

const VariantStyles: Record<ParallaxLayerVariant, string> = {
	base: styles.parallaxLayerBase,
	background: styles.parallaxLayerBackground,
	deep: styles.parallaxLayerDeep,
	foreground: styles.parallaxLayerForeground,
};

export const ParallaxLayer = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement> & { variant?: ParallaxLayerVariant }
>(({ children, className, variant = "base", ...rest }, ref) => {
	const variantStyle = VariantStyles[variant];
	const classnames = clsx(styles.parallaxLayer, variantStyle, className);
	return (
		<div ref={ref} className={classnames} {...rest}>
			{children}
		</div>
	);
});

ParallaxLayer.displayName = "ParallaxLayer";
