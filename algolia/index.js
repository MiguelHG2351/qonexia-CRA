const { PrismaClient } = require('@prisma/client')
const algoliasearch = require('algoliasearch')

const prisma = new PrismaClient();

(async () => {
    const data = await prisma.phones.findMany()
    const client = algoliasearch('5L0EKC0AON', process.env.ALGOLIA_ADMIN_API_KEY)
    const index = client.initIndex('qonexia-products-index')
    try {
        await index.saveObjects([...data])
    } catch (err) {
        console.error(err)
    }
})()
