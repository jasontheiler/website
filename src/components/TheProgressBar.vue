<script lang="ts" setup>
const nuxtApp = useNuxtApp();

nuxtApp.hook("page:start", () => {});
nuxtApp.hook("page:finish", () => {});
</script>

<template>
  <Teleport to="body">
    <div>
      <div />
    </div>
  </Teleport>
</template>
