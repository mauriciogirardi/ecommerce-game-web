import { Meta, StoryObj } from '@storybook/react'

import { Banner } from '.'
import { mockBanner } from './mock-banner'

export default {
  title: 'Banner',
  component: Banner,
  decorators: [
    (Story) => (
      <div className="lg:flex lg:h-screen lg:items-center lg:justify-center">
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof Banner> = {
  args: {
    ...mockBanner
  }
}

export const WithRibbon: StoryObj<typeof Banner> = {
  args: {
    ...mockBanner,
    ribbon: {
      label: 'My Ribbon',
      color: 'secondary',
      size: 'default'
    }
  }
}
