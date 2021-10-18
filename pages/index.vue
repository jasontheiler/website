<script setup lang="ts">
import IconFlash from "~icons/ri/flashlight-fill";
</script>

<template>
  <main class="w-full max-w-screen-md mx-auto mt-32 px-4 sm:(px-6)">
    <h1 class="mb-16 font-bold text-7xl">
      <span class="bg-clip-text bg-gray-300 bg-foil text-transparent">
        Hi there
      </span>
      👋
    </h1>

    <AppButton>
      Click me!
      <template #iconRight>
        <IconFlash />
      </template>
    </AppButton>

    <br v-for="_ in 100" />
  </main>
</template>

<style scoped>
.bg-foil {
  background-image: linear-gradient(
    135deg,
    transparent 28%,
    #ff00ff21 44%,
    #0000ff21 52%,
    #00ffff21 60%,
    #00ff0021 68%,
    #ffff0021 76%,
    #ff000021 84%,
    transparent 100%
  );
}
</style>
