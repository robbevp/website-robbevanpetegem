const image = require("../image");

module.exports = {
  projectCard: async (description, title, img, quote = null, index) => {
    const renderedImage = await image.image(
      img.url,
      img.alt,
      "w-full my-auto col-span-7 md:col-span-3 md:order-2 p-4 rounded-lg"
    );

    const renderedQuote = quote
      ? `<q class="col-span-7 text-center text-2xl italic font-light pt-2 pb-4">${quote}</q>`
      : "";
    const cssClass =
      index % 2 === 0
        ? "md:col-start-4 lg:col-start-6"
        : "md:col-span-9 lg:col-span-7";

    return `
      <section
      id="${title.replace(/\s+/g, "").toLowerCase()}"
      class="row-span-2 col-span-12 grid grid-cols-7 border border-gray-400 rounded-lg ${cssClass}"
    >
      ${renderedImage}
      <div class="col-span-7 md:col-span-4 md:order-1 p-4">
        <h2 class="text-2xl text-green-600 pb-4">
          ${title}
        </h2>
        <div>${description}</div>
      </div>
      ${renderedQuote}
    </section>
    `;
  },
};
