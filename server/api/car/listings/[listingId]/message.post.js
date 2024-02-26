import Joi from 'joi'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const schema = Joi.object({
    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] }
    }),
    phone: Joi.string().length(10).pattern(new RegExp('^[0-9]{10}$')),
    name: Joi.string().min(3).max(50),
    message: Joi.string().min(10).max(500)

})

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const {listingId} = event.context.params

    const {error, value} =  await schema.validate(body)

    if (error) {
        throw createError({
            statusCode: 412,
            statusMessage: error.message
        })
    }

    const {message, email, phone, name} = body

    return prisma.message.create({
        data: {
            message,
            email,
            phone,
            name,
            listingId: parseInt(listingId)
        }
    })
})