<script setup>


const route = useRoute()

const { toTitleCase } = useUtilities()

// const toTitleCase = (str) => {
//     return str.replace(/\w\S*/g, ((txt) => {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
// }))} 

// const carName = toTitleCase(route.params.city)
// console.log(carName)

useHead ({
    title: `${route.params.make ? toTitleCase(route.params.make) : 'Cars'} in ${toTitleCase(route.params.city)}`
})

definePageMeta ({
    layout: 'custom'
})

</script>

<template>
    <div>
          <!-- CARS PAGE -->
     
    <div class="mt-32 flex">
        <NuxtErrorBoundary>
            <CarSideBar />
            <NuxtPage />
            <template #error="{error}">
                <div class="text-center mx-auto flex flex-col">
                    <h2 class="text-5xl text-red-600">Sorry, there was and error</h2>
                    <code>{{ error }}</code>
                    <button class="text-white bg-green-400 px-10 py-3 rounded mt-4" @click="error.value = null">Back</button>
                </div>
            </template>
        </NuxtErrorBoundary>
            </div>
    </div>

</template>