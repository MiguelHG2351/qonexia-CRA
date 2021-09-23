import mongoose from 'mongoose'

const phoneModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    nfc: {
        type: Boolean,
    },
    camera: {
        type: Array,
    },
    cpu: {
        type: Array,
    },
    ram: {
        type: Array,
    },
    storage: {
        type: Array,
    },
    batery: {
        type: Number,
    },
    so: {
        type: String,
    },
    ui: {
        type: String,
    }
})

export default mongoose.models.phone || mongoose.model('phone', phoneModel)
