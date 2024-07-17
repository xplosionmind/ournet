export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./ournet/style.css');
	eleventyConfig.addWatchTarget('./ournet/style.css');
	return {
		dir: {
			input: 'ournet',
			output: 'www',
			layouts: '_layouts'
		}
	};
}
