<script lang="ts" setup>
import { DefineComponent } from "vue";

defineProps<{ content: DefineComponent<{}, {}, any> }>();
</script>

<template>
  <div class="grid-base">
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
  @apply overflow-hidden;
}

:deep(pre) code {
  @apply block scrollbar-thin scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-thumb-gray-700 hover:(scrollbar-thumb-gray-600);
}

:deep(pre[data-filename="shell"]) {
  @apply rounded-lg bg-gray-800;
}

:deep(pre[data-filename="shell"]) code {
  @apply p-5 leading-normal;
}

:deep(pre[data-filename="shell"]) .line {
  @apply first:before:(content-["❯"] mr-2 opacity-50);
}

:deep(pre:not([data-filename="shell"])) {
  @apply relative pt-9 rounded-3xl bg-gray-900 before:(content-[""] absolute left-8 top-0 w-13.5 h-18) after:(content-[attr(data-filename)] absolute left-27 top-0 h-18 flex items-center font-mono);
}

:deep(pre:not([data-filename="shell"])::before) {
  mask: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 2'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3Ccircle cx='4.5' cy='1' r='1'/%3E%3Ccircle cx='8' cy='1' r='1'/%3E%3C/svg%3E")
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

:deep(pre:not([data-filename="shell"])) code {
  @apply p-8 leading-loose;
}

:deep(pre[data-highlighted]) .line:not(.highlight) {
  @apply opacity-50;
}
</style>
