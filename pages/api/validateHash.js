import jwt from 'jsonwebtoken'

export default function validateHash(req, res) {
    try {
        const verify = jwt.verify(req.query.token, process.env.JWT_SECRET)
        res.json({
            isValid: true,
            info: verify
        })
    } catch (error) {
        res.status(401).json({
            isValid: false
        })
    }
}
