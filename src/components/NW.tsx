import type { SVGProps } from "react";

export const NW = ({ style, className }: SVGProps<SVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		style={style}
		className={className}
		viewBox="0 0 24 24"
		width="24"
		height="auto"
	>
		<title>NW</title>
		<path
			fill="currentColor"
			d="M14.9886 19 7.66679 6h1.83045l6.40656 11.7L22.3104 6H24l-7.3218 13h-1.6896Z"
		/>
		<path
			fill="currentColor"
			d="M7.32179 19 0 6h1.83045l6.40656 11.7L14.6436 6h1.6896L9.01143 19H7.32179Z"
		/>
		<path fill="currentColor" d="M7.66679 6h1.61344L2.28864 19H.742419" />
	</svg>
);
