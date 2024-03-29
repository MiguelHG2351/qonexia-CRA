import { useCallback, useState } from 'react'
import classNames from 'classnames'

import Image from 'next/image'
import { useIsMounted } from 'hooks/useIsMounted'

export default function ProductImage({
  src,
  alt = 'Cargando imagen',
  className,
  draggable,
}) {
  const [loaded, setLoaded] = useState(false)
  const isMounted = useIsMounted()

  const handleComplete = useCallback(
    () => (isMounted() ? setLoaded(true) : null),
    []
  )

  return (
    <div className={classNames(className)}>
      <Image
        src={src}
        width={290}
        height={311}
        alt={alt}
        priority={true}
        className={classNames(
          'duration-2000 ease-out-expo can-hover:group-hover:scale-110 transition-all',
          {
            '!opacity-0': !loaded,
          }
        )}
        onLoadingComplete={handleComplete}
        draggable={draggable}
      />
    </div>
  )
}
