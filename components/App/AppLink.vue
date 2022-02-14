<script lang="ts" setup>
import { RouteLocationRaw } from "vue-router";

const props = defineProps<{ to: RouteLocationRaw }>();
const { to } = toRefs(props);

const isExternal = computed(
  () => typeof to.value === "string" && /^http/.test(to.value)
);
</script>

<template>
  <component
    :is="isExternal ? 'a' : 'NuxtLink'"
    v-bind="
      isExternal
        ? { href: to, target: '_blank', rel: 'nofollow noopener noreferrer' }
        : { to }
    "
    class="text-gray-300 no-underline hover:(text-white)"
    ><slot
  /></component>
</template>
