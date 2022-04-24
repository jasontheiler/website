<script lang="ts" setup>
import { formatDate, getDefaultExports } from "~/utils";

const notes = await getDefaultExports<Note>(
  import.meta.glob!("/content/notes/**/*.md")
);
notes.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
</script>

<template>
  <main class="mt-32">
    <article v-for="{ title, createdAt, body } in notes">
      <h2
        class="mb-2 bg-clip-text bg-gray-300 bg-foil font-bold text-2xl text-transparent"
      >
        {{ title }}
      </h2>

      <p class="italic text-gray-500">
        {{ formatDate(createdAt) }}
      </p>

      <AppProse>
        <component :is="body" />
      </AppProse>
    </article>
  </main>
</template>
