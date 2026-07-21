'use client'

import { useEffect } from 'react'
import { bind } from 'cuelume'

export default function CuelumeInit() {
  useEffect(() => {
    bind()
  }, [])

  return null
}
