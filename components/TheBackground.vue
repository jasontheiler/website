<script lang="ts" setup>
import { Camera, Renderer, Scene } from "troisjs";
</script>

<template>
  <div class="fixed inset-0 -z-1">
    <ClientOnly>
      <Renderer resize alpha antialias>
        <Camera :position="{ z: 10 }" />

        <Scene></Scene>
      </Renderer>
    </ClientOnly>
  </div>
</template>
