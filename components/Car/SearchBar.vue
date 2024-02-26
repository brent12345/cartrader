<script setup>
  const city = ref("")
  let cityError = ref(false)

  const handleSearch = () => {
    if (!city.value) {
     return cityError.value = true
    } 
    navigateTo(`/city/${city.value}/car`)
  }
</script>  
  
<template>
  <!-- HOME SEARCH BAR -->
  <div class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
    <input type="text" class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none" placeholder="Search Your Car" 
    v-model="city" :class="cityError ? 'border-red-500 border' : ''">
    <button class="bg-green-500 px-10 text-white"  @click="handleSearch">Search</button>
  </div>
  <!-- HOME SEARCH BAR -->
</template>