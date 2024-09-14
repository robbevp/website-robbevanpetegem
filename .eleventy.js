import glob from "fast-glob";
import { EleventyI18nPlugin } from "@11ty/eleventy";
import lightningCSS from "@11tyrocks/eleventy-plugin-lightningcss";
import yaml from "js-yaml";
import draftsPlugin from "./11ty/plugins/drafts.js";

const INPUT_DIR = "src";
const OUTPUT_DIR = "dist";
const PATH_PREFIX = "/";

function eleventyComputedExcludeFromCollections() {
  // When using `addGlobalData` and you *want* to return a function, you must nest functions like this.
  // `addGlobalData` acts like a global data file and runs the top level function it receives.
  return (data) => {
    // Always exclude from non-watch/serve builds
    if (data.draft && !process.env.BUILD_DRAFTS) {
      return true;
    }

    return data.eleventyExcludeFromCollections;
  };
}

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(draftsPlugin);
  eleventyConfig.addPlugin(lightningCSS);

  eleventyConfig.addPlugin(EleventyI18nPlugin, { defaultLanguage: "nl" });
  eleventyConfig.addDataExtension("yml,yaml", yaml.load);
  eleventyConfig.addGlobalData(
    "eleventyComputed.eleventyExcludeFromCollections",
    eleventyComputedExcludeFromCollections,
  );

  // filters & shortcodes
  await Promise.all(
    glob
      .sync(["11ty/shortcodes.js", "11ty/shortcodes/*.js"])
      .map(async (file) => {
        let shortcodes = await import("./" + file);
        Object.keys(shortcodes).forEach((name) =>
          eleventyConfig.addShortcode(name, shortcodes[name]),
        );
      }),
  );
  await Promise.all(
    glob.sync(["11ty/filters.js", "11ty/filters/*.js"]).map(async (file) => {
      let filters = await import("./" + file);
      Object.keys(filters).forEach((name) =>
        eleventyConfig.addFilter(name, filters[name]),
      );
    }),
  );

  // copy through public folder
  eleventyConfig.addPassthroughCopy({ public: "." });
}

export const config = {
  templateFormats: ["html", "md", "liquid"],
  pathPrefix: PATH_PREFIX,
  dir: {
    input: INPUT_DIR,
    output: OUTPUT_DIR,
  },
};
