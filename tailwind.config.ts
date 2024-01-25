import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'var(--font-poppins)'
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
      fontSize: {
        xsmall: '0.75rem', // 12px
        small: '0.875rem', // 14px
        medium: '1rem', // 16px
        large: '1.125rem', // 18px
        xlarge: '1.25rem', // 20px
        xxlarge: '1.75rem' // 28px
      },
      fontWeight: {
        light: '300',
        normal: '400',
        bold: '600'
      },
      borderRadius: {
        radius: '0.25rem' // 4 px
      },
      grid: {
        container: '81.25',
        gutter: '2rem'
      },
      spacing: {
        xxsmall: '0.5rem', // 8px
        xsmall: '1rem', // 16px
        small: '1.5rem', // 20px
        medium: '2rem', // 32px
        large: '2.5rem', // 40px
        xlarge: '3rem', // 48px
        xxlarge: '3.5rem' // 56px
      },
      zIndex: {
        base: '10',
        menu: '20',
        overlay: '30',
        modal: '40',
        alwaysOnTop: '50'
      },

      backgroundImage: {
        linear:
          'linear-gradient(179deg, #FF5F5F -14.51%, #F062C0 102.86%, #F23131 102.86%)'
      },

      animation: {
        'hover-link': 'hover-link 0.2s forwards'
      },

      keyframes: {
        'hover-link': {
          from: { width: '0' },
          to: { width: '100%' }
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
