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
    minHeight: {
      0: '0',
      80: '20rem',
      full: '100%',
      screen: '100vw'
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      screen: '100vw',
      '120vw': '120vw'
    },
    extend: {
      spacing: {
        28: '7rem',
        84: '21rem'
      },
      transitionDelay: {
        0: '0ms',
        800: '800ms',
        1200: '1200ms'
      },
      zIndex: {
        '-10': '-10'
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
