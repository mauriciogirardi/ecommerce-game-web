import { useEffect, useState } from 'react'

type Breakpoints = {
  xl: boolean
  sm: boolean
  md: boolean
  lg: boolean
  '2xl': boolean
}

export const useBreakpoints = (): Breakpoints => {
  const [breakpoints, setBreakpoints] = useState<Breakpoints>({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    '2xl': false
  })

  useEffect(() => {
    const updateBreakpoints = () => {
      setBreakpoints({
        '2xl': window.matchMedia('(min-width: 1536px)').matches,
        sm: window.matchMedia('(min-width: 640px)').matches,
        md: window.matchMedia('(min-width: 768px)').matches,
        lg: window.matchMedia('(min-width: 1024px)').matches,
        xl: window.matchMedia('(min-width: 1280px)').matches
      })
    }

    window.addEventListener('resize', updateBreakpoints)
    updateBreakpoints()

    return () => {
      window.removeEventListener('resize', updateBreakpoints)
    }
  }, [])

  return breakpoints
}
