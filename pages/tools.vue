<script setup lang="ts">
const tools = await Promise.all(
  Object.values(import.meta.glob("/content/tools/**/*.md")).map(
    async (module) => (await module()).default
  )
);
const categories = tools.reduce((categories, tool) => {
  const idx = categories.findIndex(
    (category) => category.name === tool.category
  );

  if (idx >= 0) categories[idx].tools.push(tool);
  else categories.push({ name: tool.category, tools: [tool] });

  return categories;
}, []);
categories.sort((a, b) => a.name.localeCompare(b.name));
</script>

<template>
  <main class="w-full max-w-screen-xl mx-auto mt-32 px-4 sm:(px-6)">
    <TheWipNotice />

    <div v-for="{ name, tools } in categories">
      <h1>{{ name }}</h1>

      <div v-for="{ name, link, body } in tools">
        <h2
          class="mb-2 bg-clip-text bg-gray-300 bg-foil font-bold text-2xl text-transparent"
        >
          <AppLink :to="link">{{ name }}</AppLink>
        </h2>

        <Component :is="body" />
      </div>
    </div>
  </main>
</template>
