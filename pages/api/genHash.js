import jwt from 'jsonwebtoken'
// import { PrismaClient } from '@prisma/client'

export default function genHash(req, res) {
    // const client = new PrismaClient()
    const secret = process.env.JWT_SECRET
    console.log(secret)
    const token = jwt.sign({
        name: 'Xiaomi Redmi Note 8 Pro',
        count: 1,
    }, secret)

    res.json({
        token,
    })
}
