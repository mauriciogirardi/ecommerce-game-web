import { Meta, StoryObj } from '@storybook/react'

import { Highlight } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  decorators: [
    (Story) => (
      <div className="flex h-screen items-center justify-center lg:mx-auto lg:max-w-[1040px] lg:px-4">
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof Highlight> = {
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see John's new adventure",
    btnLabel: 'Buy now',
    btnLink: '/buy',
    backgroundImage: '/assets/imgs/dead-bg.png'
  }
}

export const WithFloatImage: StoryObj<typeof Highlight> = {
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see John's new adventure",
    btnLabel: 'Buy now',
    btnLink: '/buy',
    backgroundImage: '/assets/imgs/dead-bg.png',
    floatImage: '/assets/imgs/dead-img.png'
  }
}

export const WithFloatRightPosition: StoryObj<typeof Highlight> = {
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see John's new adventure",
    btnLabel: 'Buy now',
    btnLink: '/buy',
    backgroundImage: '/assets/imgs/dead-bg.png',
    floatImage: '/assets/imgs/dead-img.png',
    float: 'right'
  }
}
