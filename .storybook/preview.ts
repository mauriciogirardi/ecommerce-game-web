import '../src/app/globals.css'

import { withThemeByClassName } from '@storybook/addon-themes'
import type { Parameters } from '@storybook/react'

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark'
    },
    defaultTheme: 'dark'
  })
]

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark',
    values: [
      {
        name: 'won-light',
        value: '#FAFAFA'
      },
      {
        name: 'won-dark',
        value: '#06092B'
      }
    ]
  }
}
