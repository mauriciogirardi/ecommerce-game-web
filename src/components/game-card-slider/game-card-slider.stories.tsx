import { Meta, StoryObj } from '@storybook/react'

import { GameCardSlider } from '.'
import { mockGameCardSlider } from './mock-game-card-slider'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[1300px]">
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof GameCardSlider> = {
  args: {
    ...mockGameCardSlider
  }
}
