import Image from "@11ty/eleventy-img";

export async function image(src, alt, additionalClass = "", quality = "low") {
  let format = /(?:\.([^.]+))?$/.exec(src)[1];
  const filePath = `src/_assets/images/${src}`;

  const metadata = await Image(filePath, {
    widths: [500],
    formats: ["webp", format],
    urlPath: "/assets/",
    outputDir: "./dist/assets/",
    sharpJpegOptions: { quality: quality == "low" ? 70 : 95 },
    sharpWebpOptions: { quality: quality == "low" ? 50 : 85 },
  });

  /* change format to its canonical name */
  if (format === "jpg") {
    format = "jpeg";
  }

  const imgSrc = metadata[format][metadata[format].length - 1];

  return `
    <img
      class="image ${additionalClass}"
      src="${imgSrc.url}"
      alt="${alt}"
      decoding="async">
  `;
}
