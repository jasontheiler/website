<script lang="ts" setup>
import { Motion, Presence } from "motion/vue";

const isOpen = ref(false);
const open = () => (isOpen.value = true);
const close = () => {
  isOpen.value = false;
  query.value = "";
};

const commandCenterElement = ref<HTMLElement>();

onClickOutside(commandCenterElement, () => close());
onKeyStroke("Escape", () => close());
onKeyStroke("k", (e) => {
  if (!(e.ctrlKey || e.metaKey)) return;

  e.preventDefault();
  open();
});

const query = ref("");
</script>

<template>
  <Presence>
    <Motion
      v-if="isOpen"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      :transition="{ duration: 0.2 }"
      class="fixed inset-0 z-100 bg-dark-900/50 backdrop-blur-8"
    >
      <div ref="commandCenterElement" class="w-full max-w-xl">
        <input v-model="query" />
      </div>
    </Motion>
  </Presence>
</template>
