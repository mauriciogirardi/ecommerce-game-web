import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  docs: {
    autodocs: 'tag'
  }
}
export default config
