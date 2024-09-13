import yaml from 'js-yaml';
export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({'./assets/':'/'});
	eleventyConfig.addDataExtension('yaml,yml', contents => yaml.load(contents));
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
