<script setup lang="ts">
import { DefineComponent } from "vue";

defineProps<{ content: DefineComponent<{}, {}, any> }>();
</script>

<template>
  <div>
    <Component :is="content" />
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
