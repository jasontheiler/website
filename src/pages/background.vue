<script lang="ts" setup>
definePageMeta({ layout: "empty" });

const router = useRouter();

onKeyStroke("Escape", () =>
  navigateTo((router.options.history.state.back as string) ?? { name: "index" })
);
</script>

<template></template>
