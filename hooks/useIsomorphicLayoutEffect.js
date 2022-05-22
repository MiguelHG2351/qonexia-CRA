import { useEffect, useLayoutEffect } from 'react'
import { isBrowser } from 'src/utils/browser'

export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect
