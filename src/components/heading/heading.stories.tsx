import { Meta, StoryObj } from '@storybook/react'

import { Heading } from '.'

export default {
  title: 'Heading',
  component: Heading,
  decorators: [
    (Story) => (
      <div className="flex h-screen items-center justify-center p-4">
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof Heading> = {
  args: {
    children: 'Heading here'
  }
}

export const LineLeft: StoryObj<typeof Heading> = {
  args: {
    children: 'Heading here',
    line: 'left'
  }
}

export const LineBottom: StoryObj<typeof Heading> = {
  args: {
    children: 'Heading here',
    line: 'bottom'
  }
}
