import { BannerSliderProps } from '.'

export const mockBannerSlider: BannerSliderProps = {
  banners: [
    {
      btnLabel: 'Buy now',
      btnLink: '/',
      img: '/assets/imgs/banner.png',
      title: 'Defy death',
      subtile:
        'Play the new <strong style="color:#F231A5;">CrashLands</strong> season',
      ribbon: {
        label: 'Promotion',
        color: 'secondary'
      }
    },
    {
      btnLabel: 'Buy now',
      btnLink: '/',
      img: '/assets/imgs/banner.png',
      title: 'Defy death 02',
      subtile: 'subtitle 02'
    },
    {
      btnLabel: 'Buy now',
      btnLink: '/',
      img: '/assets/imgs/banner.png',
      title: 'Defy death 03',
      subtile: 'subtitle 03'
    }
  ]
}
