import { useCallback, useState } from 'react'
import classNames from 'classnames'

import Image from 'next/image'
import { useIsMounted } from 'hooks/useIsMounted'

export default function ProductImage({ src, alt = '', className, ...delegated }) {
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
                layout="fixed"
                className={classNames(
                    'transition-all duration-2000 ease-out-expo can-hover:group-hover:scale-110',
                    {
                        '!opacity-0': !loaded,
                    }
                )}
                onLoadingComplete={handleComplete}
                {...delegated}
            />
        </div>
    )
}