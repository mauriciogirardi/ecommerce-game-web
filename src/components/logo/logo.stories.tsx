import { Meta, StoryObj } from '@storybook/react'

import { Logo } from '.'

export default {
  title: 'Logo',
  component: Logo,
  decorators: [
    (Story) => (
      <div className="flex h-screen items-center justify-center p-4">
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof Logo> = {}
