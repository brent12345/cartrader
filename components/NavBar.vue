<script setup>

  const user = useSupabaseUser()
  const supabase = useSupabaseClient()

  const logout = async () => {
    const { error } = supabase.auth.signOut()
    navigateTo('/')
  //  try {
  //   await $fetch('/api/_supabase/session', {
  //       method: "POST",
  //       body: {event: "SIGNED OUT", session: null}
  //   })
  //  } catch (error) {
  //    console.log(error)
  //  }

    if(error) {
      return console.log(error)
    }
  }

  // 

</script>

<template>
     <!-- NAVBAR -->
     <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
      <NuxtLink class="text-3xl font0mono" href="/">CarTrader</NuxtLink>
      <div v-if="user" class="flex">
        <NuxtLink to="/profile/listings" class="mr-5">Trading Profile</NuxtLink>
        <p class="cursor-pointer" @click="logout">Logout</p>
      </div>
      <NuxtLink v-else to="/login" class="mr-5">Login</NuxtLink>
    </header>
</template>