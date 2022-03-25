<script lang="ts" setup>
import {
  Box,
  Camera,
  LambertMaterial,
  PointLight,
  Renderer,
  Scene,
} from "troisjs";
</script>

<template>
  <main class="h-screen">
    <ClientOnly>
      <Renderer resize alpha antialias orbitCtrl>
        <Camera :position="{ z: 10 }" />

        <Scene>
          <PointLight
            :position="{ x: -25, y: -75, z: -50 }"
            :intensity="0.25"
          />
          <PointLight :position="{ x: 25, y: 75, z: 50 }" />

          <Box :size="4.5">
            <LambertMaterial />
          </Box>
        </Scene>
      </Renderer>
    </ClientOnly>
  </main>
</template>
