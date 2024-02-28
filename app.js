const dups = [1, 2, 3, 1];
const noDups = [1, 3, 4, 78];

//  [1, 2, 3, 4]

// 'ref'

// [1, 2, 3] => true,
// [1, 2, 3] => false

const hasDuplicate = (arr) => {
	const uniqueEls = new Set();

	for (const element of arr) {
		if (uniqueEls.has(element)) {
			return true;
		}
		uniqueEls.add(element);
	}
	return false;
};

const vowelCount = (str) => {
	const vowels = "aeiou";
	const vowelMap = new Map();

	const lowerStr = str.toLowerCase();

	for (const char of lowerStr) {
		if (vowels.includes(char)) {
			vowelMap.set(char, (vowelMap.get(char) || 0) + 1);
		}
	}
	return vowelMap;
};
