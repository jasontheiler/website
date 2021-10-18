<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: "sm" | "base" | "lg";
    variant?: "primary";
  }>(),
  {
    size: "base",
    variant: "primary",
  }
);
</script>

<template>
  <button
    :class="{
      'px-3 py-1.5 text-sm': size === 'sm',
      'px-4 py-2 text-base': size === 'base',
      'px-5 py-2.5 text-lg': size === 'lg',
      'bg-gray-300 bg-foil text-black hover:(bg-gray-400) focus-visible:(ring-gray-300)':
        variant === 'primary',
    }"
    class="flex items-center rounded-lg font-semibold transition-shadow duration-100 focus-visible:(outline-none ring ring-offset-4 ring-offset-true-gray-900) disabled:(opacity-50 pointer-events-none)"
  >
    <span
      v-if="$slots.iconLeft"
      :class="{
        '-ml-0.75 mr-1.5': size === 'sm',
        '-ml-1 mr-2': size === 'base',
        '-ml-1.25 mr-2.5': size === 'lg',
      }"
      class="flex justify-center items-center"
    >
      <slot name="iconLeft" />
    </span>

    <slot />

    <span
      v-if="$slots.iconRight"
      :class="{
        'ml-1.5 -mr-0.75': size === 'sm',
        'ml-2 -mr-1': size === 'base',
        'ml-2.5 -mr-1.25': size === 'lg',
      }"
      class="flex justify-center items-center"
    >
      <slot name="iconRight" />
    </span>
  </button>
</template>

<style scoped>
.bg-foil {
  background-image: linear-gradient(
    135deg,
    transparent 28%,
    #ff00ff21 44%,
    #0000ff21 52%,
    #00ffff21 60%,
    #00ff0021 68%,
    #ffff0021 76%,
    #ff000021 84%,
    transparent 100%
  );
}
</style>
