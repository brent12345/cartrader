<script setup>
const route = useRoute()

const { data: car } = await useFetchCar(route.params.id)

const { toTitleCase } = useUtilities()

useHead({
  title: toTitleCase(route.params.name)
})

if(!car.value){
  throw createError({
    statusCode: 404,
    message: `Car with ID of ${route.params.id} does not exist`
  })
}

definePageMeta ({
    layout: 'custom'
})
</script>

<template>
  
        <!-- CAR DETAIL PAGE -->
   <div v-if="car">
      <CarDetailsHero :car="car"/>
      <CarDetailsAttributes :features="car.features"/>
      <CarDetailsDescription :description="car.description"/>
      <CarDetailsContact />
    </div>
    <!-- CAR DETAIL PAGE -->
   
</template>