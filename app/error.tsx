'use client'

import { useEffect } from 'react'

export default function Error({ error }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <p>出现了一些问题 qwq，试试刷新一下~</p>
    </div>
  )
}
