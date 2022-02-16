const { PrismaClient } = require('@prisma/client')
const algoliasearch = require('algoliasearch')

const prisma = new PrismaClient();

(async () => {
    const data = await prisma.phones.findMany()
    const client = algoliasearch('5L0EKC0AON', '8ea138adf21bf37d0712cf1f39d8826a')
    const index = client.initIndex('qonexia-products-index')
    try {
        await index.saveObjects([...data])
    } catch (err) {
        console.log(err)
    }
})()
