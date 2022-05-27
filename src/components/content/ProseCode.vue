<script lang="ts" setup>
defineProps<{
  code: string;
  language?: string;
  filename?: string;
  highlights?: number[];
}>();
</script>

<template>
  <slot />
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
