const glob = require('fast-glob');

module.exports = function(eleventyConfig) {

  /* --------------------------------------------------------------------------
  filters & shortcodes
  -------------------------------------------------------------------------- */
  glob.sync(['src/_filters/*.js']).forEach(file => {
    let filters = require('./' + file);
    Object.keys(filters).forEach(name => eleventyConfig.addFilter(name, filters[name]));
  });

  glob.sync(['src/_shortcodes/*.js']).forEach(file => {
    let shortcodes = require('./' + file);
    Object.keys(shortcodes).forEach(name => eleventyConfig.addShortcode(name, shortcodes[name]));
  });
  
  glob.sync(['src/_shortcodes/paired/*.js']).forEach(file => {
    let shortcodes = require('./' + file);
    Object.keys(shortcodes).forEach(name => eleventyConfig.addPairedShortcode(name, shortcodes[name]));
  });

  /* --------------------------------------------------------------------------
  BrowserSync settings
  -------------------------------------------------------------------------- */
  eleventyConfig.setBrowserSyncConfig({
    files: [ // watch the files generated elsewhere
      'public/assets/*.css',
      'public/assets/*.js',
      'public/assets',
      '!public/assets/**/**.map'
    ],
    ui: false,
    logPrefix: false,
    logFileChanges: false,
    ghostMode: false,
  });

  /* --------------------------------------------------------------------------
  MarkdownIt settings
  -------------------------------------------------------------------------- */
  let markdownIt = require('markdown-it');
  let markdownItOptions = {
    html: true, // allow HTML markup
    typographer: true // fancy quotes
  };

  /* --------------------------------------------------------------------------
  11ty settings
  -------------------------------------------------------------------------- */
  eleventyConfig.setLibrary('md', markdownIt(markdownItOptions));
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addPassthroughCopy({ 'src/_assets/fonts': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/_assets/images': 'assets' });

  return {
    dir: {
      input: 'src',
      output: 'public',
      layouts: '_layouts',
      includes: '_includes',
      data: '_data',
    },
  };
}
