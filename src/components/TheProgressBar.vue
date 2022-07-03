<script lang="ts" setup>
import { Motion, Presence } from "motion/vue";

const nuxtApp = useNuxtApp();

const progress = ref<number | null>(null);
const isProgressing = computed(() => progress.value !== null);

const withVariation = (base: number, variation: number) =>
  base + (Math.random() - 0.5) * variation;

let trickleTimeout: NodeJS.Timeout;
const trickle = () => {
  progress.value! += withVariation(4, 2);
  if (progress.value! >= 90) progress.value = 90;
  else trickleTimeout = setTimeout(trickle, withVariation(250, 125));
};

nuxtApp.hook("page:start", () => {
  progress.value = 0;
  trickle();
});
nuxtApp.hook("page:finish", () => {
  if (!isProgressing.value) return;

  clearTimeout(trickleTimeout);
  progress.value = 100;
});

const onMotioncomplete = () => {
  if (progress.value === 100) progress.value = null;
};
</script>

<template>
  <Teleport to="body">
    <Presence>
      <Motion
        v-if="isProgressing"
        :exit="{ opacity: 0 }"
        class="fixed inset-0 bottom-auto z-9999 overflow-hidden"
      >
        <Motion
          :initial="{ transform: 'translateX(-100%)' }"
          :animate="{ transform: `translateX(-${100 - progress!}%)` }"
          class="w-full h-0.5 bg-emerald"
          @motioncomplete="onMotioncomplete"
        />
      </Motion>
    </Presence>
  </Teleport>
</template>
