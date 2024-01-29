import { Meta, StoryObj } from '@storybook/react'

import { GameCard } from '.'
import { mockGameCard } from './mock-game-card'

export default {
  title: 'GameCard',
  component: GameCard,
  decorators: [
    (Story) => (
      <div className="flex h-screen items-center justify-center">
        <div className="w-[300px]">
          <Story />
        </div>
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof GameCard> = {
  args: {
    ...mockGameCard
  }
}

export const WithRibbon: StoryObj<typeof GameCard> = {
  args: {
    ...mockGameCard,
    ribbon: {
      label: 'Promotion',
      color: 'secondary'
    }
  }
}

export const WithDiscountPrice: StoryObj<typeof GameCard> = {
  args: {
    ...mockGameCard,
    priceDiscount: 350
  }
}
