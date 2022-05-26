<script lang="ts" setup>
import { formatDate } from "~/utils";

const { data: notes } = await useAsyncData("notes", async () => {
  const notes = await queryContent<Note>("notes").find();

  notes.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return notes;
});
</script>

<template>
  <main class="mt-32">
    <article v-for="note in notes">
      <h2
        class="mb-2 bg-clip-text bg-gray-300 bg-foil font-bold text-2xl text-transparent"
      >
        {{ note.title }}
      </h2>

      <p class="italic text-gray-500">
        {{ formatDate(note.createdAt) }}
      </p>

      <ContentRenderer :value="note" />
    </article>
  </main>
</template>
