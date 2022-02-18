import { connectStateResults } from 'react-instantsearch-dom'
import sortCategories from 'utils/sortCategories'

function CustomHist({ searchState, searchResults, hitComponent: HitComponent }) {
    const validQuery = searchState.query && searchState.query.length >= 3
    const categoriesResults = validQuery ? sortCategories(searchResults) : {}

    console.log(categoriesResults)

    return (
        <>
            {searchResults?.hits.length === 0 && validQuery && (
                <div className="no-results">
                    <p>
                        No results found for{' '}
                        <strong>{searchState.query}</strong>
                    </p>
                </div>
            )}
            {
                Object.keys(categoriesResults).map(category => (
                    <div key={category} className="category">
                        <h2>{category}</h2>
                        <div className="products">
                            {categoriesResults[category].map(product => (
                                <HitComponent hit={product} key={`${category}-${product.name}`} />
                            ))}
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default connectStateResults(CustomHist)
