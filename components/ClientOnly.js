import { useEffect, useState } from 'react'

export default function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    console.log('ClientOnly: hasMounted', window)
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <main {...delegated}>{children}</main>
}
