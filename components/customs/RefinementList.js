import { connectRefinementList } from 'react-instantsearch-dom'

function CustomRefinementList({ items, refine, createURL, className, style, onBlur }) {
    console.log('createURL: ', createURL)
    console.log(items)

    return (
        <div className={className} style={style}>
            {items.map(item => (
                <button
                    key={item.label}
                    onClick={() => refine(item.value)}
                    onBlur={onBlur}
                    className={`${className}__item`}
                >
                    {item.label}
                </button>
            ))}
        </div>
    )
}

export default connectRefinementList(CustomRefinementList)
