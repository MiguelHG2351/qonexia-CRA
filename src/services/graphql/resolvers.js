// import MongoLib from 'src/libs/mongo'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default {
    Query: {
        getProducts: async () => {
            // eslint-disable-next-line no-new
            const getPhones = await prisma.phones.findMany({})
            return getPhones
        },
        getProduct: async (_, { name }) => {
            // eslint-disable-next-line no-new
            const getPhone = await prisma.phones.findFirst({
                where: {
                    name
                }
            })
            return getPhone
        },
        findProducts: async (_, { name }) => {
            // eslint-disable-next-line no-new
            const findProducts = await prisma.phones.findMany({
                where: {
                    name: {
                        contains: name
                    }
                }
            })
            // const lib = new MongoLib()
            // const findPhones = await lib.getAll('phones', {})
            // const phones = findPhones.filter((phone) =>
            //     phone.name.toLowerCase().includes(name.toLowerCase())
            // )

            return findProducts
        },
    },
}
