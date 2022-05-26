<script lang="ts" setup>
const { data: categories } = await useAsyncData("tools", async () => {
  const tools = await queryContent<Tool>("tools").find();

  const categories = tools.reduce((categories, tool) => {
    categories[tool.category] ??= [];
    categories[tool.category].push(tool);

    return categories;
  }, {} as Record<string, Tool[]>);

  return categories;
});
</script>

<template>
  <main
    class="w-full max-w-screen-xl mx-auto mt-32 px-4 xs:(px-6) sm:(px-8) md:(px-10) lg:(px-12)"
  >
    <div class="grid gap-16 md:(grid-cols-2)">
      <div v-for="(tools, name) in categories">
        <h2>{{ name }}</h2>

        <div v-for="tool in tools">
          <h3
            class="mb-2 bg-clip-text bg-gray-300 bg-foil font-bold text-2xl text-transparent"
          >
            <AppLink :to="tool.link" target="_blank" class="hover:(text-white)">
              {{ tool.name }}
            </AppLink>
          </h3>

          <ContentRenderer :value="tool" />
        </div>
      </div>
    </div>
  </main>
</template>
