<script setup lang="ts">
import { getDefaultExports } from "~/utils";

const notes = await getDefaultExports<Note>(
  import.meta.glob("/content/notes/**/*.md")
);
notes.sort(
  (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
);
</script>

<template>
  <main
    class="w-full max-w-screen-xl mx-auto mt-32 px-4 xs:(px-6) sm:(px-8) md:(px-10) lg:(px-12)"
  >
    <div v-for="{ title, body } in notes">
      <h2
        class="mb-2 bg-clip-text bg-gray-300 bg-foil font-bold text-2xl text-transparent"
      >
        {{ title }}
      </h2>

      <AppProse :content="body" />
    </div>
  </main>
</template>
