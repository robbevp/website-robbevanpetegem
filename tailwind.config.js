/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      spacing: {
        28: '7rem'
      },
      transitionDelay: {
        0: '0ms',
        800: '800ms',
        1200: '1200ms'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    transitionDelay: ['responsive', 'hover', 'focus'],
    width: ['responsive', 'hover', 'focus']
  },
  plugins: []
}
