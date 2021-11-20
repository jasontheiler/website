<script setup lang="ts">
import { RouteLocationRaw } from "vue-router";

const props = defineProps<{ to: RouteLocationRaw }>();
const { to } = toRefs(props);

const isExternal = computed(
  () => typeof to.value === "string" && /^http/.test(to.value)
);
</script>

<template>
  <Component
    :is="isExternal ? 'a' : 'NuxtLink'"
    v-bind="
      isExternal
        ? { href: to, target: '_blank', rel: 'nofollow noopener noreferrer' }
        : { to }
    "
    class="text-gray-300 hover:(text-white)"
    ><slot
  /></Component>
</template>
