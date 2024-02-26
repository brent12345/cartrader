<script setup>
const route = useRoute()
const message = ref({
    name:"",
    email:"",
    phone: "",
    message: ""
})
const errorMessage = ref("")
const successMessage = ref("")
const disabledButton = computed(() => {
  for(let key in message.value) {
    if(!message.value[key]) return true 
  }
  return false
})

const onSubmit = async () => {
  try {
    const response = await $fetch(`/api/car/listings/${route.params.id}/message`, {
      method: "post",
      body: message.value
    })
    message.value = ref({
    name:"",
    email:"",
    phone: "",
    message: ""
    })
    successMessage.value = "Message has been sent to car seller"

  } catch (err) {
    errorMessage.value = err.statusMessage
    successMessage.value = ""
  }
}
</script>

<template>
    <!-- CAR CONTACT -->
    <div class="mt-10">
        <div class="flex w-[600px] justify-between">
          <input v-model="message.name" type="text" class="border p-1" placeholder="Name" />
          <input v-model="message.email" type="text" class="border p-1" placeholder="Email" />
          <input v-model="message.phone" type="text" class="border p-1" placeholder="Phone" />
        </div>
          <div class="flex mt-4 w-[600px]">
            <textarea v-model="message.message" class="border p-1 w-full" placeholder="message"></textarea>
          </div>
          <button class="bg-blue-400 text-white px-10 py-3 rounded mt-4" @click="onSubmit" :disabled="disabledButton">Send Message</button>
          <p class="mt-3 text-red-400" v-if="errorMessage">{{ errorMessage }}</p>
          <p class="mt-3 text-green-400" v-if="successMessage">{{ successMessage }}</p>
        </div>
      <!-- CAR CONTACT -->
</template>
