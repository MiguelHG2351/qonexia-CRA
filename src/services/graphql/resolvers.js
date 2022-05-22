import MongoLib from 'src/libs/mongo'

export default {
    Query: {
        getProducts: async () => {
            // eslint-disable-next-line no-new
            const lib = new MongoLib()
            const getPhones = await lib.getAll('phones', {})
            return getPhones
        },
        getProduct: async (_, { name }) => {
            // eslint-disable-next-line no-new
            const lib = new MongoLib()
            const getPhones = await lib.get('phones', {
                name,
            })
            return getPhones
        },
        findProducts: async (_, { name }) => {
            // eslint-disable-next-line no-new
            const lib = new MongoLib()
            const findPhones = await lib.getAll('phones', {})
            const phones = findPhones.filter((phone) =>
                phone.name.toLowerCase().includes(name.toLowerCase())
            )

            return phones
        },
    },
}
