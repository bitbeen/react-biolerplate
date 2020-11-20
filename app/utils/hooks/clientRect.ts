import { RefObject, useCallback, useLayoutEffect, useRef, useState } from 'react'
import debounce from 'lodash/debounce'

export const CLIENT_RECT_DEBOUNCE_INTERVAL = 200

function useClientRect<T extends HTMLElement>(
  debounceInterval: number = CLIENT_RECT_DEBOUNCE_INTERVAL,
  realtime: boolean = false
): [DOMRect, RefObject<T>] {
  const ref = useRef<T>(null)
  const [rect, setRect] = useState<DOMRect>(null)

  const resize = useCallback(
    debounce(() => {
      if (ref.current) {
        setRect(ref.current.getBoundingClientRect())
      }
    }, debounceInterval),
    [ref.current, realtime]
  )

  useLayoutEffect(() => {
    if (!ref.current) {
      return
    }
    resize()
    if (typeof ResizeObserver === 'function') {
      let resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(ref.current)
      return () => {
        resizeObserver.disconnect()
        resizeObserver = null
      }
    } else {
      window.addEventListener('resize', resize)
      return () => {
        window.removeEventListener('resize', resize)
      }
    }
  }, [ref.current])

  return [rect, ref]
}

export default useClientRect

// refs: https://github.com/rehooks/component-size/blob/master/index.js
