import {
	EleventyRenderPlugin,
	InputPathToUrlTransformPlugin,
	IdAttributePlugin,
} from '@11ty/eleventy';
import yaml from 'js-yaml';

import markdownIt from 'markdown-it';
let mdIt = markdownIt({
	html: true,
	breaks: true,
	linkify: true,
});

export default function (eleventyConfig) {
	eleventyConfig.setLibrary('md', mdIt);
	eleventyConfig.addDataExtension('yaml,yml', contents => yaml.load(contents));

	eleventyConfig.addPassthroughCopy({ './assets/': '/' });
	eleventyConfig.addPassthroughCopy('./ournet/style.css');
	eleventyConfig.addWatchTarget('./ournet/style.css');

	eleventyConfig.addFilter('markdownify', function (content) {
		return mdIt.renderInline(content);
	});

	eleventyConfig.addPlugin(EleventyRenderPlugin);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin, {
		extensions: 'html,liquid,md',
	});
	eleventyConfig.addPlugin(IdAttributePlugin);

	return {
		dir: {
			input: 'ournet',
			output: 'www',
			layouts: '_layouts',
		},
	};
}
