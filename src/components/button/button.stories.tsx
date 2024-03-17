import { Meta, StoryObj } from '@storybook/react'
import { BadgePlusIcon, Car } from 'lucide-react'

import { Button } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    icon: {
      type: 'symbol',
      defaultValue: '<Icon />'
    },
    size: { control: 'radio', options: ['default', 'large', 'small', 'icon'] },
    variant: { control: 'radio', options: ['default', 'ghost', 'icon'] }
  },
  decorators: [
    (Story) => (
      <div className="flex h-screen items-center justify-center p-4">
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Click Here'
  }
}

export const Disabled: StoryObj<typeof Button> = {
  args: {
    children: 'Click Here',
    size: 'large',
    disabled: true
  }
}

export const Icon: StoryObj<typeof Button> = {
  args: {
    icon: <BadgePlusIcon />,
    children: 'Buy now'
  }
}

export const Ghost: StoryObj<typeof Button> = {
  args: {
    icon: <Car />,
    children: 'Buy now',
    variant: 'ghost',
    size: 'large'
  }
}
