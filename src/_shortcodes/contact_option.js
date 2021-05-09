/* ----------------------------------------------------------------------------
creates a contact option
Liquid: {% contactOption "url", "text", "type", "urlBlank" %}
---------------------------------------------------------------------------- */
module.exports = {
  contactOption: async (url, text, type, urlBlank = false) => {
    const urlTarget = this.urlBlank ? "_blank" : "_self";
    const urlRel = this.urlBlank ? "noopener" : "";

    // These icons are from MDI, but we don't want to include the full library
    const paths = {
      email:
        "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z",
      phone:
        "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z",
      linkedin:
        "M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z",
    };

    return `<div class="col-span-1 flex contact">
              <a
                href="${url}"
                target="${urlTarget}"
                rel="${urlRel}"
                class="w-full md:w-auto md:mx-auto"
              >
                <button
                  class="contact__button flex mx-auto w-16 h-16 md:hover:w-full md:focus:w-full transition-all md:delay-1000 md:hover:delay-0 md:focus:delay-0 md:duration-500 md:ease-in-out rounded-full overflow-hidden md:border-2 border-green-600 md:border-gray-400 hover:border-green-600 active:border-green-800 focus:border-green-600 outline-none"
                >
                  <span role="img" aria-label="${type} icon" class="contact__icon p-3 rounded-full md:transition-all md:delay-1200 md:duration-200 md:hover:delay-0 md:focus:delay-0 md:ease-out">
                    <svg fill="currentColor" width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="${paths[type]}"></path>
                    </svg>
                  </span>
                  <span
                    class="my-auto pl-2 pr-5 lg:whitespace-nowrap hidden md:block ${
                      text.length < 20 ? "whitespace-nowrap" : ""
                    }"
                  >
                    ${text}
                  </span>
                </button>
              </a>
            </div>`;
  },
};
