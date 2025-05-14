import { Flex } from "@radix-ui/themes";

export const Leetcode = () => {
	const s = ["h", "e", "l", "l", "o"];
	const s2 = ["H", "a", "n", "n", "a", "h"];

	const reverseString = (s: string[]) => {
		let left = 0;
		let right = s.length - 1;

		while (left < right) {
			[s[left], s[right]] = [s[right], s[left]];
			left++;
			right--;
		}
	};

	reverseString(s2);

	return <Flex m={{ initial: "6" }}>{JSON.stringify(s)}</Flex>;
};
