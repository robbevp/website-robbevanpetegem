/* ----------------------------------------------------------------------------
creates a responsive image
Liquid: {% image "file.png", "alt text", "class", "sizes" %}
---------------------------------------------------------------------------- */
const Image = require("@11ty/eleventy-img");

module.exports = {
  image: async (
    src,
    alt,
    cssClass = null,
    imgClass = null,
    sizes = "(min-width: 45em) 50vw, 90vw"
  ) => {
    const format = /(?:\.([^.]+))?$/.exec(src)[1];
    const filePath = `src/_assets/images/${src}`;
    const pictureAttr = cssClass != null ? ` class="${cssClass}"` : "";
    const imgAttr = cssClass != null ? ` class="${imgClass}"` : "";
    const sizesAttr = sizes != null ? ` sizes="${sizes}"` : "";
    const metadata = await Image(filePath, {
      widths: [300, 600, 900, 1200],
      formats: ["webp", format],
      urlPath: "/assets/",
      outputDir: "./public/assets/",
      sharpJpegOptions: { quality: 60 },
      sharpWebpOptions: { quality: 40 },
    });
    const imgSrc = metadata[format][metadata[format].length - 1];

    return `<picture${pictureAttr}>
    ${Object.values(metadata)
      .map(
        (imageFormat) =>
          `  <source type="${
            imageFormat[0].sourceType
          }" srcset="${imageFormat
            .map((entry) => entry.srcset)
            .join(", ")}"${sizesAttr}>`
      )
      .join("\n")}
      <img
        ${imgAttr}
        src="${imgSrc.url}"
        width="${imgSrc.width}"
        height="${imgSrc.height}"
        alt="${alt}"
        loading="lazy"
        decoding="async">
    </picture>`;
  },
};
