function sortCategories(searchResults) {
    const categoriesResults = {}

    for (const product of searchResults.hits) {
        if (!categoriesResults[product.type]) {
            categoriesResults[product.type] = []
        }
        categoriesResults[product.type].push(product)
    }

    return categoriesResults
}

export default sortCategories
