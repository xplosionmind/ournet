import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { EleventyRenderPlugin, InputPathToUrlTransformPlugin, IdAttributePlugin } from 'npm:@11ty/eleventy';
import { eleventyImageTransformPlugin } from 'npm:@11ty/eleventy-img';
import markdownIt from 'npm:markdown-it';
import miniHtml from 'npm:html-minifier-next';
import yaml from 'npm:js-yaml';
import { parse as csvParse } from 'csv-parse/sync';
import validateHtml from 'npm:@saiballo/eleventy-plugin-validate-html'

const md = markdownIt({
	html: true,
	linkify: true,
	typographer: true
});

export default function (eleventyConfig) {

	eleventyConfig.setDataFileBaseName('root');
	eleventyConfig.addPassthroughCopy({ './ournet/assets/': '/' });
	eleventyConfig.addPassthroughCopy('./ournet/style.css');
	eleventyConfig.addPassthroughCopy('./ournet/print.css');
	eleventyConfig.addWatchTarget('./ournet/*.css');
	eleventyConfig.setLibrary('md', md);

	// Data files //
	eleventyConfig.addDataExtension('yaml,yml', contents => yaml.load(contents));
	eleventyConfig.addDataExtension('csv', contents => csvParse(contents, {
		columns: true,
		skip_empty_lines: true
	}));

	// Plugins //
	eleventyConfig.addPlugin(EleventyRenderPlugin);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin, {
		extensions: 'html,liquid,md',
	});
	eleventyConfig.addPlugin(IdAttributePlugin, {
		selector: 'h2,h3,h4,h5,h6'
	});
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		extensions: 'html',
		formats: ['webp', 'auto'],
		defaultAttributes: {
			loading: 'lazy',
			decoding: 'async',
			sizes: 'auto'
		},
		outputDir: './www/img/'
	});

	// Filters //
	eleventyConfig.addFilter('markdownify', function (content) {
		return md.renderInline(content);
	});
	eleventyConfig.addFilter('obfuscateEmail', (email) => {
		return email.split('').map(function (char) {
			return `&#${char.charCodeAt(0)};`;
		}).join('');
	});

	// Production-only //
	if (process.env.ELEVENTY_ENV != 'development') {
		// HTML validator //
		eleventyConfig.addPlugin(validateHtml)
		// Minify output //
		eleventyConfig.addTransform(miniHtml, async function (content) {
			if ((this.page.outputPath || '').endsWith('.html')) {
				const minified = miniHtml.minify(content, {
					collapseBooleanAttributes: true,
					collapseWhitespace: true,
					decodeEntities: true,
					minifyCSS: true,
					minifyJS: true,
					noNewlinesBeforeTagClose: true,
					quoteCharacter: "'",
					removeComments: true,
					removeEmptyAttributes: true,
					removeRedundantAttributes: true,
					sortAttributes: true,
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
