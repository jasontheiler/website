<script lang="ts" setup>
import { getDefaultExports } from "~/utils";

const notes = await getDefaultExports<Note>(
  import.meta.glob!("/content/notes/**/*.md")
);
notes.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
</script>

<template>
  <main
    class="w-full max-w-screen-xl mx-auto mt-32 px-4 xs:(px-6) sm:(px-8) md:(px-10) lg:(px-12)"
  >
    <div v-for="{ title, createdAt, body } in notes">
      <h2
        class="mb-2 bg-clip-text bg-gray-300 bg-foil font-bold text-2xl text-transparent"
      >
        {{ title }}
      </h2>

      <p class="italic text-gray-500">
        {{
          createdAt.toLocaleString("en-US", {
            timeZone: "UTC",
            dateStyle: "medium",
            timeStyle: "long",
            hour12: false,
          })
        }}
      </p>

      <AppProse :content="body" />
    </div>
  </main>
</template>
