import { Meta, StoryObj } from '@storybook/react'

import { BannerSlider } from '.'
import { mockBannerSlider } from './mock-banner-slider'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[1300px]">
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof BannerSlider> = {
  args: {
    ...mockBannerSlider
  }
}
