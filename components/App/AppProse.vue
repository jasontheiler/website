<script lang="ts" setup>
defineProps<{ flush?: boolean }>();
</script>

<template>
  <div :class="{ flush }" class="grid-base">
    <slot />
  </div>
</template>

<style scoped>
:deep(> *) {
  @apply \\
    not-last:(mb-10)
    sm:(text-lg);
}

:deep(a) {
  @apply underline underline-current;
}

:deep(code) {
  @apply font-mono text-0.875em;
}

:deep(pre) {
  @apply \\
    col-span-mid p-4 border-y border-gray-800 bg-gray-900 overflow-hidden
    md:(border rounded-xl);
}

:deep(pre) code {
  @apply block text-sm;
}

:deep(pre[data-filename="shell"]) code {
  @apply leading-normal;
}

:deep(pre[data-filename="shell"]) .line {
  @apply first:before:(content-["❯"] mr-2 opacity-50);
}

:deep(pre:not([data-filename="shell"])) {
  @apply \\
    relative pt-7
    before:(content-[""] absolute left-4 top-0 w-13.5 h-18)
    after:(content-[attr(data-filename)] absolute left-23 top-0 h-18 flex items-center font-mono text-sm);
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
  @apply leading-loose;
}

:deep(pre[data-highlighted]) .line:not(.highlight) {
  @apply opacity-50;
}
</style>
