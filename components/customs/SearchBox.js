import { connectSearchBox } from 'react-instantsearch-dom'

function CustomSearchBox({ refine, placeholder, className, styleForm, onBlur, children }) {
    return (
        <form action="" role="search" className={styleForm}>
            <input
                id='algolia_search'
                type="search"
                autoCorrect="true"
                autoComplete="off"
                required={true}
                onBlur={onBlur}
                className={className}
                placeholder={placeholder}
                onChange={event => refine(event.currentTarget.value)}
            />
            {children}
        </form>
    )
}

export default connectSearchBox(CustomSearchBox)
