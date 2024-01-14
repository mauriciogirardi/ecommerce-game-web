import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
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
        xxsmall: '0.8rem',
        xsmall: '1.6rem',
        small: '2.4rem',
        medium: '3.2rem',
        large: '4.0rem',
        xlarge: '4.8rem',
        xxlarge: '5.6rem'
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
      }
    }
  }
}
export default config
