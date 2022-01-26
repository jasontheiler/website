<script setup lang="ts">
import { DefineComponent } from "vue";

defineProps<{ content: DefineComponent<{}, {}, any> }>();
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

:deep(code) {
  @apply font-mono;
}

:deep(pre) {
  @apply p-4;
}

:deep(pre:not([data-filename="shell"])) {
  @apply relative pt-12 rounded-3xl bg-gray-900 before:(content-[""] absolute left-0 top-0 w-24 h-8);
}

:deep(pre:not([data-filename="shell"])::before) {
  mask: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6 2'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3Ccircle cx='3' cy='1' r='1'/%3E%3Ccircle cx='5' cy='1' r='1'/%3E%3C/svg%3E")
    no-repeat;
  mask-size: 100% 100%;
  background-image: linear-gradient(
    90deg,
    #ff554e 0%,
    #ff554e 33.3%,
    #ffbf2f 33.3%,
    #ffbf2f 66.6%,
    #28ca42 66.6%,
    #28ca42 100%
  );
}

:deep(pre[data-filename="shell"]) {
  @apply rounded-lg bg-gray-800;
}

:deep(pre[data-filename="shell"] .line) {
  @apply first:before:(content-["$"]);
}
</style>
