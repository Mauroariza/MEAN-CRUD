import { model } from 'mongoose'

export default model('Employee', {
    fullName: { type: String },
    position: { type: String },
    location: { type: String },
    salary: { type: Number },
})