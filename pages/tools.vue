<script lang="ts" setup>
import { getDefaultExports } from "~/utils";

const tools = await getDefaultExports<Tool>(
  import.meta.glob!("/content/tools/**/*.md")
);

const categories = tools.reduce((categories, tool) => {
  const category = categories.find(
    (category) => category.name === tool.category
  );

  if (category) category.tools.push(tool);
  else categories.push({ name: tool.category, tools: [tool] });

  return categories;
}, [] as { name: string; tools: Tool[] }[]);
categories.sort((a, b) => a.name.localeCompare(b.name));
</script>

<template>
  <main
    class="w-full max-w-screen-xl mx-auto mt-32 px-4 xs:(px-6) sm:(px-8) md:(px-10) lg:(px-12)"
  >
    <div class="grid gap-16 md:(grid-cols-2)">
      <div v-for="{ name, tools } in categories">
        <h2>{{ name }}</h2>

        <div v-for="{ name, link, body } in tools">
          <h3
            class="mb-2 bg-clip-text bg-gray-300 bg-foil font-bold text-2xl text-transparent"
          >
            <AppLink :to="link">{{ name }}</AppLink>
          </h3>

          <AppProse :content="body" />
        </div>
      </div>
    </div>
  </main>
</template>
