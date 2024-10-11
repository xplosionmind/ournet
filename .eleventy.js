import {
	EleventyRenderPlugin,
	InputPathToUrlTransformPlugin,
	IdAttributePlugin,
} from '@11ty/eleventy';
import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import yaml from 'js-yaml';
import { parse as csvParse } from 'csv-parse/sync';
import miniHtml from 'html-minifier-terser';

import markdownIt from 'markdown-it';
let mdIt = markdownIt({
	html: true,
	breaks: true,
	linkify: true,
});

export default function (eleventyConfig) {
	eleventyConfig.setLibrary('md', mdIt);
	eleventyConfig.addDataExtension('yaml,yml', contents => yaml.load(contents));
	eleventyConfig.addDataExtension('csv', contents => csvParse(contents, {
		columns: true,
		skip_empty_lines: true
	}));

	eleventyConfig.setDataFileBaseName('root');

	eleventyConfig.addPassthroughCopy({ './ournet/assets/': '/' });
	eleventyConfig.addPassthroughCopy('./ournet/style.css');
	eleventyConfig.addPassthroughCopy('./ournet/print.css');
	eleventyConfig.addWatchTarget('./ournet/*.css');

	eleventyConfig.addFilter('markdownify', function (content) {
		return mdIt.renderInline(content);
	});

	eleventyConfig.addPlugin(EleventyRenderPlugin);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin, {
		extensions: 'html,liquid,md',
	});
	eleventyConfig.addPlugin(IdAttributePlugin);
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		extensions: 'html',
		formats: ['webp', 'auto'],
		defaultAttributes: {
			loading: 'lazy',
			decoding: 'async'
		},
		outputDir: './www/img/'
	});

	if (process.env.ELEVENTY_ENV != 'development') {
		// Minify output //
		eleventyConfig.addTransform(miniHtml, function (content) {
			if ((this.page.outputPath || '').endsWith('.html')) {
				let minified = miniHtml.minify(content, {
					collapseWhitespace: true,
					decodeEntities: true,
					minifyCSS: true,
					minifyJS: true,
					minifyURLs: true,
					removeComments: true,
					removeEmptyAttributes: true,
					useShortDoctype: true,
				});
				return minified;
			}
			return content;
		});
	}

	return {
		dir: {
			input: 'ournet',
			output: 'www',
			layouts: '_layouts',
		},
	};
}
