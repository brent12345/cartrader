<script setup>
const route = useRoute()

// const sanitizeInput = (input) => {
//     console.log('Original input:', input);
//     // Removing anything that is not a digit
//     const sanitizedInput = input ? input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script\s*>/gi, input) : undefined;
//     console.log('Sanitized input:', sanitizedInput);
//     return sanitizedInput;
// };

//console.log(sanitizeInput(route.query.maxPrice))

const maxPrice = computed(() => route.query.maxPrice)
const minPrice = computed(() => route.query.minPrice)
const { data:cars, refresh } = await useFetchCars(route.params.city, {
 minPrice,
 maxPrice,
 make: route.params.make
});
watch(() => route.query, () => refresh());

</script>

<template>
<div>
  
<CarCards v-if="cars.length" :cars="cars"/>
<div v-else>
    <h2 class="text-red-400">no cars have been found for these filters</h2>
</div>
</div>
</template>