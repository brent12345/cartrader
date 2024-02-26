<script setup>
    definePageMeta({
  layout: "custom",
});

const supabase = useSupabaseClient()

const user = useSupabaseUser()

const login = async () => {
    const {error} = supabase.auth.signInWithOAuth({
        provider: "google"
    })

    if(error){
        console.log(error)
    }
}

// console.log(supabase)
</script>

<template>
    {{ user }}
    <div class="mt-10">
        <h1 class="text-5xl font-bold mb-7">Login</h1>
        <button @click="login" class="bg-red-300 p-3 rounded text-white font-bold">Login With Google</button>
    </div>
</template>