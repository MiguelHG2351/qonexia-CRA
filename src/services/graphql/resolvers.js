import MongoLib from 'libs/mongo'

export default {
    Query: {
        getProducts: async () => {
            // eslint-disable-next-line no-new
            const lib = new MongoLib()
            const getPhones = await lib.getAll('phone', {})
            return getPhones
        },
        getProduct: async (_, { name }) => {
            // eslint-disable-next-line no-new
            const lib = new MongoLib()
            const getPhones = await lib.get('phone', {
                name,
            })
            return getPhones
        },
        findProducts: async (_, { name }) => {
            // eslint-disable-next-line no-new
            const lib = new MongoLib()
            const findPhones = await lib.getAll('phone', {})
            const phones = findPhones.filter((phone) =>
                phone.name.toLowerCase().includes(name.toLowerCase())
            )

            return phones
        },
    },
}
