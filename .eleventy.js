const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const imageShortcode = require('./src/_11ty/shortcodes/image-shortcode');
const markdownLibrary = require('./src/_11ty/libraries/markdown-library');
const markdownItAnchor = require('markdown-it-anchor');
const markdownIt = require('markdown-it');
const pluginTOC = require('eleventy-plugin-toc');
const minifyHtml = require('./src/_11ty/utils/minify-html');
const markdownFilter = require('./src/_11ty/filters/markdown-filter');
const svgFilter = require('./src/_11ty/filters/svg-filter');
const browserSyncConfig = require('./src/_11ty/utils/browser-sync-config');
const { readableDateFilter, machineDateFilter } = require('./src/_11ty/filters/date-filters');

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3'],
    wrapper: 'nav',
    wrapperClass: 'toc',
  });
  
  // Markdown
  eleventyConfig.setLibrary(
    'md',
    markdownIt().use(markdownItAnchor)
  );


  // Filters
  eleventyConfig.addFilter('markdown', markdownFilter);
  eleventyConfig.addFilter('readableDate', readableDateFilter);
  eleventyConfig.addFilter('machineDate', machineDateFilter);
  eleventyConfig.addFilter('svg', svgFilter);
 
  // Shortcodes
  eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);

  // Libraries
  eleventyConfig.setLibrary('md', markdownLibrary);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // Trigger a build when files in this directory change
  eleventyConfig.addWatchTarget('./src/assets/scss/');

  // Minify HTML output
  eleventyConfig.addTransform('htmlmin', minifyHtml);

  // Don't process folders with static assets
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/assets/img');
  eleventyConfig.addPassthroughCopy('./src/assets/fonts');
  eleventyConfig.addPassthroughCopy('./src/assets/zip');

  // Allow Turbolinks to work in development mode
  eleventyConfig.setBrowserSyncConfig(browserSyncConfig);

  return {
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      layouts: "_layouts"
    },
  };
};
