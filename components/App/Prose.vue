<script setup lang="ts">
defineProps<{ content: string | Object /* Component */ }>();
</script>

<template>
  <div>
    <component :is="content" />
  </div>
</template>

<style scoped>
:deep(a) {
  @apply underline underline-current;
}

:deep(pre) {
  @apply -mx-4 p-4;
}
</style>
