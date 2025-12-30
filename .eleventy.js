import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { EleventyRenderPlugin, InputPathToUrlTransformPlugin, IdAttributePlugin } from 'npm:@11ty/eleventy';
import { eleventyImageTransformPlugin } from 'npm:@11ty/eleventy-img';
import markdownIt from 'npm:markdown-it';
import miniHtml from 'npm:html-minifier-next';
import yaml from 'npm:js-yaml';
import { parse as csvParse } from 'csv-parse/sync';

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

	// Preprocessors //
	eleventyConfig.addPreprocessor(
		'mdembedfile',
		'md',
		(data, content) => {
			console.log(`[mdembedfile] Processing: ${data.page.inputPath}`);

			// Regex to match markdown image syntax: ![alt text](file path)
			const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
			const inputDir = 'ournet'; // matches dir.input

			const output = content.replace(imageRegex, (match, altText, filePath) => {
				const isEmbeddableFile = filePath.endsWith('.html') || filePath.endsWith('.md') || filePath.endsWith('.liquid');

				if (!isEmbeddableFile) {
					console.log(`[mdembedfile]   Image (keeping): "${filePath}"`);
					return match;
				}

				console.log(`[mdembedfile]   Embed found: "${filePath}"`);

				// Resolve file path relative to the source file or input directory
				const sourceDir = path.dirname(data.page.inputPath);

				// Try relative to source file first
				const relativeToSource = path.resolve(sourceDir, filePath);
				// Try relative to input directory
				const relativeToInput = path.resolve(inputDir, filePath);

				let fullPath;
				if (existsSync(relativeToSource)) {
					fullPath = relativeToSource;
					console.log(`[mdembedfile]   Resolved (relative to source): ${fullPath}`);
				} else if (existsSync(relativeToInput)) {
					fullPath = relativeToInput;
					console.log(`[mdembedfile]   Resolved (relative to input dir): ${fullPath}`);
				} else {
					console.warn(`[mdembedfile]   File not found: "${filePath}"`);
					console.warn(`[mdembedfile]     Tried: ${relativeToSource}`);
					console.warn(`[mdembedfile]     Tried: ${relativeToInput}`);
					return match;
				}

				try {
					let fileContent = readFileSync(fullPath, 'utf8');
					console.log(`[mdembedfile]   Read ${fileContent.length} bytes`);

					// If it's a markdown file, render it
					if (filePath.endsWith('.md')) {
						fileContent = md.render(fileContent);
						console.log(`[mdembedfile]   Rendered markdown to HTML (${fileContent.length} bytes)`);
					}

					console.log(`[mdembedfile]   Embedded successfully`);
					return fileContent;
				} catch (err) {
					console.error(`[mdembedfile]   Error reading file: ${err.message}`);
					return match;
				}
			});
			return output;
		}
	);

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
