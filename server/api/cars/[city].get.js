import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler((event) => {
    const {city} = event.context.params
    const {make, minPrice, maxPrice} = getQuery(event)

    const filters = {
        city: city.toLocaleLowerCase(),
    }

    // filteredCars = cars.filter(car => car.city.toLocaleLowerCase() === city.toLocaleLowerCase())

    if(make) { 
        filters.make = make
        // filteredCars = cars.filter(car => car.make.toLocaleLowerCase() === make.toLocaleLowerCase())
       
    }

    if(minPrice || maxPrice) {
        filters.price = {}
    }

    if(minPrice) {  
        filters.price.gte = parseInt(minPrice)
        // filteredCars = filteredCars.filter(car => parseInt(car.price) >= parseInt(minPrice))
    }

    if(maxPrice) {  
        filters.price.lte = parseInt(maxPrice)
        // filteredCars = filteredCars.filter(car => parseInt(car.price) <= parseInt(maxPrice))
    }
    // return filters

    return prisma.car.findMany({
        where: 
            filters
            // city: "halifax",
            // make: "Nissan",
            // price: {
            //     gte: 9000,
            //     lte: 10000
            

        })
    // return cars.map(car => {    
    //     return {
    //         id: car.id,
    //         name: car.name,
    //         price: car.price,
    //         image: car.image
    //     }
    // }
    })
