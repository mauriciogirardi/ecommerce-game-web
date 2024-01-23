import { Meta, StoryObj } from '@storybook/react'

import { Footer } from '.'

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    backgrounds: {
      default: 'won-light'
    }
  },
  decorators: [
    (Story) => (
      <div className="flex h-screen flex-col justify-between p-4">
        <div />
        <div className="mx-auto w-full max-w-[1300px] ">
          <Story />
        </div>
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof Footer> = {}
