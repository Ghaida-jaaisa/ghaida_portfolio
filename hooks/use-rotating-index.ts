'use client'

import { useEffect, useState } from 'react'

export function useRotatingIndex(length: number, intervalMs: number) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (length < 2) return
    const interval = window.setInterval(() => setIndex((current) => (current + 1) % length), intervalMs)
    return () => window.clearInterval(interval)
  }, [length, intervalMs])

  return index
}
