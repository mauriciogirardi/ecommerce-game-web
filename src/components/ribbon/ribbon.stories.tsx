import { Meta, StoryObj } from '@storybook/react'

import { Ribbon } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  decorators: [
    (Story) => (
      <div
        className="flex h-screen items-center justify-center
       p-4"
      >
        <div className="relative h-96 w-96 bg-white">
          <Story />
        </div>
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof Ribbon> = {
  args: {
    children: 'Best Seller'
  }
}
