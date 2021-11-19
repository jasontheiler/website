<script setup lang="ts">
const tools = await Promise.all(
  Object.values(import.meta.glob("/content/tools/**/*.md")).map(
    async (module) => (await module()).default
  )
);
// const categorizedTools = tools.reduce();
</script>

<template>
  <main class="w-full max-w-screen-xl mx-auto mt-32 px-4 sm:(px-6)">
    <TheWipNotice />

    <div v-for="{ name, body } in tools">
      <h1
        class="mb-2 bg-clip-text bg-gray-300 bg-foil font-bold text-2xl text-transparent"
      >
        {{ name }}
      </h1>

      <Component :is="body" />
    </div>
  </main>
</template>
