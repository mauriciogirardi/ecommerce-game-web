import { GameCardSliderProps } from '.'

export const mockGameCardSlider: GameCardSliderProps = {
  games: [
    {
      developer: 'Other Ocean',
      title: 'Population Zero',
      price: 215,
      img: '/assets/imgs/img-5.png',
      favorite: false
    },
    {
      developer: 'Developer 2',
      title: 'Title 2',
      price: 356,
      img: '/assets/imgs/img-1.png',
      priceDiscount: 132
    },
    {
      developer: 'Developer 3',
      title: 'Title 3',
      price: 215,
      img: '/assets/imgs/img-2.png',
      favorite: false
    },
    {
      developer: 'Developer 4',
      title: 'Title 4',
      price: 215,
      img: '/assets/imgs/img-3.png',
      favorite: true,
      ribbon: {
        label: 'Promotion',
        size: 'small',
        color: 'secondary'
      }
    },
    {
      developer: 'Developer 5',
      title: 'Title 5',
      price: 215,
      img: '/assets/imgs/img-4.png',
      favorite: false
    },
    {
      developer: 'Developer 6',
      title: 'Title 6',
      price: 215,
      img: '/assets/imgs/img-6.png',
      favorite: false
    }
  ]
}
