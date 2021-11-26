<script setup lang="ts">
const notes = await Promise.all(
  Object.values(import.meta.glob("/content/notes/**/*.md")).map(
    async (module) => (await module()).default
  )
);
const sortedNotes = notes.sort(
  (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
);
</script>

<template>
  <main class="w-full max-w-screen-xl mx-auto mt-32 px-4 sm:(px-6)">
    <TheWipNotice />
  </main>
</template>
