import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/app/**/*.tsx',
    './src/templates/**/*.tsx'
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'var(--font-poppins)'
      },
      container: {
        center: true,
        padding: '0',
        screens: {
          '2xl': '1300px'
        }
      },

      colors: {
        primary: '#F231A5',
        secondary: '#3CD3C1',
        mainBg: '#06092B',
        white: '#FAFAFA',
        black: '#030517',
        lightGray: '#EAEAEA',
        gray: '#8F8F8F',
        darkGray: '#2E2F42'
      },
      fontWeight: {
        light: '300',
        normal: '400',
        bold: '600'
      },

      grid: {
        container: '81.25',
        gutter: '2rem'
      },

      backgroundImage: {
        linear:
          'linear-gradient(179deg, #FF5F5F -14.51%, #F062C0 102.86%, #F23131 102.86%)',
        skeleton:
          'linear-gradient(to right,#f6f7f8 0%,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%)'
      },

      animation: {
        'hover-link': 'hover-link 0.2s forwards',
        skeleton: 'skeleton 1s linear infinite forwards'
      },

      keyframes: {
        'hover-link': {
          from: { width: '0' },
          to: { width: '100%' }
        },
        skeleton: {
          '0%': { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' }
        }
      },

      transitionProperty: {
        menu: 'opacity 0.3s ease-in-out',
        link: 'transform 0.3s ease-in-out'
      }
    }
  }
}
export default config
