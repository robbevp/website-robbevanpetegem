// Based on https://github.com/11ty/eleventy-base-blog/blob/main/eleventy.config.drafts.js
export function eleventyComputedPermalink() {
  // When using `addGlobalData` and you *want* to return a function, you must nest functions like this.
  // `addGlobalData` acts like a global data file and runs the top level function it receives.
  return (data) => {
    // Always skip during non-watch/serve builds
    if (data.draft && !process.env.BUILD_DRAFTS) {
      return false;
    }

    return data.permalink;
  };
}

export function eleventyComputedExcludeFromCollections() {
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

export default function draftsPlugin(config) {
  config.addGlobalData("eleventyComputed.permalink", eleventyComputedPermalink);
  config.addGlobalData(
    "eleventyComputed.eleventyExcludeFromCollections",
    eleventyComputedExcludeFromCollections,
  );

  let logged = false;
  config.on("eleventy.before", ({ runMode }) => {
    let text = "Excluding";
    // Only show drafts in serve/watch modes
    if (runMode === "serve" || runMode === "watch") {
      process.env.BUILD_DRAFTS = true;
      text = "Including";
    }

    // Only log once.
    if (!logged) {
      // eslint-disable-next-line no-console
      console.log(`[11ty] ${text} drafts.`);
      logged = true;
    }
  });
}
