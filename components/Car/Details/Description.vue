<script setup>
const props = defineProps({
  description: String,
})
</script>
<template>
     <!-- CAR DESCRIPTION -->
     <div class="mt-5">
        <p class="mb-10">
          {{ description }}
        </p>
      </div>
      <!-- CAR DESCRIPTION -->
</template>